import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-bocaboca.svg';

type SubLink = { href: string; label: string };
type NavLink = { href: string; label: string; subLinks?: SubLink[] };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImplantesOpen, setIsImplantesOpen] = useState(false);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { href: '/', label: 'Inicio' },
    {
      href: '/implantes-dentales',
      label: 'Implantes Dentales',
      subLinks: [
        { href: '/implantes-all-on-4', label: 'Implantes All-on-4™' },
        { href: '/implantes-cigomaticos', label: 'Implantes Cigomáticos' },
        { href: '/mallas-subperiosticas', label: 'Mallas Subperiósticas' },
      ],
    },
    { href: '/protesis-dentales', label: 'Prótesis Dentales' },
    { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">3 Clínicas en Málaga</span>
              <span className="sm:hidden">Málaga</span>
            </div>
          </div>
          <a href="tel:+34951178110" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span className="font-medium">951 178 110</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Clínica Dental Bocaboca" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.href} className="relative group">
                  <Link
                    to={link.href}
                    className={`nav-link font-medium text-sm xl:text-base inline-flex items-center gap-1 ${
                      isActive(link.href) ? 'text-primary' : ''
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[260px]">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className={`block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                            isActive(sub.href) ? 'text-primary font-medium' : 'text-foreground'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link font-medium text-sm xl:text-base ${
                    isActive(link.href) ? 'text-primary' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="cta-primary rounded-full px-4 xl:px-6">
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
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-medium py-2 flex-1 ${
                        isActive(link.href) ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.subLinks && (
                      <button
                        onClick={() => setIsImplantesOpen(!isImplantesOpen)}
                        className="p-2 text-foreground"
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isImplantesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  {link.subLinks && isImplantesOpen && (
                    <div className="pl-4 flex flex-col gap-2 mt-1 mb-2 border-l-2 border-border">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`text-sm py-1 ${
                            isActive(sub.href) ? 'text-primary font-medium' : 'text-muted-foreground'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="cta-primary rounded-full mt-2">
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
