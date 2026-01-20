import { useParallax } from '@/hooks/useParallax';
import AnimatedSection from './AnimatedSection';

const skills = [
  { name: 'TypeScript', level: 95 },
  { name: 'JavaScript', level: 95 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'NestJS', level: 85 },
  { name: 'Express', level: 85 },
  { name: 'Redux Toolkit', level: 85 },
  { name: 'Flutter/Dart', level: 75 },
  { name: 'PostgreSQL', level: 80 },
];

const techLogos = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'Redux', 'Flutter'
];

const SkillsSection = () => {
  const offset = useParallax(0.1);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-background py-20 overflow-hidden"
    >
      {/* Floating tech elements */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {techLogos.map((tech, i) => (
          <span
            key={tech}
            className="absolute font-mono text-6xl font-bold text-foreground"
            style={{
              left: `${(i * 12) % 80 + 5}%`,
              top: `${(i * 15) % 70 + 10}%`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Skills & <span className="text-primary">Tecnologías</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.name} animation="fade-left" delay={index * 80}>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="font-mono text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech badges */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto">
            {['Sequelize', 'Passport.js', 'Webpack', 'Git', 'Docker', 'AWS', 'Agile', 'Scrum'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card rounded-full text-card-foreground border border-border hover:border-primary hover:text-primary transition-all duration-200 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
