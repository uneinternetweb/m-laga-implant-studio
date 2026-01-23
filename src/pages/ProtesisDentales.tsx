import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Shield, Zap, Heart, Sparkles } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import clinicaGabinete from '@/assets/clinica-gabinete.png';

const ProtesisDentales = () => {
  const prosthesisTypes = [
    {
      title: 'Prótesis Removible',
      description: 'Aquellas que el paciente puede retirar de la boca y volver a colocar por sí mismo.',
      features: [
        'Prótesis removibles metálicas (esqueléticas)',
        'Prótesis parciales dentomucosoportadas',
        'Estructura metálica colada con dientes de resina acrílica',
      ],
    },
    {
      title: 'Prótesis Fija',
      description: 'Son prótesis completamente dentosoportadas que solo puede colocar y retirar el odontólogo.',
      features: [
        'Coronas y puentes cementados',
        'Toman apoyo únicamente en los dientes',
        'Pueden ser de porcelana, alúmina o zirconio',
      ],
    },
    {
      title: 'Prótesis Mixta',
      description: 'Constan de una parte fija y otra removible, unidas mediante un sistema de atache.',
      features: [
        'Mayor estética al eliminar ganchos visibles',
        'Excelente retención y estabilidad',
        'Combina ventajas de ambos sistemas',
      ],
    },
    {
      title: 'Prótesis sobre Implantes',
      description: 'Soportadas por implantes dentales fijos, pueden ser fijas o removibles.',
      features: [
        'Máxima estabilidad y confort',
        'Preserva el hueso maxilar',
        'Función masticatoria óptima',
      ],
    },
  ];

  const objectives = [
    {
      icon: Zap,
      title: 'Funcionalidad',
      description: 'Recuperar la masticación eficaz y la fonética adecuada para la comunicación y alimentación.',
    },
    {
      icon: Heart,
      title: 'Salud',
      description: 'Evitar deterioro de estructuras dentarias y reponer la dimensión vertical de la boca.',
    },
    {
      icon: Sparkles,
      title: 'Estética',
      description: 'Conseguir una dentadura de aspecto natural, adaptada a la edad y morfología del paciente.',
    },
    {
      icon: Shield,
      title: 'Retención',
      description: 'Sistema de retención eficiente para que la prótesis se mantenga sujeta correctamente.',
    },
  ];

  const materials = [
    {
      name: 'Resina',
      description: 'Material fácil de manipular y económico. Se usa para prótesis completas, bases y provisionales.',
    },
    {
      name: 'Metal',
      description: 'Aleaciones metálicas trabajadas mediante colado. Incluye opciones como titanio y aleaciones preciosas.',
    },
    {
      name: 'Cerámica',
      description: 'Proporciona cualidades muy similares a los dientes naturales. Incluye porcelana y zirconio.',
    },
  ];

  const faqs = [
    {
      question: '¿Cuánto duran las prótesis dentales?',
      answer: 'La duración depende del tipo de prótesis y del cuidado. Las prótesis fijas pueden durar décadas con buen mantenimiento, mientras que las removibles pueden requerir ajustes periódicos.',
    },
    {
      question: '¿Las prótesis dentales son cómodas?',
      answer: 'Sí, las prótesis modernas están diseñadas para ofrecer máximo confort. Puede haber un período de adaptación inicial, pero con el tiempo se sienten completamente naturales.',
    },
    {
      question: '¿Puedo comer con normalidad con una prótesis?',
      answer: 'Absolutamente. Las prótesis bien ajustadas permiten masticar todo tipo de alimentos. Las prótesis sobre implantes ofrecen la máxima funcionalidad.',
    },
    {
      question: '¿Se nota que llevo prótesis dental?',
      answer: 'Las prótesis modernas son muy estéticas y están diseñadas para pasar desapercibidas. El color, forma y tamaño se adaptan a cada paciente.',
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
                Tratamiento Especializado
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Prótesis Dentales en Málaga
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Recupera la funcionalidad y estética de tu sonrisa con prótesis dentales de alta calidad. 
                Soluciones personalizadas para cada tipo de caso.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Prótesis removibles', 'Prótesis fijas', 'Sobre implantes'].map((item) => (
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
                  src={clinicaGabinete}
                  alt="Gabinete dental para prótesis en Clínicas Bocaboca Málaga"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Dental Prosthesis */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Definición
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            ¿Qué es una Prótesis Dental?
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              Las prótesis dentales son elementos artificiales destinados a restaurar la anatomía de una 
              o varias piezas dentarias, restaurando también la relación entre los maxilares, a la vez 
              que devuelve la dimensión vertical y repone los dientes.
            </p>
            <p>
              El encargado de fabricar estos aparatos o elementos artificiales es el protésico dental, 
              quien realiza su trabajo en un laboratorio dental recibiendo las indicaciones del odontólogo 
              que trabaja en clínica.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Objetivos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Objetivos de las Prótesis Dentales
            </h2>
            <p className="text-muted-foreground text-lg">
              Una prótesis dental bien diseñada cumple múltiples funciones esenciales para la salud bucal 
              y la calidad de vida del paciente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 card-hover text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functionality Details */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Factores Clave para una Prótesis Funcional
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Retención</h3>
              <p className="text-muted-foreground">
                Toda prótesis debe tener un sistema de retención eficiente para que se mantenga sujeta 
                y no interfiera con la masticación, deglución y fonética. Las prótesis fijas no presentan 
                problemas de retención, mientras que las removibles dependen de ganchos metálicos o ataches.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Soporte</h3>
              <p className="text-muted-foreground mb-4">
                Las estructuras de la boca que soportarán las prótesis deben ser cuidadosamente escogidas. 
                Según el tipo de soporte, las prótesis pueden ser:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Dentosoportadas:</strong> Soportadas por los dientes pilares naturales</li>
                <li><strong>Mucosoportadas:</strong> Se apoyan sobre el proceso alveolar (dentaduras completas)</li>
                <li><strong>Dentomucosoportadas:</strong> Combinan ambos tipos de soporte</li>
                <li><strong>Implantosoportadas:</strong> Soportadas por implantes quirúrgicos</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Estabilidad</h3>
              <p className="text-muted-foreground">
                Una prótesis inestable no es funcional ya que dificulta la masticación y la fonética. 
                La estabilidad debe estar equilibrada con la retención y el soporte para conseguir 
                una prótesis óptima.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Fijación</h3>
              <p className="text-muted-foreground">
                La fijación depende del terreno de soporte, no del aparato protésico. En prótesis total 
                depende de la estabilidad de la mucosa adherida al hueso; en implantosoportadas está 
                ligada a la osteointegración del implante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Prosthesis */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Tipos de Prótesis
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Soluciones Protésicas Personalizadas
            </h2>
            <p className="text-muted-foreground text-lg">
              Existen diversos tipos de prótesis dentales según las necesidades del paciente. 
              Nuestro equipo le asesorará sobre la mejor opción para su caso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {prosthesisTypes.map((type, index) => (
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
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Materiales
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Materiales de Fabricación
            </h2>
            <p className="text-muted-foreground text-lg">
              Utilizamos los materiales más avanzados para garantizar durabilidad, estética y biocompatibilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material) => (
              <div key={material.name} className="bg-card rounded-2xl p-8 card-hover text-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{material.name}</h3>
                <p className="text-muted-foreground">{material.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">
              Zirconio: El Material del Futuro
            </h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              El zirconio, fabricado con diseño y fresado asistido por ordenador, es un material que 
              no produce reacciones alérgicas, es tan duro como las aleaciones metálicas no nobles 
              y mucho más estético y preciso. Cada vez es más utilizado en odontología moderna.
            </p>
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
              Resolvemos Tus Dudas sobre Prótesis
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

      {/* Related Treatments */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Tratamientos Relacionados
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/implantes-dentales" 
              className="bg-card px-6 py-3 rounded-full text-foreground hover:bg-accent transition-colors"
            >
              Implantes Dentales Málaga
            </Link>
            <Link 
              to="/sobre-nosotros" 
              className="bg-card px-6 py-3 rounded-full text-foreground hover:bg-accent transition-colors"
            >
              Nuestro Equipo
            </Link>
            <Link 
              to="/contacto" 
              className="bg-card px-6 py-3 rounded-full text-foreground hover:bg-accent transition-colors"
            >
              Pedir Cita
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-20">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            ¿Necesitas una Prótesis Dental?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Solicita tu primera consulta gratuita. Estudiaremos tu caso y te recomendaremos 
            la mejor solución protésica para ti.
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

export default ProtesisDentales;
