import { Github, Linkedin, Twitter, ChevronDown, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const socialLinks = [
  { icon: Github, href: 'https://github.com/iscpatricio92', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/patricio-gomez/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/isc_patricio', label: 'Twitter' },
];

const stats = [
  { value: '9+', label: 'Años de experiencia' },
  { value: '50+', label: 'Proyectos completados' },
  { value: '100%', label: 'Compromiso' },
];

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection animation="fade" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Disponible para nuevos proyectos</span>
            </div>
          </AnimatedSection>

          {/* Main heading */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Patricio</span>
              <br />
              <span className="gradient-text glow-text">Gómez</span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
              Sr. FullStack Developer & Tech Lead
            </p>
            <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12">
              Construyendo experiencias digitales excepcionales con tecnologías modernas. 
              Especializado en el sector financiero-fintech.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 glow"
              >
                Trabajemos juntos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToAbout}
                className="flex items-center gap-2 px-8 py-4 bg-secondary/50 text-foreground rounded-full font-semibold border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              >
                Conocer más
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="flex justify-center gap-4 mb-16">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-full bg-secondary/30 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
