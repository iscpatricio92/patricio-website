import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  index: number;
  scrollProgress: number;
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, featured, index, scrollProgress }: ProjectCardProps) => {
  return (
    <div 
      className={`group stat-card p-8 h-full flex flex-col hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] ${featured ? 'md:col-span-2' : ''}`}
      style={{
        transform: `translateY(${(1 - scrollProgress) * (20 + index * 10)}px) rotateX(${(1 - scrollProgress) * 5}deg)`,
        opacity: 0.4 + scrollProgress * 0.6
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Github className="w-6 h-6 text-primary" />
        </div>
        <div className="flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="Ver en GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="Ver demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
        {title}
        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
      </h3>
      
      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    title: 'Fisio Movimiento',
    description:
      'Sitio web profesional para Lic. Analaura Reyes Priego. Plataforma moderna y responsive para presentar servicios, credenciales, precios y facilitar el contacto con pacientes.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive'],
    githubUrl: 'https://github.com/iscpatricio92/fisio-movimiento',
    featured: true,
  },
  {
    title: 'CareCore',
    description:
      'Sistema de expediente médico centrado en el paciente. El paciente es dueño de su información y controla con quién la comparte.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Security'],
    githubUrl: 'https://github.com/iscpatricio92/carecore',
  },
  {
    title: 'Booking System',
    description:
      'Sistema de reservaciones para salón de belleza. Gestión completa de citas, servicios y clientes.',
    technologies: ['Next.js', 'PLpgSQL', 'PostgreSQL', 'Full-Stack'],
    githubUrl: 'https://github.com/iscpatricio92/booking',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 bg-background overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Parallax background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-primary/15 rounded-full blur-[150px] transition-transform duration-700"
          style={{ transform: `translate(${scrollProgress * -100}px, ${scrollProgress * 50}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[130px] transition-transform duration-700"
          style={{ transform: `translate(${scrollProgress * 80}px, ${scrollProgress * -40}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] transition-transform duration-1000"
          style={{ transform: `scale(${0.8 + scrollProgress * 0.4}) translate(-50%, -50%)` }}
        />
      </div>

      {/* Top transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-up">
          <div 
            className="text-center mb-20"
            style={{ transform: `translateY(${scrollProgress * -20}px)` }}
          >
            <p className="text-primary font-medium mb-4 uppercase tracking-widest text-sm">Portfolio</p>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Proyectos
              <span className="gradient-text"> Destacados</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selección de proyectos que demuestran mi experiencia y pasión por el desarrollo web
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} animation="fade-up" delay={index * 150}>
              <ProjectCard {...project} index={index} scrollProgress={scrollProgress} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={500}>
          <div 
            className="text-center mt-12"
            style={{ transform: `translateY(${(1 - scrollProgress) * 30}px)` }}
          >
            <a
              href="https://github.com/iscpatricio92?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 border border-border rounded-full text-foreground hover:border-primary/50 hover:text-primary hover:scale-105 transition-all duration-300 font-medium backdrop-blur-sm"
            >
              Ver más proyectos en GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default ProjectsSection;
