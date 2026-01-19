import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Shield, Zap, Users, Clock, Award, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import clinicaSillon from '@/assets/clinica-sillon.png';
import clinicaGabinete from '@/assets/clinica-gabinete.png';

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
      title: 'All-on-4™',
      description: 'Arcada completa sobre 4 implantes estratégicamente ubicados. Dientes fijos en un solo día.',
      features: ['Dientes fijos en el día', 'Sin injertos de hueso', 'Ideal para edentulismo total'],
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

  const faqs = [
    {
      question: '¿Se puede masticar tras la cirugía de implantes?',
      answer: 'Recomendamos una dieta blanda durante el primer mes tras la intervención. Después de este periodo, podrás hacer vida completamente normal y comer de todo sin restricciones.',
    },
    {
      question: '¿Qué tipo de anestesia se utiliza?',
      answer: 'Se utiliza la misma anestesia local que para empastes o extracciones. La cirugía es prácticamente indolora. Si lo prefieres, también ofrecemos la opción de sedación consciente para una experiencia más relajada.',
    },
    {
      question: '¿La sedación consciente es obligatoria?',
      answer: 'No, la sedación es totalmente opcional y una decisión del paciente. Muchos de nuestros pacientes realizan el tratamiento únicamente con anestesia local sin ningún problema.',
    },
    {
      question: '¿Existe alguna contraindicación por edad?',
      answer: 'No existe una contraindicación específica por edad para la colocación de implantes dentales. Cada caso se evalúa individualmente por nuestro equipo de cirujanos tras realizar el estudio completo.',
    },
    {
      question: '¿Cuánto dura un implante dental?',
      answer: 'Con los cuidados adecuados y revisiones periódicas, los implantes dentales pueden durar toda la vida. En Bocaboca trabajamos exclusivamente con implantes Nobel Biocare, que ofrecen garantía de por vida.',
    },
    {
      question: '¿Qué pasa si no tengo suficiente hueso?',
      answer: 'La técnica All-on-4™ está especialmente diseñada para aprovechar al máximo el hueso disponible, evitando injertos en la mayoría de los casos. En situaciones especiales, contamos con técnicas de regeneración ósea.',
    },
    {
      question: '¿Cuánto tiempo estaré sin dientes?',
      answer: 'Con la técnica de carga inmediata y All-on-4™, sales de la clínica el mismo día con dientes provisionales fijos. Nunca estarás sin dientes durante el proceso.',
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
                calidad. Más de 20 años de experiencia y miles de pacientes satisfechos nos avalan.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Garantía de por vida', 'Primera consulta gratis', 'Más de 13.000 casos de éxito'].map((item) => (
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
                  <a href="tel:951178110">
                    <Phone className="w-5 h-5 mr-2" />
                    951 178 110
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={clinicaSillon}
                  alt="Gabinete dental moderno en Clínicas Bocaboca Málaga"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats Banner */}
      <section className="bg-secondary py-8">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-secondary-foreground">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">13.000+</p>
                <p className="text-sm opacity-90">Casos de Éxito</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">20+</p>
                <p className="text-sm opacity-90">Años de Experiencia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">98%</p>
                <p className="text-sm opacity-90">Tasa de Éxito</p>
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
                toda la vida con el cuidado adecuado. En Clínicas Bocaboca trabajamos exclusivamente 
                con implantes Nobel Biocare, líder mundial en implantología.
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
                src={clinicaGabinete}
                alt="Gabinete de tratamiento dental en Clínicas Bocaboca"
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
              En nuestras clínicas de Málaga ofrecemos todas las técnicas de implantología moderna 
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
              Resolvemos Tus Dudas sobre Implantes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-20">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            ¿Preparado para Recuperar tu Sonrisa?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Solicita tu primera consulta gratuita en nuestras clínicas de Málaga. 
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
              <a href="tel:951178110">
                <Phone className="w-5 h-5 mr-2" />
                951 178 110
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImplantesDentales;
