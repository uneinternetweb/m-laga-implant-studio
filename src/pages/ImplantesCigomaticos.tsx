import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, MessageCircle, Shield, Zap, Clock, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead';
import heroImg from '@/assets/implantes-cigomaticos-malaga.jpg';

const faqs = [
  {
    question: '¿Qué diferencia hay entre un implante cigomático y un implante convencional?',
    answer:
      'Un implante convencional se ancla en el hueso alveolar del maxilar (de unos 8–14 mm de longitud). El implante cigomático mide entre 30 y 55 mm y se ancla en el hueso cigomático (pómulo), una estructura densa que no sufre reabsorción y proporciona una excelente estabilidad primaria.',
  },
  {
    question: '¿Es una cirugía dolorosa o muy invasiva?',
    answer:
      'Es una cirugía más larga y compleja que la implantología convencional, por lo que se realiza habitualmente bajo sedación profunda o anestesia general en un entorno quirúrgico controlado. El postoperatorio, sin embargo, suele ser comparable al de un All-on-4™ y muchos pacientes se reincorporan a su rutina en pocos días.',
  },
  {
    question: '¿Quién puede colocar implantes cigomáticos?',
    answer:
      'Solo cirujanos orales y maxilofaciales con formación específica en la técnica. No es un procedimiento que pueda asumir cualquier clínica: requiere planificación 3D avanzada, experiencia quirúrgica y un equipo coordinado.',
  },
  {
    question: '¿Llevaré dientes fijos el mismo día?',
    answer:
      'En la mayoría de casos sí. La estabilidad primaria del implante cigomático suele permitir cargar una prótesis provisional fija en las primeras 24–48 horas, evitando que el paciente esté sin dientes durante el periodo de osteointegración.',
  },
  {
    question: '¿Qué riesgos tiene la técnica?',
    answer:
      'Como cualquier cirugía, presenta riesgos: comunicación con el seno maxilar, infecciones o, raramente, alteraciones sinusales. Una planificación con CBCT y la experiencia del equipo quirúrgico reducen significativamente estas complicaciones. La tasa de supervivencia publicada supera el 95% a 5 años.',
  },
  {
    question: '¿Cuándo se considera mejor opción que un injerto óseo?',
    answer:
      'Cuando la atrofia maxilar es severa, los injertos requieren múltiples cirugías, mucho tiempo de espera (6–12 meses) y no siempre garantizan volumen suficiente. Los implantes cigomáticos resuelven el caso en una sola intervención y permiten dientes fijos casi de inmediato.',
  },
];

const ImplantesCigomaticos = () => {
  return (
    <Layout>
      <SEOHead
        title="Implantes cigomáticos en Málaga | Sin injerto óseo | Bocaboca"
        description="Implantes cigomáticos en Málaga para pacientes con atrofia maxilar severa. Solución avanzada sin injertos óseos. Pide tu valoración gratuita."
        canonical="/implantes-cigomaticos"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalProcedure',
            name: 'Implantes cigomáticos',
            procedureType: 'https://schema.org/SurgicalProcedure',
            bodyLocation: 'Hueso cigomático (pómulo)',
            description:
              'Implantes dentales de longitud extendida anclados en el hueso cigomático para rehabilitar maxilares con atrofia ósea severa, evitando la necesidad de injertos.',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.implantesdentalesenmalaga.com/' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Implantes Dentales',
                item: 'https://www.implantesdentalesenmalaga.com/implantes-dentales',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Implantes Cigomáticos',
                item: 'https://www.implantesdentalesenmalaga.com/implantes-cigomaticos',
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        ]}
      />

      {/* HERO */}
      <section className="hero-section py-20 md:py-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                Implantología Avanzada
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Implantes cigomáticos: solución para maxilares con poco hueso
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Una alternativa quirúrgica avanzada para pacientes con atrofia ósea severa del maxilar
                superior, donde los implantes convencionales no son viables. Te atendemos en nuestras
                clínicas de Málaga con un equipo especializado en cirugía maxilofacial.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Sin injertos óseos', 'Dientes fijos en 24–48 h', 'Solución en una sola cirugía'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="cta-gold rounded-full px-8 h-14 text-lg">
                  <Link to="/contacto">
                    Solicitar valoración gratuita
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
                  src={heroImg}
                  alt="Modelo anatómico que muestra la colocación de un implante en el hueso cigomático del maxilar superior"
                  className="w-full h-auto"
                  width={1600}
                  height={1024}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary py-8">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-secondary-foreground">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">+95%</p>
                <p className="text-sm opacity-90">Supervivencia a 5 años</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">1</p>
                <p className="text-sm opacity-90">Sola cirugía</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">24–48h</p>
                <p className="text-sm opacity-90">Prótesis fija provisional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">¿Qué son?</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Qué son los implantes cigomáticos
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              Los implantes cigomáticos son <Link to="/implantes-dentales" className="text-primary font-medium hover:underline">implantes dentales</Link> de
              longitud extendida (entre 30 y 55 mm) que, en lugar de anclarse en el hueso alveolar del
              maxilar, se fijan en el hueso cigomático o malar, conocido popularmente como pómulo. Esta
              estructura ósea es densa, estable y no se reabsorbe, lo que proporciona una excelente
              fijación incluso cuando el maxilar superior ha perdido gran parte de su volumen óseo.
            </p>
            <p>
              La técnica fue desarrollada en los años 90 por el Prof. Per-Ingvar Brånemark para pacientes
              oncológicos con grandes defectos del maxilar y, con el tiempo, se ha extendido a pacientes
              con atrofia maxilar severa que de otro modo necesitarían años de tratamiento con injertos
              óseos. Habitualmente se combina con implantes convencionales en la zona anterior para
              soportar una prótesis fija de arcada completa.
            </p>
          </div>
        </div>
      </section>

      {/* CUÁNDO INDICADO */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Indicaciones</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Cuándo están indicados
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            {[
              'Atrofia ósea severa del maxilar superior que impide colocar implantes convencionales.',
              'Pacientes que han llevado durante años una prótesis removible y han sufrido reabsorción del hueso.',
              'Casos en los que el seno maxilar es muy amplio y dificulta la colocación de implantes posteriores.',
              'Pacientes oncológicos rehabilitados tras cirugía maxilar.',
              'Personas que prefieren evitar tratamientos prolongados con injertos óseos y elevación de seno.',
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-6">
            Si tu caso no requiere una solución tan compleja, otras alternativas pueden ser el{' '}
            <Link to="/implantes-all-on-4" className="text-primary font-medium hover:underline">All-on-4™</Link> o las{' '}
            <Link to="/mallas-subperiosticas" className="text-primary font-medium hover:underline">
              mallas subperiósticas
            </Link>
            . Lo ideal es valorar siempre con un estudio 3D individualizado, como explicamos en el artículo{' '}
            <Link to="/noticias/injerto-oseo-dental-cuando-necesario-malaga" className="text-primary font-medium hover:underline">
              cuándo es necesario un injerto óseo dental
            </Link>
            .
          </p>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Ventajas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Ventajas frente a los injertos óseos tradicionales
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: 'Una sola intervención', text: 'Resuelven el caso sin necesidad de múltiples cirugías de injerto y largos meses de espera.' },
              { icon: Clock, title: 'Tiempos muy reducidos', text: 'Frente a los 6–12 meses de un injerto, el paciente puede llevar dientes fijos en 24–48 horas.' },
              { icon: Shield, title: 'Anclaje en hueso denso', text: 'El hueso cigomático es muy denso y estable, ofreciendo una fijación excelente y duradera.' },
              { icon: Award, title: 'Alta predictibilidad', text: 'Supervivencia documentada superior al 95% a 5 años en estudios clínicos.' },
            ].map((b) => (
              <div key={b.title} className="bg-card rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDIMIENTO */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Procedimiento</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
            Cómo es la cirugía paso a paso
          </h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Estudio 3D y planificación', text: 'CBCT, escáner intraoral y planificación virtual de la trayectoria de cada implante cigomático respetando estructuras anatómicas (seno maxilar, suelo de órbita).' },
              { step: '02', title: 'Cirugía bajo sedación', text: 'Habitualmente bajo sedación profunda o anestesia general. Se colocan 2 o 4 implantes cigomáticos, en ocasiones combinados con implantes convencionales en la zona anterior. Duración: 2–3 horas.' },
              { step: '03', title: 'Prótesis provisional fija', text: 'En 24–48 horas se atornilla una prótesis provisional fija que devuelve estética y función desde el primer día.' },
              { step: '04', title: 'Osteointegración y revisiones', text: 'Periodo de 4–6 meses con controles periódicos para verificar la integración y el estado de los tejidos.' },
              { step: '05', title: 'Prótesis definitiva', text: 'Sustitución por una prótesis definitiva de zirconio o metal-cerámica con un acabado estético natural.' },
            ].map((p) => (
              <div key={p.step} className="bg-card rounded-2xl p-6 flex gap-6 items-start">
                <span className="font-display text-3xl font-bold text-secondary flex-shrink-0">{p.step}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECUPERACIÓN */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Recuperación</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Postoperatorio y cuidados
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              Aunque la cirugía es más compleja que la implantología convencional, el postoperatorio
              suele ser sorprendentemente llevadero. Es habitual cierta inflamación en la zona del pómulo
              y mejilla durante 5–7 días, controlable con la pauta antiinflamatoria prescrita.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reposo relativo durante 48 horas y aplicación de frío local.</li>
              <li>Dieta blanda durante las 4 primeras semanas.</li>
              <li>Antibioterapia preventiva pautada por el cirujano.</li>
              <li>Higiene minuciosa con clorhexidina y, posteriormente, irrigador dental.</li>
              <li>Revisiones a los 7 días, 1 mes, 3 meses y 6 meses.</li>
            </ul>
            <p>
              A largo plazo, los cuidados son los mismos que para cualquier prótesis sobre implantes:
              higiene diaria adecuada y revisiones cada 6 meses para mantener la salud de los tejidos
              periimplantarios.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Preguntas frecuentes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Lo que más preguntan los pacientes
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-20">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Te estudiamos tu caso sin compromiso
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Si te han dicho que no tienes hueso suficiente para implantes, los implantes cigomáticos
            pueden ser la solución. Solicita una valoración gratuita en nuestras clínicas de Málaga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cta-gold rounded-full px-8 h-14 text-lg">
              <Link to="/contacto">
                Pedir cita gratuita
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
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-lg bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            >
              <a
                href="https://wa.me/34679490216?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20implantes%20cigom%C3%A1ticos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImplantesCigomaticos;
