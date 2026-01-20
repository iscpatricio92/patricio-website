import { useState, useRef, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remoto",
    period: "2023 - Presente",
    description: "Desarrollo de aplicaciones web completas para clientes diversos, desde startups hasta empresas establecidas.",
    achievements: [
      "Desarrollo de sistemas de gestión médica con React y Node.js",
      "Implementación de sistemas de reservas en tiempo real",
      "Optimización de rendimiento en aplicaciones existentes"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Proyectos Personales",
    location: "Remoto",
    period: "2022 - 2023",
    description: "Creación de proyectos open source y aplicaciones web modernas enfocadas en la experiencia de usuario.",
    achievements: [
      "Desarrollo de CareCore - Sistema de gestión para profesionales de salud",
      "Creación de Fisio Movimiento - Plataforma de gestión clínica",
      "Contribuciones a proyectos open source"
    ],
    technologies: ["React", "JavaScript", "CSS3", "Git", "REST APIs"]
  },
  {
    id: 3,
    title: "Web Developer Junior",
    company: "Iniciando en Tech",
    location: "Remoto",
    period: "2021 - 2022",
    description: "Aprendizaje intensivo y desarrollo de proyectos para construir un portafolio sólido.",
    achievements: [
      "Completé múltiples cursos de desarrollo web",
      "Desarrollé proyectos prácticos aplicando conocimientos",
      "Establecí bases sólidas en HTML, CSS y JavaScript"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"]
  }
];

const ExperienceCard = ({ experience, isActive, onClick, index, scrollProgress }: { 
  experience: Experience; 
  isActive: boolean; 
  onClick: () => void;
  index: number;
  scrollProgress: number;
}) => {
  return (
    <AnimatedSection animation="fade-left" delay={index * 150}>
      <div 
        className={cn(
          "relative pl-10 pb-10 cursor-pointer group",
          "before:absolute before:left-0 before:top-3 before:w-4 before:h-4 before:rounded-full before:border-2 before:border-primary before:bg-background before:z-10 before:transition-all before:duration-300",
          isActive && "before:bg-primary before:scale-125 before:shadow-lg before:shadow-primary/50",
          "after:absolute after:left-[7px] after:top-7 after:w-0.5 after:h-[calc(100%-1.75rem)] after:bg-border",
          "last:after:hidden"
        )}
        onClick={onClick}
        style={{
          transform: `translateX(${(1 - scrollProgress) * (index % 2 === 0 ? -40 : 40)}px)`,
          opacity: 0.5 + scrollProgress * 0.5
        }}
      >
        <div 
          className={cn(
            "stat-card p-6 transition-all duration-500",
            "hover:border-primary/30",
            isActive && "border-primary/50 shadow-lg shadow-primary/10"
          )}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-primary font-medium mt-1">
                <Briefcase className="w-4 h-4" />
                {experience.company}
              </div>
            </div>
            <button className="text-muted-foreground hover:text-primary transition-colors p-2">
              {isActive ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </div>
          </div>

          <div 
            className={cn(
              "overflow-hidden transition-all duration-500",
              isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <p className="text-muted-foreground mb-4">
              {experience.description}
            </p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-3">Logros principales:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ExperienceSection = () => {
  const [activeId, setActiveId] = useState<number>(1);
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
    <section ref={sectionRef} id="experience" className="relative py-32 bg-background overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] transition-transform duration-500"
          style={{ transform: `translateY(${scrollProgress * 80}px)` }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[160px] transition-transform duration-500"
          style={{ transform: `translateY(${scrollProgress * -60}px)` }}
        />
      </div>

      {/* Top transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-up">
          <div 
            className="text-center mb-20"
            style={{ transform: `translateY(${scrollProgress * -25}px)` }}
          >
            <p className="text-primary font-medium mb-4 uppercase tracking-widest text-sm">Trayectoria</p>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Experiencia
              <span className="gradient-text"> Laboral</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mi camino profesional en el desarrollo web, construyendo soluciones 
              digitales que hacen la diferencia.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isActive={activeId === experience.id}
              onClick={() => setActiveId(activeId === experience.id ? 0 : experience.id)}
              index={index}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default ExperienceSection;
