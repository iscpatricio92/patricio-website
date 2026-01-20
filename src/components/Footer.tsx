import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/iscpatricio92', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/patricio-gomez/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/isc_patricio', label: 'Twitter' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#hero" className="font-mono text-xl font-bold text-primary">
            {'<PG />'}
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> por Patricio Gómez © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
