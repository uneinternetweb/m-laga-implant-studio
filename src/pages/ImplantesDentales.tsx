import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Shield, Zap, Users, Clock, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import heroImplantes from '@/assets/hero-implantes.png';
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
    {
      question: '¿Es doloroso el tratamiento con implantes dentales?',
      answer: 'En ningún caso, ya que siempre se realiza con anestesia local y en ocasiones con sedación o anestesia general. Para la mayoría de los pacientes es suficiente con aplicar anestesia local para evitar cualquier tipo de molestia.',
    },
    {
      question: '¿En caso de enfermedad periodontal, es aconsejable reponer los dientes mediante implantes dentales?',
      answer: 'Sin duda, el tratamiento con implantes dentales hoy en día es la mejor forma de rehabilitar los dientes perdidos en un paciente periodontal. Los implantes vienen a sustituir a las raíces de dientes perdidos para que, sobre ellas, se pueda colocar una prótesis dental de forma firme y estable.',
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
                  src={heroImplantes}
                  alt="Clínica dental especializada en implantes dentales en Málaga"
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

      {/* What are Implants - Extended SEO Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                ¿Qué Son?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                ¿Qué Son los Implantes Dentales?
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Los implantes dentales son aditamentos como raíces artificiales, creados para sustituir 
                  dientes perdidos por cualquier causa, capaces de integrarse hasta el punto de convivir 
                  de forma sana y totalmente natural con el resto de los tejidos de la boca.
                </p>
                <p>
                  Habitualmente los implantes están fabricados de titanio químicamente puro y actúan como 
                  sustitutos de las raíces dentales (también de zirconio). Tras su colocación dentro del 
                  maxilar o de la mandíbula sirven para que, una vez que estén osteointegrados, soporten 
                  los nuevos dientes artificiales que irán unidos a ellos.
                </p>
                <p>
                  Cada implante dental, hace las veces de raíz artificial sobre la cual se asentará la 
                  corona o prótesis dental y donde podemos distinguir distintas partes, a semejanza del 
                  diente natural:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fijación implantológica o implante dental</strong> (porción que queda bajo la encía)</li>
                  <li><strong>Pilar transepitelial</strong> (porción de la fijación que emerge en la boca)</li>
                  <li><strong>Corona o prótesis</strong> (que recubre al pilar y es apreciable en boca)</li>
                </ul>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden card-hover sticky top-24">
              <img
                src={clinicaGabinete}
                alt="Gabinete de tratamiento dental en Clínicas Bocaboca"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose of Implants */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Beneficios
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
              ¿Para Qué Sirven los Implantes Dentales?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              La colocación de implantes dentales es aconsejable cuando se pretende:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Reponer dientes con estabilidad',
                  text: 'Estabilidad similar o incluso superior a la de los naturales perdidos, evitando utilizar dientes adyacentes. Rehabilitar la boca funcional y estéticamente con calidad y precisión.',
                },
                {
                  icon: Zap,
                  title: 'Anclaje para prótesis móviles',
                  text: 'Obtener un anclaje para las prótesis dentales móviles, aportando la estabilidad necesaria para dar confort y seguridad, como si fueran prótesis fijas.',
                },
                {
                  icon: Users,
                  title: 'Conservar el hueso maxilar',
                  text: 'Conseguir que el hueso de los maxilares mantenga su función y no pierda volumen por reabsorción, evitando el deterioro de los tejidos y el aspecto de cara envejecida.',
                },
                {
                  icon: Clock,
                  title: 'Posibilitar otros tratamientos',
                  text: 'Posibilitar anclajes que permitan efectuar otros tratamientos como los ortodónticos u ortopédicos que de otra forma serían imposibles de realizar.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Osseointegration */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Proceso Biológico
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            ¿Cómo Se Sujeta el Implante Dental en el Hueso?
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              La sujeción del implante dental al hueso se produce mediante un proceso biológico conocido 
              como <strong>Osteointegración</strong>, mediante el cual el organismo establece una conexión 
              directa entre el hueso y la superficie del implante.
            </p>
            <p>
              Cuando se ha producido la osteointegración el implante dental se encuentra firmemente unido 
              al hueso y puede soportar una prótesis para hacer frente a todos los requerimientos funcionales 
              y estéticos como si se tratase de un diente natural sano.
            </p>
            <p>
              Otra característica de la osteointegración es la de ser muy estable en el tiempo por lo que 
              estos tratamientos ofrecen resultados satisfactorios que se disfrutan durante muchos años.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions for Different Cases */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Soluciones Personalizadas
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Soluciones de Implantes para Cada Caso
            </h2>
          </div>

          <div className="space-y-12">
            {/* Single Tooth */}
            <div className="bg-card rounded-3xl p-8 md:p-12">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                ¿Cómo Solucionar la Pérdida de un Diente Aislado?
              </h3>
              <p className="text-muted-foreground mb-4">
                Mediante un implante dental puede ser rehabilitada la pérdida de un diente natural sin 
                necesidad de utilizar o tallar los dientes adyacentes sanos, cuestión inevitable, sin 
                embargo, si se opta por la colocación de un puente apoyado en los dientes.
              </p>
              <p className="text-muted-foreground">
                Sobre el implante dental se adapta una corona unitaria o independiente, que puede ir 
                cementada o unida al implante mediante un pequeño tornillo invisible. Con ello la 
                apariencia natural y las funciones masticatorias y de fonación quedan totalmente 
                restauradas sin tener que apoyarnos en dientes adyacentes.
              </p>
            </div>

            {/* Multiple Teeth */}
            <div className="bg-card rounded-3xl p-8 md:p-12">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                ¿Cómo Restaurar la Pérdida de Varios Dientes Seguidos?
              </h3>
              <p className="text-muted-foreground mb-4">
                Cuando se han perdido varios dientes, ya sean anteriores o posteriores, y el tramo sin 
                dientes es pequeño, se pueden reponer las ausencias mediante una prótesis fija denominada 
                puente, que puede ir apoyada en sus dientes naturales. Pero si se desea evitar tallarlos, 
                es más aconsejable colocar varios implantes en el tramo sin dientes y sobre ellos apoyar el puente.
              </p>
              <p className="text-muted-foreground">
                Cuando aún habiendo dientes naturales, los huecos sin dientes sean tan grandes que desaconsejen 
                la colocación de un puente apoyado en los propios dientes del paciente, habrá que elegir entre 
                una prótesis removible con ganchos, o bien optar por la colocación de varios implantes para 
                soportar los puentes.
              </p>
            </div>

            {/* Complete Rehabilitation */}
            <div className="bg-card rounded-3xl p-8 md:p-12">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                ¿Cómo Rehabilitar la Boca Cuando Faltan Todos los Dientes?
              </h3>
              <p className="text-muted-foreground mb-4">
                La rehabilitación bucal de una persona que ha perdido todos sus dientes puede realizarse 
                mediante una prótesis completa movible. Estas "dentaduras completas" con el paso del tiempo 
                pueden presentar inconvenientes como:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Pérdida de estabilidad, ajuste y retención que ocasiona movilidad y dificultad masticatoria</li>
                <li>Reabsorción lenta pero continuada del hueso alveolar de los maxilares</li>
                <li>Llagas en zonas de roces</li>
                <li>Pérdida del gusto y cambios en el sabor de los alimentos</li>
                <li>En algunas personas producen náusea lo que dificulta su uso</li>
              </ul>
              <p className="text-muted-foreground">
                Mediante la colocación de un número variable de implantes dentales se puede adaptar una 
                prótesis estable, detener la reabsorción del hueso en los maxilares e incrementar el 
                confort y la seguridad. Se puede optar por una prótesis completamente fija o por una 
                sobredentadura que asegura gran estabilidad y confort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Implants */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Tipos de Tratamiento
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Técnicas de Implantología Avanzada
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

      {/* Treatment Process */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            El Tratamiento
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            ¿En Qué Consiste el Tratamiento con Implantes Dentales?
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p>
              El procedimiento a seguir en el tratamiento con implantes dentales es distinto en cada caso 
              y debe ser personalizado; su implantólogo en Málaga le informará con detalle.
            </p>

            <div className="bg-card rounded-2xl p-6 not-prose">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Fase Inicial de Estudio y Planificación
              </h3>
              <p className="text-muted-foreground mb-4">
                El tratamiento con implantes dentales osteointegrados requiere procedimientos de alta 
                complejidad técnica, por tanto debe ser bien planificado. Los objetivos incluyen:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Facilitar información de los implantes o del tipo de prótesis indicada en su caso</li>
                <li>Ayudar a elegir la época ideal para efectuar el tratamiento</li>
                <li>Valorar de forma individualizada el estado de salud bucal y general del paciente</li>
                <li>Ofrecer al paciente un plan de tratamiento completo</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 not-prose">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Fase Quirúrgica
              </h3>
              <p className="text-muted-foreground mb-4">
                La colocación de los implantes dentales requiere de una o varias intervenciones quirúrgicas. 
                Dependiendo de cada caso, puede realizarse en una o dos etapas:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Proceso inmediato:</strong> 1-7 días</li>
                <li><strong>Proceso estándar en 1 fase:</strong> 2-4 meses</li>
                <li><strong>Proceso estándar en 2 fases:</strong> 3-6 meses</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 not-prose">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Fase Restauradora
              </h3>
              <p className="text-muted-foreground">
                Es la etapa en la que sobre los implantes se colocan los dientes mediante adaptación de 
                coronas, puentes u otros tipos de prótesis. Se lleva a cabo cuando se ha verificado que 
                la osteointegración es adecuada y los implantes están preparados para recibir fuerzas.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 not-prose">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Fase de Mantenimiento
              </h3>
              <p className="text-muted-foreground">
                Los tratamientos mediante implantes han demostrado poseer un elevado grado de seguridad 
                basado en protocolos de control y mantenimiento exhaustivos. Las revisiones periódicas 
                son fundamentales para garantizar la salud a largo plazo del tratamiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
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

      {/* Additional Info */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                ¿Apreciarán los Demás que Llevo Implantes Dentales?
              </h3>
              <p className="text-muted-foreground">
                Una prótesis sobre implantes puede llegar a pasar desapercibida a simple vista, incluso 
                para un odontólogo o estomatólogo. En ocasiones, ciertos condicionantes anatómicos pueden 
                limitar la obtención del resultado ideal, pero su implantólogo le mantendrá informado de 
                las circunstancias particulares que afecten a su caso.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                ¿Hay Edades Límite para los Implantes Dentales?
              </h3>
              <p className="text-muted-foreground">
                No existe una edad máxima para la colocación de implantes dentales. La única limitación 
                radica en el estado de salud de la persona. La edad mínima está en función de la 
                finalización del crecimiento. Cuando una persona haya finalizado su desarrollo estará 
                en condiciones de disfrutar de las ventajas de los implantes dentales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
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

      {/* Related Treatments */}
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Otros Tratamientos Relacionados
          </h2>
          <p className="text-muted-foreground mb-8">
            Otras informaciones sobre tratamientos dentales que también le puede interesar:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/protesis-dentales" 
              className="bg-card px-6 py-3 rounded-full text-foreground hover:bg-accent transition-colors"
            >
              Prótesis Dentales Málaga
            </Link>
            <Link 
              to="/sobre-nosotros" 
              className="bg-card px-6 py-3 rounded-full text-foreground hover:bg-accent transition-colors"
            >
              Implantólogo en Málaga
            </Link>
            <Link 
              to="/contacto" 
              className="bg-card px-6 py-3 rounded-full text-foreground hover:bg-accent transition-colors"
            >
              Odontología Málaga
            </Link>
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
