import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/implantes-dentales', label: 'Implantes Dentales' },
    { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Málaga, España</span>
          </div>
          <a href="tel:+34952000000" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span className="font-medium">952 000 000</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display text-xl font-bold">ID</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-xl font-semibold text-foreground">Implantes Dentales</p>
              <p className="text-sm text-muted-foreground">Málaga</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link font-medium ${
                  isActive(link.href) ? 'text-primary' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="cta-gold rounded-full px-6">
              <Link to="/contacto">Pedir Cita</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 ${
                    isActive(link.href) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="cta-gold rounded-full mt-2">
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                  Pedir Cita
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
