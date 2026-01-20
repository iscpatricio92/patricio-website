import { Code2, Users, Lightbulb, Heart } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import AnimatedSection from './AnimatedSection';
import aboutBg from '@/assets/about-bg.jpg';

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
  return (
    <ParallaxSection
      id="about"
      backgroundImage={aboutBg}
      speed={0.2}
      className="flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 text-center">
              Sobre <span className="text-primary">mí</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right" delay={200}>
              <p className="text-secondary-foreground/90 text-lg leading-relaxed mb-6">
                Soy un desarrollador FullStack Senior y Tech Lead con más de{' '}
                <span className="text-primary font-semibold">9 años de experiencia</span>,
                actualmente enfocado en el sector financiero-fintech.
              </p>
              <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-6">
                Estudié en el Tecnológico Nacional de México y me apasiona construir
                productos que impacten positivamente a los usuarios.
              </p>
              <p className="text-secondary-foreground/80 text-lg leading-relaxed">
                Mi enfoque profesional combina cultura de ingeniería colaborativa,
                compartir conocimiento y excelencia técnica con habilidades blandas
                como comunicación efectiva y empatía.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <AnimatedSection key={item.title} animation="zoom" delay={300 + index * 100}>
                  <div className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary transition-all duration-300 backdrop-blur-sm h-full">
                    <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-card-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default AboutSection;
