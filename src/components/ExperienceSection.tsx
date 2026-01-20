import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const ExperienceCard = ({ experience, isActive, onClick }: { 
  experience: Experience; 
  isActive: boolean; 
  onClick: () => void;
}) => {
  return (
    <div 
      className={cn(
        "relative pl-8 pb-8 cursor-pointer group",
        "before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:border-2 before:border-primary before:bg-background before:z-10 before:transition-all before:duration-300",
        isActive && "before:bg-primary before:scale-125",
        "after:absolute after:left-[7px] after:top-6 after:w-0.5 after:h-[calc(100%-1rem)] after:bg-border",
        "last:after:hidden"
      )}
      onClick={onClick}
    >
      <div 
        className={cn(
          "bg-card border border-border rounded-lg p-6 transition-all duration-300",
          "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
          isActive && "border-primary shadow-lg shadow-primary/10"
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
          <button className="text-muted-foreground hover:text-primary transition-colors">
            {isActive ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {experience.period}
          </div>
          <div className="flex items-center gap-1">
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
            <h4 className="text-sm font-semibold text-foreground mb-2">Logros principales:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
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
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiencia Laboral
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo web, construyendo soluciones 
            digitales que hacen la diferencia.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isActive={activeId === experience.id}
              onClick={() => setActiveId(activeId === experience.id ? 0 : experience.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
