import ParallaxSection from './ParallaxSection';
import ProjectCard from './ProjectCard';
import parallaxBg from '@/assets/parallax-layer-1.jpg';

const projects = [
  {
    title: 'Fisio Movimiento',
    description:
      'Sitio web profesional para Lic. Analaura Reyes Priego. Plataforma moderna y responsive para presentar servicios, credenciales, precios y facilitar el contacto con pacientes.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive'],
    githubUrl: 'https://github.com/iscpatricio92/fisio-movimiento',
  },
  {
    title: 'CareCore',
    description:
      'Sistema de expediente médico centrado en el paciente. El paciente es dueño de su información y controla con quién la comparte. Solo profesionales médicos certificados pueden crear o editar registros clínicos.',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Security'],
    githubUrl: 'https://github.com/iscpatricio92/carecore',
  },
  {
    title: 'Booking System',
    description:
      'Sistema de reservaciones para salón de belleza construido con Next.js. Gestión completa de citas, servicios y clientes con base de datos PostgreSQL.',
    technologies: ['Next.js', 'PLpgSQL', 'PostgreSQL', 'Full-Stack'],
    githubUrl: 'https://github.com/iscpatricio92/booking',
  },
];

const ProjectsSection = () => {
  return (
    <ParallaxSection
      id="projects"
      backgroundImage={parallaxBg}
      speed={0.15}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 text-center">
          Proyectos <span className="text-primary">Destacados</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/iscpatricio92?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-card-foreground hover:border-primary hover:text-primary transition-all duration-300 font-medium"
          >
            Ver más proyectos en GitHub
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default ProjectsSection;
