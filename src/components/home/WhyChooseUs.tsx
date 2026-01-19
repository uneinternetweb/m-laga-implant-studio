import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Microscope, Award } from 'lucide-react';
import clinicaRecepcion from '@/assets/clinica-recepcion.png';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      number: '+20',
      label: 'Años de Experiencia',
      description: 'Clínica dental consolidada en Málaga',
    },
    {
      icon: Award,
      number: '13.000+',
      label: 'Casos de Éxito',
      description: 'Implantes realizados con éxito',
    },
    {
      icon: GraduationCap,
      number: '10+',
      label: 'Doctores',
      description: 'Especialistas en todas las áreas',
    },
    {
      icon: Microscope,
      number: '100%',
      label: 'Digital',
      description: 'Tecnología 3D y escáner intraoral',
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            La Clínica de Implantes de Referencia en Málaga
          </h2>
          <p className="text-muted-foreground text-lg">
            Combinamos experiencia, tecnología y un trato cercano para ofrecerte 
            el mejor tratamiento de implantes dentales de la Costa del Sol.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={reason.label}
              className="bg-card rounded-2xl p-6 text-center card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                {reason.number}
              </p>
              <p className="font-semibold text-foreground mb-1">{reason.label}</p>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Image + Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Una Clínica Moderna y Acogedora en el Centro de Málaga
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nuestras instalaciones están diseñadas pensando en tu comodidad. Disponemos de 
              tecnología de vanguardia como TAC 3D, cirugía guiada por ordenador y 
              escáner intraoral digital para diagnósticos precisos y tratamientos predecibles.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Equipamiento de última generación',
                'Ambiente relajante y profesional',
                'Aparcamiento gratuito para pacientes',
                'Accesibilidad para movilidad reducida',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/sobre-nosotros"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Conocer la clínica
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden card-hover">
              <img
                src={clinicaRecepcion}
                alt="Recepción moderna de nuestra clínica dental en Málaga"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
