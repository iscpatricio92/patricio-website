import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
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
    <section
      id="contact"
      className="relative min-h-screen bg-secondary py-20 flex items-center"
    >
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 text-center">
            Trabajemos <span className="text-primary">juntos</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={200}>
          <p className="text-center text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-12">
            Actualmente estoy buscando nuevas oportunidades. Si tienes un proyecto interesante
            o simplemente quieres saludar, ¡no dudes en contactarme!
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={300}>
          <div className="flex items-center justify-center gap-2 text-muted mb-12">
            <MapPin className="w-5 h-5" />
            <span>Remoto / México</span>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactLinks.map((link, index) => (
            <AnimatedSection key={link.label} animation="zoom" delay={400 + index * 100}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 rounded-xl bg-card/50 border border-border hover:border-primary transition-all duration-300 backdrop-blur-sm h-full"
              >
                <link.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-card-foreground mb-1">{link.label}</h3>
                <p className="text-sm text-muted-foreground font-mono">{link.username}</p>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={700}>
          <div className="text-center mt-16">
            <a
              href="mailto:contacto@ejemplo.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              <Mail className="w-5 h-5" />
              Envíame un mensaje
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
