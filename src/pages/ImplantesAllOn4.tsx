import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, MessageCircle, Shield, Zap, Clock, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead';
import heroImg from '@/assets/implantes-all-on-4-malaga.jpg';

const faqs = [
  {
    question: '¿Es realmente posible salir el mismo día con dientes fijos?',
    answer:
      'Sí, siempre que el TAC 3D confirme una densidad y volumen óseo suficientes para alcanzar la estabilidad primaria que la carga inmediata requiere. En esos casos, colocamos los 4 implantes y atornillamos una prótesis provisional fija de resina reforzada en la misma jornada.',
  },
  {
    question: '¿En qué se diferencia el All-on-4™ de un puente convencional sobre implantes?',
    answer:
      'El All-on-4™ rehabilita una arcada completa con solo 4 implantes inclinados estratégicamente, mientras que las soluciones tradicionales suelen requerir 6 u 8 implantes y, en muchos casos, injertos óseos previos. Esto reduce tiempos quirúrgicos y simplifica el postoperatorio.',
  },
  {
    question: '¿Cuándo se coloca la prótesis definitiva?',
    answer:
      'La provisional se lleva entre 3 y 6 meses, periodo que necesita el hueso para integrar los implantes (osteointegración). Una vez consolidada, se sustituye por la prótesis definitiva, habitualmente de zirconio o metal-cerámica, con un acabado estético muy superior.',
  },
  {
    question: '¿Qué cuidados necesita una prótesis All-on-4™?',
    answer:
      'Higiene diaria con cepillo, irrigador y cepillos interdentales específicos, además de revisiones cada 6 meses con higiene profesional. Un mantenimiento adecuado es la principal garantía de longevidad del tratamiento.',
  },
  {
    question: '¿El All-on-4™ es adecuado para fumadores o pacientes con diabetes?',
    answer:
      'Pueden ser candidatos siempre que el tabaquismo y la diabetes estén controlados. En estos perfiles valoramos individualmente el riesgo y, si procede, ajustamos el protocolo quirúrgico y de seguimiento para minimizar complicaciones.',
  },
  {
    question: '¿Notaré que llevo una prótesis fija?',
    answer:
      'La sensación al masticar y hablar es muy similar a la de los dientes naturales. A diferencia de las dentaduras removibles, no se mueve, no cubre el paladar y permite recuperar la percepción del sabor y la temperatura.',
  },
];

const ImplantesAllOn4 = () => {
  return (
    <Layout>
      <SEOHead
        title="All-on-4™ en Málaga: dientes fijos en un día | Bocaboca"
        description="Rehabilitación completa con la técnica All-on-4™ en Málaga. Dientes fijos sobre 4 implantes en una sola jornada. Primera consulta gratuita."
        canonical="/implantes-all-on-4"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalProcedure',
            name: 'Implantes dentales All-on-4™',
            procedureType: 'https://schema.org/SurgicalProcedure',
            bodyLocation: 'Maxilar superior y mandíbula',
            description:
              'Técnica de rehabilitación de arcada completa mediante 4 implantes dentales inclinados que sostienen una prótesis fija atornillada, colocada en la misma jornada quirúrgica.',
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
                name: 'All-on-4',
                item: 'https://www.implantesdentalesenmalaga.com/implantes-all-on-4',
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
                Rehabilitación Completa
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                All-on-4™ en Málaga: dientes fijos en un día con 4 implantes
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Una solución consolidada para pacientes con pérdida total de dientes o con piezas
                irrecuperables. Recupera tu sonrisa y la capacidad de masticar con una prótesis fija
                atornillada en la misma jornada quirúrgica.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Sin injertos en la mayoría de casos', 'Provisional fija el mismo día', 'Planificación 3D guiada'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ),
                )}
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
                  alt="Modelo dental con prótesis fija sobre cuatro implantes dentales (técnica All-on-4)"
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
                <p className="font-display text-2xl md:text-3xl font-bold">+20</p>
                <p className="text-sm opacity-90">Años aplicando la técnica</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">98%</p>
                <p className="text-sm opacity-90">Tasa de éxito documentada</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold">24h</p>
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
            Qué es la técnica All-on-4™
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              El All-on-4™ es un protocolo de implantología desarrollado a finales de los años 90 que permite
              rehabilitar una arcada completa apoyándose en solo cuatro <Link to="/implantes-dentales" className="text-primary font-medium hover:underline">implantes dentales</Link>:
              dos rectos en la zona anterior y dos inclinados (hasta 30–45°) en la zona posterior. Esta
              inclinación aprovecha el hueso disponible y, en la mayoría de los casos, evita la necesidad
              de injertos óseos previos.
            </p>
            <p>
              Sobre estos cuatro implantes se atornilla una prótesis híbrida fija de 10 a 12 dientes. La
              versión provisional se coloca en las primeras 24–48 horas y, una vez completada la
              osteointegración, se sustituye por una prótesis definitiva con un acabado estético más
              avanzado. Es una alternativa segura a las dentaduras removibles y una solución eficaz para
              pacientes con pérdida total de dientes o con dientes irrecuperables por enfermedad
              periodontal avanzada.
            </p>
          </div>
        </div>
      </section>

      {/* CUÁNDO INDICADO */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Indicaciones</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Cuándo está indicado el All-on-4™
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            La técnica está especialmente indicada en los siguientes perfiles clínicos:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            {[
              'Pacientes con edentulismo total (sin dientes) en uno o ambos maxilares.',
              'Personas con prótesis removibles que no se ajustan correctamente o generan inseguridad al hablar y comer.',
              'Pacientes con enfermedad periodontal avanzada y dientes con pronóstico irrecuperable.',
              'Casos con reabsorción ósea moderada en zonas posteriores donde otras técnicas requerirían injerto.',
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-6">
            En reabsorciones óseas severas, donde el hueso disponible no permite una estabilidad primaria
            suficiente, valoramos otras alternativas como los{' '}
            <Link to="/implantes-cigomaticos" className="text-primary font-medium hover:underline">
              implantes cigomáticos
            </Link>{' '}
            o las{' '}
            <Link to="/mallas-subperiosticas" className="text-primary font-medium hover:underline">
              mallas subperiósticas a medida
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
              Ventajas y beneficios del All-on-4™
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: 'Resultado inmediato',
                text: 'Sales de la clínica con dientes fijos provisionales el mismo día de la cirugía. Sin etapas con boca vacía ni dentaduras provisionales.',
              },
              {
                icon: Shield,
                title: 'Menos cirugías',
                text: 'Menos implantes y, en la mayoría de casos, sin necesidad de injertos óseos previos. Tratamiento más simple y mejor postoperatorio.',
              },
              {
                icon: Award,
                title: 'Función masticatoria real',
                text: 'Sensación y eficacia masticatoria muy próximas a las de los dientes naturales, sin movilidad ni roces.',
              },
              {
                icon: Clock,
                title: 'Tratamiento previsible',
                text: 'Protocolo ampliamente estudiado en la literatura científica con tasas de supervivencia superiores al 95% a 10 años en estudios de seguimiento.',
              },
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
            All-on-4™ paso a paso
          </h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Diagnóstico digital y planificación 3D',
                text: 'Realizamos un TAC de haz cónico (CBCT) y un escáner intraoral. El cirujano planifica virtualmente la posición e inclinación exacta de cada implante y diseña la férula quirúrgica.',
              },
              {
                step: '02',
                title: 'Cirugía guiada e implantes',
                text: 'Bajo anestesia local —con sedación consciente opcional— se colocan los 4 implantes mediante cirugía guiada. La intervención dura entre 60 y 120 minutos por arcada.',
              },
              {
                step: '03',
                title: 'Prótesis provisional fija en 24–48h',
                text: 'En las horas siguientes a la cirugía atornillamos una prótesis provisional fija de resina reforzada que permite hacer vida normal con dieta blanda durante las primeras semanas.',
              },
              {
                step: '04',
                title: 'Osteointegración (3–6 meses)',
                text: 'El hueso se fusiona con la superficie de los implantes. Durante este tiempo se realizan revisiones periódicas para confirmar la correcta evolución.',
              },
              {
                step: '05',
                title: 'Prótesis definitiva',
                text: 'Diseñamos y colocamos la prótesis definitiva, habitualmente de zirconio monolítico o metal-cerámica, con un ajuste y estética óptimos.',
              },
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
            Recuperación y cuidados tras la cirugía
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              El postoperatorio del All-on-4™ es generalmente más leve de lo que muchos pacientes esperan.
              Es habitual cierta inflamación y molestias controlables con la medicación pautada durante
              los 3–5 primeros días.
            </p>
            <h3 className="font-display text-xl font-bold text-foreground">Primera semana</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dieta blanda y fría las primeras 48 horas; templada después.</li>
              <li>Higiene suave con clorhexidina según indicaciones del cirujano.</li>
              <li>Evitar esfuerzos físicos intensos y exposición solar directa.</li>
            </ul>
            <h3 className="font-display text-xl font-bold text-foreground">Primeros meses</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mantener dieta blanda durante el primer mes para proteger la osteointegración.</li>
              <li>Higiene diaria con cepillo eléctrico, irrigador y cepillos interproximales.</li>
              <li>Revisiones programadas para verificar el ajuste de la prótesis provisional.</li>
            </ul>
            <p>
              Una vez colocada la prótesis definitiva, recomendamos revisiones cada 6 meses con higiene
              profesional. Puedes ampliar información en nuestro artículo sobre{' '}
              <Link to="/noticias/importancia-mantenimiento-implantes-dentales-malaga" className="text-primary font-medium hover:underline">
                la importancia del mantenimiento de los implantes
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
              Dudas habituales sobre el All-on-4™
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

      {/* CTA FINAL */}
      <section className="hero-section py-20">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            ¿Quieres saber si eres candidato al All-on-4™?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Solicita una valoración gratuita en nuestras clínicas de Málaga. Estudiamos tu caso con TAC 3D
            y te explicamos las opciones reales para tu situación.
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
                href="https://wa.me/34679490216?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20All-on-4"
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

export default ImplantesAllOn4;
