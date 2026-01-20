import { Mail, Github, Linkedin, Twitter, MapPin, ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/iscpatricio92',
    username: '@iscpatricio92',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/patricio-gomez/',
    username: 'in/patricio-gomez',
  },
  {
    icon: Twitter,
    label: 'Twitter/X',
    href: 'https://twitter.com/isc_patricio',
    username: '@isc_patricio',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4 uppercase tracking-widest text-sm">Contacto</p>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Trabajemos
              <span className="gradient-text"> juntos</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={200}>
          <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto mb-8">
            Actualmente estoy buscando nuevas oportunidades. Si tienes un proyecto interesante
            o simplemente quieres saludar, ¡no dudes en contactarme!
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={300}>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-16">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Remoto / México</span>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {contactLinks.map((link, index) => (
            <AnimatedSection key={link.label} animation="zoom" delay={400 + index * 100}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group stat-card p-8 flex flex-col items-center text-center h-full hover:border-primary/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 flex items-center gap-1">
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground font-mono">{link.username}</p>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={700}>
          <div className="text-center">
            <a
              href="mailto:contacto@ejemplo.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 glow text-lg"
            >
              <Mail className="w-6 h-6" />
              Envíame un mensaje
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
