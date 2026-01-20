import { useRef, useEffect, useState } from 'react';
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
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      setScrollProgress(progress);
      
      // Animate skill bars based on scroll progress
      if (progress > 0.3) {
        setAnimatedLevels(skills.map(skill => skill.level));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 bg-background overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[140px] transition-transform duration-500"
          style={{ transform: `translate(${scrollProgress * 100}px, ${scrollProgress * -50}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[160px] transition-transform duration-500"
          style={{ transform: `translate(${scrollProgress * -80}px, ${scrollProgress * 60}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] transition-transform duration-700"
          style={{ transform: `scale(${1 + scrollProgress * 0.2}) translate(-50%, -50%)` }}
        />
      </div>

      {/* Top transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with parallax */}
        <AnimatedSection animation="fade-up">
          <div 
            className="text-center mb-20"
            style={{ transform: `translateY(${scrollProgress * -20}px)` }}
          >
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

        {/* Skills grid with staggered parallax */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} animation="fade-left" delay={index * 50}>
                <div 
                  className="group stat-card p-6 hover:border-primary/30 transition-all duration-500"
                  style={{ 
                    transform: `translateX(${(1 - scrollProgress) * (index % 2 === 0 ? -30 : 30)}px)`,
                    opacity: 0.4 + scrollProgress * 0.6
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-foreground text-lg">{skill.name}</span>
                    <span className="text-3xl font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${animatedLevels[index]}%` }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Tech badges with floating effect */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div 
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            style={{ transform: `translateY(${(1 - scrollProgress) * 40}px)` }}
          >
            {techBadges.map((tech, index) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-secondary/50 rounded-full text-muted-foreground border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300 font-medium backdrop-blur-sm"
                style={{ 
                  transitionDelay: `${index * 30}ms`,
                  transform: `translateY(${Math.sin((scrollProgress + index * 0.5) * Math.PI) * 5}px)`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default SkillsSection;
