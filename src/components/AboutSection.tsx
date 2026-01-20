import { Code2, Users, Lightbulb, Heart } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';

const highlights = [
  {
    icon: Code2,
    title: 'Excelencia Técnica',
    description: 'Código limpio, escalable y mantenible',
  },
  {
    icon: Users,
    title: 'Liderazgo',
    description: 'Guiando equipos hacia el éxito',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Soluciones creativas a problemas complejos',
  },
  {
    icon: Heart,
    title: 'Empatía',
    description: 'Comunicación efectiva y trabajo en equipo',
  },
];

const AboutSection = () => {
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
    <section ref={sectionRef} id="about" className="relative py-32 bg-background overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] transition-transform duration-300"
          style={{ transform: `translateY(${scrollProgress * -100}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] transition-transform duration-300"
          style={{ transform: `translateY(${scrollProgress * 80}px)` }}
        />
      </div>

      {/* Top fade transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header with parallax */}
          <AnimatedSection animation="fade-up">
            <div 
              className="text-center mb-20"
              style={{ transform: `translateY(${scrollProgress * -30}px)` }}
            >
              <p className="text-primary font-medium mb-4 uppercase tracking-widest text-sm">Sobre mí</p>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
                Desarrollador con
                <br />
                <span className="gradient-text">pasión por innovar</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content with parallax */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div 
                className="space-y-6"
                style={{ transform: `translateX(${(1 - scrollProgress) * -50}px)`, opacity: 0.5 + scrollProgress * 0.5 }}
              >
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Soy un desarrollador <span className="text-foreground font-medium">FullStack Senior</span> y 
                  <span className="text-foreground font-medium"> Tech Lead</span> con más de 
                  <span className="text-primary font-semibold"> 9 años de experiencia</span>, 
                  actualmente enfocado en el sector financiero-fintech.
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed">
                  Estudié en el Tecnológico Nacional de México y me apasiona construir
                  productos que impacten positivamente a los usuarios.
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed">
                  Mi enfoque profesional combina cultura de ingeniería colaborativa,
                  compartir conocimiento y excelencia técnica con habilidades blandas
                  como comunicación efectiva y empatía.
                </p>
              </div>
            </AnimatedSection>

            {/* Highlights grid with staggered parallax */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <AnimatedSection key={item.title} animation="zoom" delay={300 + index * 100}>
                  <div 
                    className="group stat-card h-full hover:border-primary/30 transition-all duration-500"
                    style={{ 
                      transform: `translateY(${(1 - scrollProgress) * (30 + index * 15)}px)`,
                      opacity: 0.3 + scrollProgress * 0.7
                    }}
                  >
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default AboutSection;
