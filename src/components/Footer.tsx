import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-primary text-lg font-bold">{'<PG />'}</p>

          <p className="flex items-center gap-2 text-muted-foreground text-sm">
            Hecho con <Heart className="w-4 h-4 text-destructive fill-destructive" /> por Patricio Gómez
          </p>

          <p className="text-muted-foreground text-sm">
            © {currentYear} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
