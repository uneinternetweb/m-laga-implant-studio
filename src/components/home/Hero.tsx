import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dental.jpg';

const Hero = () => {
  const benefits = [
    'Primera consulta gratuita',
    'Financiación sin intereses',
    'Tecnología de última generación',
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide py-20">
        <div className="max-w-3xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-secondary-foreground rounded-full animate-pulse-soft" />
            Especialistas en Implantes Dentales
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Implantes Dentales en Málaga{' '}
            <span className="text-gradient">con Garantía de Por Vida</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Recupera tu sonrisa y calidad de vida con nuestros implantes dentales de máxima calidad. 
            Más de 15 años de experiencia y miles de pacientes satisfechos en Málaga y alrededores.
          </p>

          {/* Benefits */}
          <ul className="flex flex-wrap gap-4 mb-10">
            {benefits.map((benefit) => (
              <li 
                key={benefit} 
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="cta-gold rounded-full px-8 text-lg h-14">
              <Link to="/contacto" className="flex items-center gap-2">
                Solicitar Cita Gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 text-lg h-14 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <a href="tel:951 178 110" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Llamar: +34951 178 110
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
