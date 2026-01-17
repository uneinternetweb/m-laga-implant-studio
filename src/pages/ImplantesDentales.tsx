import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Shield, Zap, Users, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import implantModel from '@/assets/implant-model.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';

const ImplantesDentales = () => {
  const implantTypes = [
    {
      title: 'Implante Unitario',
      description: 'Sustitución de un único diente perdido con corona individual.',
      features: ['Aspecto natural', 'No daña dientes adyacentes', 'Durabilidad vitalicia'],
    },
    {
      title: 'Puente sobre Implantes',
      description: 'Rehabilitación de varios dientes consecutivos con menos implantes.',
      features: ['Menor número de cirugías', 'Coste optimizado', 'Funcionalidad completa'],
    },
    {
      title: 'All-on-4 / All-on-6',
      description: 'Arcada completa sobre 4 o 6 implantes estratégicamente ubicados.',
      features: ['Dientes fijos en el día', 'Solución definitiva', 'Ideal para edentulismo total'],
    },
    {
      title: 'Carga Inmediata',
      description: 'Colocación del implante y diente provisional en la misma sesión.',
      features: ['Sin periodo sin dientes', 'Menos visitas', 'Resultado estético inmediato'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Diagnóstico Digital',
      description: 'Realizamos un TAC 3D y escáner intraoral para planificar tu tratamiento con máxima precisión.',
    },
    {
      step: '02',
      title: 'Cirugía Guiada',
      description: 'Colocamos el implante de titanio mediante cirugía mínimamente invasiva y guiada por ordenador.',
    },
    {
      step: '03',
      title: 'Osteointegración',
      description: 'El hueso se fusiona con el implante durante 2-4 meses. En muchos casos, llevas dientes provisionales.',
    },
    {
      step: '04',
      title: 'Corona Definitiva',
      description: 'Colocamos la corona cerámica definitiva, indistinguible de un diente natural.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                Especialidad Principal
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Implantes Dentales en Málaga
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Recupera la funcionalidad y estética de tu sonrisa con implantes dentales de máxima 
                calidad. Somos especialistas en implantología avanzada con más de 15 años de 
                experiencia en Málaga.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Garantía de por vida', 'Primera consulta gratis', '+5.000 implantes colocados'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="cta-gold rounded-full px-8 h-14 text-lg">
                  <Link to="/contacto">
                    Solicitar Cita Gratuita
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 h-14 text-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a href="tel:951 178 110">
                    <Phone className="w-5 h-5 mr-2" />
                    952 000 000
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={implantModel}
                  alt="Implante dental de titanio con corona cerámica"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Implants */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                ¿Qué Son?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                ¿Qué Son los Implantes Dentales?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Los implantes dentales son raíces artificiales de titanio que se integran 
                perfectamente con el hueso maxilar, proporcionando una base sólida y permanente 
                para coronas, puentes o prótesis.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A diferencia de las prótesis removibles o los puentes tradicionales, los implantes 
                no dañan los dientes adyacentes y ofrecen una solución definitiva que puede durar 
                toda la vida con el cuidado adecuado.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: 'Biocompatibles', text: 'El titanio se integra naturalmente con el hueso' },
                  { icon: Zap, title: 'Funcionales', text: 'Come y habla con total normalidad' },
                  { icon: Users, title: 'Estéticos', text: 'Indistinguibles de dientes naturales' },
                  { icon: Clock, title: 'Duraderos', text: 'Solución para toda la vida' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden card-hover">
              <img
                src={clinicInterior}
                alt="Interior de nuestra clínica dental en Málaga"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Implants */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Tipos de Tratamiento
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Soluciones de Implantes para Cada Caso
            </h2>
            <p className="text-muted-foreground text-lg">
              En nuestra clínica de Málaga ofrecemos todas las técnicas de implantología moderna 
              para adaptarnos a las necesidades específicas de cada paciente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {implantTypes.map((type, index) => (
              <div 
                key={type.title}
                className="bg-card rounded-2xl p-8 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              El Proceso
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              ¿Cómo Es el Tratamiento de Implantes?
            </h2>
            <p className="text-muted-foreground text-lg">
              Te acompañamos en cada paso del proceso con tecnología de vanguardia 
              y un equipo de especialistas dedicado a tu bienestar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={item.step}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card rounded-2xl p-6 h-full card-hover">
                  <span className="text-6xl font-display font-bold text-accent-foreground/10">
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Preguntas Frecuentes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Dudas sobre Implantes Dentales en Málaga
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: '¿Duele ponerse un implante dental?',
                a: 'El procedimiento se realiza con anestesia local, por lo que no sentirás dolor durante la cirugía. Las molestias posteriores son leves y se controlan fácilmente con analgésicos habituales.',
              },
              {
                q: '¿Cuánto dura el tratamiento completo?',
                a: 'Depende del caso. Con carga inmediata puedes salir el mismo día con dientes provisionales. El tratamiento convencional requiere 3-6 meses para la osteointegración antes de colocar la corona definitiva.',
              },
              {
                q: '¿Cuánto cuesta un implante dental en Málaga?',
                a: 'El precio varía según el tipo de implante y la complejidad del caso. Ofrecemos primera consulta gratuita con presupuesto detallado y financiación sin intereses hasta 24 meses.',
              },
              {
                q: '¿Los implantes son para toda la vida?',
                a: 'Con una correcta higiene oral y revisiones periódicas, los implantes pueden durar toda la vida. El titanio es un material biocompatible que se integra permanentemente con el hueso.',
              },
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6"
              >
                <h3 className="font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-20">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            ¿Preparado para Recuperar tu Sonrisa?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Solicita tu primera consulta gratuita en nuestra clínica de Málaga. 
            Estudiaremos tu caso y te ofreceremos la mejor solución personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cta-gold rounded-full px-8 h-14 text-lg">
              <Link to="/contacto">
                Pedir Cita Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 h-14 text-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:951 178 110">
                <Phone className="w-5 h-5 mr-2" />
                952 000 000
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImplantesDentales;
