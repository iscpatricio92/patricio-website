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

const techBadges = ['Sequelize', 'Passport.js', 'Webpack', 'Git', 'Docker', 'AWS', 'Agile', 'Scrum'];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-20">
            <p className="text-primary font-medium mb-4 uppercase tracking-widest text-sm">Expertise</p>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Skills &
              <span className="gradient-text"> Tecnologías</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologías que domino para construir soluciones robustas y escalables
            </p>
          </div>
        </AnimatedSection>

        {/* Skills grid - Apple style stats */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} animation="fade-left" delay={index * 50}>
                <div className="group stat-card p-6 hover:border-primary/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-foreground text-lg">{skill.name}</span>
                    <span className="text-3xl font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Tech badges */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-secondary/50 rounded-full text-muted-foreground border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium"
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
