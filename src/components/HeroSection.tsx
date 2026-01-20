import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import heroBg from '@/assets/hero-bg.jpg';

const socialLinks = [
  { icon: Github, href: 'https://github.com/iscpatricio92', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/patricio-gomez/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/isc_patricio', label: 'Twitter' },
];

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ParallaxSection
      id="hero"
      backgroundImage={heroBg}
      speed={0.5}
      className="flex items-center justify-center"
    >
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <p className="font-mono text-primary mb-4 text-lg">Hola, soy</p>
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-foreground mb-4">
            Patricio Gómez
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted font-medium mb-6">
            Sr. FullStack Developer & Tech Lead
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            +9 años de experiencia construyendo aplicaciones web escalables.
            Especializado en el sector financiero-fintech con pasión por la excelencia técnica.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group flex items-center gap-2 mx-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Conocer más
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </ParallaxSection>
  );
};

export default HeroSection;
