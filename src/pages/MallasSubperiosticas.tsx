import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, MessageCircle, Shield, Zap, Clock, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead';
import heroImg from '@/assets/mallas-subperiosticas-malaga.jpg';

const faqs = [
  {
    question: '¿Qué es exactamente una malla subperióstica?',
    answer:
      'Es una estructura de titanio (en su versión moderna, impresa en 3D a medida) que se diseña a partir del TAC del paciente para apoyarse directamente sobre el hueso, bajo el periostio. Sobre esta malla emergen pilares en los que se atornilla la prótesis dental fija.',
  },
  {
    question: '¿Es una técnica nueva?',
    answer:
      'La idea original es de los años 40, pero las primeras versiones tenían tasas de complicaciones elevadas. Las mallas subperiósticas actuales, fabricadas con titanio impreso en 3D y planificación digital, han recuperado la técnica con resultados muy superiores y son hoy una alternativa válida en casos seleccionados.',
  },
  {
    question: '¿Cuándo se utiliza una malla en lugar de implantes convencionales?',
    answer:
      'Cuando la atrofia ósea es tan severa que ni siquiera permite la colocación de implantes convencionales o cuando el paciente no quiere o no puede someterse a injertos óseos prolongados. También en pacientes con contraindicaciones para implantes cigomáticos.',
  },
  {
    question: '¿Cuánto tiempo se tarda en llevar dientes fijos?',
    answer:
      'En la mayoría de casos, en la propia cirugía o en las 24–72 horas siguientes se atornilla la prótesis provisional fija. La malla, al fabricarse a medida, encaja con precisión y permite una carga prácticamente inmediata.',
  },
  {
    question: '¿Cuál es la duración esperable?',
    answer:
      'Las mallas subperiósticas modernas, con titanio impreso y diseño digital, presentan resultados a medio plazo muy positivos. La literatura científica todavía está consolidando datos a largo plazo, motivo por el que recomendamos seguimiento estricto cada 6 meses.',
  },
  {
    question: '¿Es una cirugía dolorosa?',
    answer:
      'Se realiza bajo sedación o anestesia general. El postoperatorio es comparable al de una cirugía implantológica avanzada y los pacientes suelen reincorporarse a su actividad habitual en pocos días con la medicación pautada.',
  },
];

const MallasSubperiosticas = () => {
  return (
    <Layout>
      <SEOHead
        title="Mallas subperiósticas dentales en Málaga | Bocaboca"
        description="Mallas subperiósticas a medida en Málaga: alternativa a injertos óseos complejos para rehabilitar maxilares atróficos. Consulta sin compromiso."
        canonical="/mallas-subperiosticas"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalProcedure',
            name: 'Mallas subperiósticas dentales personalizadas',
            procedureType: 'https://schema.org/SurgicalProcedure',
            bodyLocation: 'Maxilar superior y mandíbula atróficos',
            description:
              'Estructura de titanio impresa en 3D a medida que se ancla sobre el hueso bajo el periostio para soportar una prótesis dental fija en pacientes con atrofia ósea severa.',
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
                name: 'Mallas Subperiósticas',
                item: 'https://www.implantesdentalesenmalaga.com/mallas-subperiosticas',
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
                Implantología Personalizada
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Mallas subperiósticas: alternativa a los injertos óseos complejos
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Una solución a medida, fabricada en titanio impreso en 3D a partir de tu TAC, para
                pacientes con atrofia ósea severa que no son candidatos a implantes convencionales y que
                buscan evitar largos procesos de injerto. Disponible en nuestras clínicas de Málaga.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Diseño 100% personalizado', 'Sin injertos óseos', 'Carga prácticamente inmediata'].map((item) => (
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
                  alt="Malla subperióstica de titanio impresa en 3D adaptada a un modelo anatómico de mandíbula"
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
                <p className="font-display text-2xl md:text-3xl font-bold">100%</p>
                <p className="text-sm opacity-90">Diseño personalizado</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">Ti</p>
                <p className="text-sm opacity-90">Titanio biocompatible</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">24–72h</p>
                <p className="text-sm opacity-90">Prótesis fija provisional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">¿Qué es?</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Qué es una malla subperióstica dental
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              Una malla subperióstica es una estructura de titanio diseñada a medida que se apoya
              directamente sobre el hueso del maxilar o la mandíbula, justo por debajo del periostio (la
              membrana que recubre el hueso). De esta malla emergen unos pilares transmucosos sobre los
              que se atornilla una prótesis dental fija completa.
            </p>
            <p>
              A diferencia de los <Link to="/implantes-dentales" className="text-primary font-medium hover:underline">implantes dentales</Link> convencionales,
              que se introducen en el interior del hueso, la malla subperióstica lo abraza por fuera. La
              versión moderna de esta técnica utiliza titanio impreso en 3D mediante sinterizado láser a
              partir del TAC del paciente, lo que permite un encaje milimétrico y una distribución
              óptima de las cargas masticatorias.
            </p>
          </div>
        </div>
      </section>

      {/* CUÁNDO INDICADA */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Indicaciones</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Cuándo está indicada
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            {[
              'Atrofia ósea severa donde no es posible colocar implantes convencionales ni con técnicas como el All-on-4™.',
              'Pacientes que no quieren o no pueden someterse a procesos largos de injerto óseo.',
              'Casos donde los implantes cigomáticos están contraindicados o no son la mejor opción.',
              'Reabsorciones óseas extensas tras pérdida prolongada de dientes o uso de prótesis removibles.',
              'Necesidad de devolver la función masticatoria con una prótesis fija de forma rápida.',
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-6">
            En cada caso comparamos esta opción con otras alternativas como el{' '}
            <Link to="/implantes-all-on-4" className="text-primary font-medium hover:underline">All-on-4™</Link> o los{' '}
            <Link to="/implantes-cigomaticos" className="text-primary font-medium hover:underline">implantes cigomáticos</Link>{' '}
            para ofrecerte la solución más adecuada según tu anatomía y necesidades.
          </p>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Ventajas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Beneficios de la malla subperióstica personalizada
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: 'Sin injertos óseos', text: 'Evita largas fases de regeneración ósea y permite resolver el caso con una sola intervención.' },
              { icon: Shield, title: 'Encaje milimétrico', text: 'Diseñada digitalmente sobre el TAC del paciente: cada malla es única y se ajusta a la anatomía exacta.' },
              { icon: Clock, title: 'Carga inmediata', text: 'En la mayoría de casos permite atornillar una prótesis provisional fija en las primeras 24–72 horas.' },
              { icon: Award, title: 'Distribución óptima de cargas', text: 'La estructura reparte las fuerzas masticatorias sobre una amplia superficie ósea, reduciendo zonas de sobrecarga.' },
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
            Cómo se realiza el tratamiento paso a paso
          </h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'TAC 3D y diseño digital', text: 'Realizamos un CBCT de alta resolución y diseñamos virtualmente la malla y la prótesis sobre el modelo 3D del paciente.' },
              { step: '02', title: 'Fabricación a medida', text: 'La malla se fabrica en titanio biocompatible mediante impresión 3D por sinterizado láser. Es única para cada paciente.' },
              { step: '03', title: 'Cirugía y colocación', text: 'Bajo sedación o anestesia general, se levanta la mucosa, se posiciona la malla sobre el hueso y se sutura. Duración: 90–150 minutos.' },
              { step: '04', title: 'Prótesis provisional fija', text: 'En 24–72 horas se atornilla la prótesis provisional fija sobre los pilares de la malla.' },
              { step: '05', title: 'Prótesis definitiva y mantenimiento', text: 'Tras la cicatrización de los tejidos blandos, se coloca la prótesis definitiva con un acabado estético natural y se inicia el programa de revisiones.' },
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
            Recuperación y cuidados a largo plazo
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              El postoperatorio es similar al de una cirugía implantológica avanzada. Es habitual cierta
              inflamación durante 5–7 días que se controla con la pauta antiinflamatoria y antibiótica
              prescrita.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reposo relativo durante 48 horas y aplicación de frío local intermitente.</li>
              <li>Dieta blanda durante las primeras 4–6 semanas.</li>
              <li>Higiene cuidadosa con cepillo suave, irrigador y enjuagues de clorhexidina.</li>
              <li>Revisiones a 7 días, 1 mes, 3 meses y 6 meses.</li>
            </ul>
            <p>
              A largo plazo, la malla subperióstica requiere un mantenimiento profesional cada 6 meses
              con higiene específica para prótesis sobre estructuras de titanio. La salud de las encías
              alrededor de los pilares es clave para la longevidad del tratamiento. Más información en
              nuestro artículo sobre{' '}
              <Link to="/noticias/periimplantitis-sintomas-prevencion-malaga" className="text-primary font-medium hover:underline">
                periimplantitis: síntomas y prevención
              </Link>
              .
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
              Dudas frecuentes sobre las mallas subperiósticas
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
            Estudiamos si una malla a medida es tu mejor opción
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Cada caso es distinto. En nuestras clínicas de Málaga te realizamos un estudio 3D y te
            explicamos con transparencia las alternativas reales para tu situación.
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
                href="https://wa.me/34679490216?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20mallas%20subperi%C3%B3sticas"
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

export default MallasSubperiosticas;
