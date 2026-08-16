import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import {
  LandingHero,
  LandingSection,
  FaqBlock,
  ReferencesBlock,
  LandingCta,
  type Faq,
  type Reference,
} from '@/components/landing/LandingSections';
import heroImg from '@/assets/hero-bocaboca-fachada.jpg';

const faqs: Faq[] = [
  {
    question: '¿Desde qué puntos de la Costa del Sol se accede bien a vuestras clínicas?',
    answer:
      'Nuestras tres clínicas están en Málaga capital (Ayala, Martínez Maldonado y Avda. de Velázquez), con acceso directo desde la A-7 y la AP-7. Desde Torremolinos, Benalmádena o Fuengirola el trayecto habitual es de 15 a 35 minutos, y desde Marbella o Estepona entre 45 y 75 minutos según el tráfico. También hay conexión en Cercanías C-1 (Fuengirola–Málaga Centro).',
  },
  {
    question: '¿Podéis concentrar las visitas si vivo lejos o estoy solo unas semanas en la costa?',
    answer:
      'Sí. En pacientes que se desplazan agrupamos el estudio diagnóstico (exploración, radiografía panorámica y TAC 3D) en una misma jornada y planificamos la cirugía y las revisiones con la menor cantidad de desplazamientos posible. Lo que no comprimimos son los tiempos biológicos: la osteointegración necesita sus semanas.',
  },
  {
    question: '¿Cuántas visitas necesita un tratamiento de implantes?',
    answer:
      'Un caso sencillo suele requerir una visita de estudio, una de cirugía, una revisión a los 7–10 días para retirar puntos, la toma de registros protésicos tras la osteointegración y la colocación de la prótesis. A partir de ahí, revisiones de mantenimiento periódicas.',
  },
  {
    question: '¿Cuánto duran los implantes dentales?',
    answer:
      'Las revisiones sistemáticas con seguimientos de 10 años sitúan la supervivencia de los implantes alrededor del 95%, siempre que exista higiene adecuada y revisiones de mantenimiento. El factor que más condiciona la longevidad no es la marca del implante, sino el control de la placa y el seguimiento profesional.',
  },
  {
    question: 'Si vivo en la costa, ¿puedo hacer las revisiones en mi localidad?',
    answer:
      'Las revisiones de la prótesis y el mantenimiento periimplantario conviene hacerlos en el centro que ha realizado el tratamiento, porque requiere conocer el sistema de implantes y los componentes utilizados. Sí podemos coordinar la higiene dental de rutina con tu dentista habitual.',
  },
];

const references: Reference[] = [
  {
    text:
      'Howe MS, Keys W, Richards D. Long-term (10-year) dental implant survival: A systematic review and sensitivity meta-analysis. Journal of Dentistry. 2019;84:9-21.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Howe+long-term+10-year+dental+implant+survival+meta-analysis',
  },
  {
    text:
      'Moraschini V, Poubel LA, Ferreira VF, Barboza ES. Evaluation of survival and success rates of dental implants reported in longitudinal studies with a follow-up period of at least 10 years. Int J Oral Maxillofac Surg. 2015;44(3):377-388.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Moraschini+survival+success+rates+dental+implants+10+years',
  },
  {
    text:
      'Derks J, Tomasi C. Peri-implant health and disease. A systematic review of current epidemiology. J Clin Periodontol. 2015;42(Suppl 16):S158-S171.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Derks+Tomasi+peri-implant+health+and+disease+epidemiology',
  },
];

const ImplantesCostaDelSol = () => (
  <Layout>
    <SEOHead
      title="Implantes Dentales en la Costa del Sol | Bocaboca Málaga"
      description="Implantes dentales para pacientes de la Costa del Sol: estudio con TAC 3D, cirugía planificada y visitas agrupadas en nuestras clínicas de Málaga. Tel. 951 178 110."
      canonical="/implantes-dentales-costa-del-sol"
      ogImage={heroImg}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          name: 'Implantes dentales en la Costa del Sol',
          about: 'Implantología dental para pacientes de la Costa del Sol atendidos en Málaga',
          audience: { '@type': 'Patient' },
          url: 'https://www.implantesdentalesenmalaga.com/implantes-dentales-costa-del-sol',
          areaServed: [
            'Málaga',
            'Torremolinos',
            'Benalmádena',
            'Fuengirola',
            'Mijas',
            'Marbella',
            'Estepona',
            'Rincón de la Victoria',
            'Vélez-Málaga',
          ],
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
              name: 'Costa del Sol',
              item: 'https://www.implantesdentalesenmalaga.com/implantes-dentales-costa-del-sol',
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

    <LandingHero
      eyebrow="Pacientes de la Costa del Sol"
      title="Implantes dentales en la Costa del Sol, tratados en Málaga"
      intro="Atendemos a pacientes de Torremolinos, Benalmádena, Fuengirola, Mijas, Marbella, Estepona y la Axarquía en nuestras tres clínicas de Málaga capital, organizando las visitas para reducir los desplazamientos."
      bullets={['Estudio con TAC 3D', 'Visitas agrupadas', 'Seguimiento a largo plazo']}
      image={heroImg}
      imageAlt="Fachada de una de las clínicas dentales Bocaboca en Málaga"
    />

    <LandingSection eyebrow="Cobertura" title="Una referencia de implantología accesible desde toda la costa">
      <p>
        La Costa del Sol concentra una población amplia y muy repartida entre municipios, y muchos
        pacientes buscan un centro con experiencia quirúrgica sin tener que desplazarse a otra
        provincia. Nuestras tres clínicas están en Málaga capital, el punto mejor conectado del
        litoral: la A-7 y la AP-7 enlazan con el arco occidental (Torremolinos, Benalmádena,
        Fuengirola, Mijas, Marbella y Estepona) y con el oriental (Rincón de la Victoria,
        Vélez-Málaga y Torre del Mar), y el tren de Cercanías C-1 conecta Fuengirola con el centro.
      </p>
      <p>
        Esa ubicación permite algo que valoran los pacientes que viven lejos: concentrar el estudio
        diagnóstico en una sola jornada y planificar la cirugía y las revisiones con antelación. Si
        quieres conocer el tratamiento en detalle, puedes consultar nuestra{' '}
        <Link to="/implantes-dentales" className="text-primary font-medium hover:underline">
          guía de implantes dentales en Málaga
        </Link>{' '}
        o las direcciones exactas en la{' '}
        <Link to="/contacto" className="text-primary font-medium hover:underline">
          página de contacto
        </Link>
        .
      </p>
    </LandingSection>

    <LandingSection eyebrow="Cómo trabajamos" title="El proceso, paso a paso, adaptado a quien se desplaza" muted>
      <ol className="list-decimal pl-5 space-y-3">
        <li>
          <strong className="text-foreground">Primera visita y diagnóstico.</strong> Exploración,
          radiografía panorámica y TAC 3D (CBCT) para medir el volumen y la densidad de hueso
          disponible y localizar estructuras como el nervio dentario o el seno maxilar.
        </li>
        <li>
          <strong className="text-foreground">Plan de tratamiento por escrito.</strong> Número de
          implantes, tipo de prótesis, necesidad o no de{' '}
          <Link to="/noticias/injerto-oseo-dental-malaga" className="text-primary font-medium hover:underline">
            injerto óseo
          </Link>{' '}
          y calendario de visitas.
        </li>
        <li>
          <strong className="text-foreground">Cirugía.</strong> Colocación de los implantes con
          anestesia local, en muchos casos con cirugía guiada por férula planificada sobre el TAC.
        </li>
        <li>
          <strong className="text-foreground">Osteointegración.</strong> Entre 6 semanas y 6 meses
          según el hueso y la técnica. Es un periodo biológico que no puede acortarse a voluntad.
        </li>
        <li>
          <strong className="text-foreground">Prótesis definitiva.</strong> Registros, pruebas y
          colocación de la{' '}
          <Link to="/protesis-sobre-implantes" className="text-primary font-medium hover:underline">
            prótesis sobre implantes
          </Link>
          , fija o híbrida según el caso.
        </li>
        <li>
          <strong className="text-foreground">Mantenimiento.</strong> Revisiones periódicas: la
          periimplantitis afecta aproximadamente a 1 de cada 5 pacientes con implantes, y detectarla
          pronto es lo que evita la pérdida del implante.
        </li>
      </ol>
    </LandingSection>

    <LandingSection eyebrow="Evidencia" title="Qué dicen los datos sobre los implantes a largo plazo">
      <p>
        Las revisiones sistemáticas con seguimientos de al menos 10 años sitúan la supervivencia de
        los implantes dentales en torno al 95%, con cifras del 96,4% en el metaanálisis de Howe y
        colaboradores (2019) y del 94,6% en el de Moraschini y colaboradores (2015). Son datos
        agregados de estudios clínicos: describen lo que ocurre en poblaciones amplias, no una
        garantía individual.
      </p>
      <p>
        En sentido contrario, el trabajo epidemiológico de Derks y Tomasi (2015) estima que la
        periimplantitis afecta a alrededor del 22% de los pacientes. Por eso insistimos tanto en el
        mantenimiento: en implantología, el pronóstico se juega más en los años posteriores que en
        el día de la cirugía.
      </p>
    </LandingSection>

    <LandingSection eyebrow="Tratamientos" title="Soluciones según el caso" muted>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link to="/implantes-dentales" className="text-primary font-medium hover:underline">
            Implantes unitarios y parciales
          </Link>{' '}
          cuando faltan una o varias piezas.
        </li>
        <li>
          <Link to="/implantes-all-on-4" className="text-primary font-medium hover:underline">
            All-on-4™
          </Link>{' '}
          para rehabilitar una arcada completa con cuatro implantes.
        </li>
        <li>
          <Link to="/implantes-cigomaticos" className="text-primary font-medium hover:underline">
            Implantes cigomáticos
          </Link>{' '}
          y{' '}
          <Link to="/mallas-subperiosticas" className="text-primary font-medium hover:underline">
            mallas subperiósticas
          </Link>{' '}
          en atrofias óseas severas del maxilar superior.
        </li>
        <li>
          <Link to="/implantes-zirconio" className="text-primary font-medium hover:underline">
            Implantes y prótesis de zirconio
          </Link>{' '}
          cuando la estética o la ausencia de metal son prioritarias.
        </li>
        <li>
          <Link to="/implantes-sin-dolor" className="text-primary font-medium hover:underline">
            Protocolos de control del dolor y la ansiedad
          </Link>{' '}
          para pacientes con miedo al dentista.
        </li>
      </ul>
    </LandingSection>

    <FaqBlock faqs={faqs} />
    <LandingCta
      title="¿Vienes desde la Costa del Sol?"
      text="Cuéntanos desde dónde te desplazas y organizamos las visitas para que el tratamiento te encaje."
    />
    <ReferencesBlock references={references} />
  </Layout>
);

export default ImplantesCostaDelSol;
