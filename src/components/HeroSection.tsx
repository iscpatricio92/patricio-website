import { Github, Linkedin, Twitter, ChevronDown, ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
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
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x = (e.clientX - rect.left - centerX) / centerX;
      const y = (e.clientY - rect.top - centerY) / centerY;
      setMousePosition({ x, y });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePosition({ x: 0, y: 0 });
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3D transform values
  const rotateX = isHovering ? mousePosition.y * -10 : 0;
  const rotateY = isHovering ? mousePosition.x * 10 : 0;
  const translateZ = isHovering ? 50 : 0;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      style={{ perspective: '1500px' }}
    >
      {/* Animated gradient background with parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        {/* Floating orbs with mouse parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] transition-transform duration-700 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] transition-transform duration-700 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) translate(-50%, -50%)`,
          }}
        />
      </div>

      {/* Grid pattern overlay with subtle parallax */}
      <div 
        className="absolute inset-0 opacity-[0.03] transition-transform duration-500"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translate(${mousePosition.x * (20 + i * 2)}px, ${mousePosition.y * (20 + i * 2)}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          />
        ))}
      </div>

      {/* Main content with 3D effect */}
      <div 
        className="container mx-auto px-6 py-20 relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection animation="fade" delay={0}>
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
              style={{ transform: 'translateZ(30px)' }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Disponible para nuevos proyectos</span>
            </div>
          </AnimatedSection>

          {/* Main heading with depth */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
              style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }}
            >
              <span 
                className="block text-foreground drop-shadow-2xl"
                style={{ transform: 'translateZ(20px)' }}
              >
                Patricio
              </span>
              <span 
                className="block gradient-text glow-text"
                style={{ transform: 'translateZ(40px)' }}
              >
                Gómez
              </span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div style={{ transform: 'translateZ(25px)' }}>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
                Sr. FullStack Developer & Tech Lead
              </p>
              <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12">
                Construyendo experiencias digitales excepcionales con tecnologías modernas. 
                Especializado en el sector financiero-fintech.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              style={{ transform: 'translateZ(35px)' }}
            >
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 glow hover:scale-105"
              >
                Trabajemos juntos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToAbout}
                className="flex items-center gap-2 px-8 py-4 bg-secondary/50 text-foreground rounded-full font-semibold border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Conocer más
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div 
              className="flex justify-center gap-4 mb-16"
              style={{ transform: 'translateZ(20px)' }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-full bg-secondary/30 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm hover:scale-110"
                  aria-label={social.label}
                  style={{ 
                    transform: `translateZ(${15 + index * 5}px)`,
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="fade-up" delay={500}>
            <div 
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              style={{ transform: 'translateZ(15px)' }}
            >
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center group"
                  style={{ transform: `translateZ(${10 + index * 5}px)` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:scale-125 transition-transform" />
        </button>
      </div>

      {/* Bottom gradient fade for parallax transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
