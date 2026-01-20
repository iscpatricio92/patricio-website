import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="font-mono text-xl font-bold text-primary"
          >
            {'<PG />'}
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
