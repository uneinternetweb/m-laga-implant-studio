import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Heart, Award } from 'lucide-react';
import implantImage from '@/assets/implant-model.jpg';

const Services = () => {
  const features = [
    {
      icon: Shield,
      title: 'Garantía de Por Vida',
      description: 'Utilizamos implantes de las mejores marcas mundiales con garantía vitalicia.',
    },
    {
      icon: Zap,
      title: 'Implantes en el Día',
      description: 'Técnicas de carga inmediata para que salgas de la clínica con dientes fijos.',
    },
    {
      icon: Heart,
      title: 'Sin Dolor',
      description: 'Sedación consciente y anestesia local para un tratamiento 100% indoloro.',
    },
    {
      icon: Award,
      title: '+5.000 Implantes',
      description: 'Experiencia avalada por miles de casos de éxito en Málaga.',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="aspect-square rounded-3xl overflow-hidden card-hover bg-muted">
              <img
                src={implantImage}
                alt="Modelo de implante dental mostrando la estructura del tornillo de titanio y corona cerámica"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-secondary">98%</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Tasa de Éxito</p>
                  <p className="text-sm text-muted-foreground">en implantes dentales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up delay-200">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Nuestros Servicios
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Especialistas en Implantes Dentales en Málaga
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Los implantes dentales son la solución más avanzada y duradera para reemplazar 
              dientes perdidos. En nuestra clínica de Málaga ofrecemos tratamientos personalizados 
              con la tecnología más innovadora del sector.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/implantes-dentales"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Conocer más sobre implantes dentales
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Tratamientos especializados (enlazado interno SEO) */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Tratamientos Especializados
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3">
              Soluciones avanzadas para casos complejos
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: '/implantes-all-on-4',
                title: 'Implantes All-on-4™',
                description: 'Rehabilitación completa con solo 4 implantes y dientes fijos en el día.',
                anchor: 'Ver tratamiento All-on-4 en Málaga',
              },
              {
                href: '/implantes-cigomaticos',
                title: 'Implantes Cigomáticos',
                description: 'Solución para pacientes con atrofia ósea severa sin necesidad de injertos.',
                anchor: 'Ver implantes cigomáticos en Málaga',
              },
              {
                href: '/mallas-subperiosticas',
                title: 'Mallas Subperiósticas',
                description: 'Estructuras personalizadas en titanio para reabsorciones óseas extremas.',
                anchor: 'Ver mallas subperiósticas en Málaga',
              },
            ].map((t) => (
              <Link
                key={t.href}
                to={t.href}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{t.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  {t.anchor}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
