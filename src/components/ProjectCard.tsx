import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Ver ${title} en GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Ver demo de ${title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-secondary/20 text-secondary-foreground rounded-full font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
