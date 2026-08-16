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
import heroImg from '@/assets/implantologo-malaga.jpg';

const faqs: Faq[] = [
  {
    question: '¿Qué es exactamente un implantólogo?',
    answer:
      'En España la implantología no es una especialidad oficial reconocida, sino un área de ejercicio dentro de la Odontología. Un implantólogo es un dentista (o cirujano oral y maxilofacial) con formación posgraduada específica y experiencia quirúrgica en la colocación y rehabilitación de implantes dentales.',
  },
  {
    question: '¿Cómo puedo comprobar la formación de mi implantólogo?',
    answer:
      'Puedes pedir su número de colegiado y consultarlo en el Colegio Oficial de Dentistas de Málaga, y preguntar por su formación posgraduada, los años de ejercicio en implantología y el volumen de casos que trata. Un profesional serio responde a estas preguntas sin problema.',
  },
  {
    question: '¿Quién debe colocar los implantes y quién la prótesis?',
    answer:
      'Pueden ser el mismo profesional o un equipo coordinado entre cirugía, prótesis y laboratorio. Lo importante es que la parte quirúrgica se planifique desde el resultado protésico final: la posición del implante la dicta la prótesis, no al revés.',
  },
  {
    question: '¿Qué pruebas debería incluir un estudio serio?',
    answer:
      'Exploración clínica, historia médica completa (incluyendo medicación y hábitos), radiografía panorámica y TAC 3D (CBCT). Sin un estudio volumétrico del hueso no es posible planificar con precisión ni informar de forma realista de los riesgos.',
  },
  {
    question: '¿Qué señales deben hacer sospechar?',
    answer:
      'Presupuestos cerrados sin haber visto un TAC, promesas de resultados garantizados, presión para decidir en el momento y ausencia de un plan de mantenimiento posterior. La implantología seria informa también de lo que puede salir mal.',
  },
  {
    question: '¿Atendéis a pacientes de fuera de Málaga capital?',
    answer:
      'Sí. Recibimos con frecuencia pacientes de toda la provincia y de la Costa del Sol, y en esos casos organizamos las visitas para agrupar pruebas y reducir desplazamientos.',
  },
];

const references: Reference[] = [
  {
    text:
      'Derks J, Tomasi C. Peri-implant health and disease. A systematic review of current epidemiology. J Clin Periodontol. 2015;42(Suppl 16):S158-S171.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Derks+Tomasi+peri-implant+health+and+disease+epidemiology',
  },
  {
    text:
      'Howe MS, Keys W, Richards D. Long-term (10-year) dental implant survival: A systematic review and sensitivity meta-analysis. Journal of Dentistry. 2019;84:9-21.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Howe+long-term+10-year+dental+implant+survival+meta-analysis',
  },
  {
    text:
      'Chrcanovic BR, Albrektsson T, Wennerberg A. Smoking and dental implants: A systematic review and meta-analysis. J Dent. 2015;43(5):487-498.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Chrcanovic+smoking+and+dental+implants+systematic+review+meta-analysis',
  },
];

const ImplantologoMalaga = () => (
  <Layout>
    <SEOHead
      title="Implantólogo en Málaga y Costa del Sol | Bocaboca"
      description="Implantólogo en Málaga y Costa del Sol: cómo elegir profesional, qué formación y qué pruebas exigir, y cómo trabaja nuestro equipo de implantología en tres clínicas."
      canonical="/implantologo-malaga"
      ogImage={heroImg}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          name: 'Implantólogo en Málaga y Costa del Sol',
          about: 'Criterios para elegir un implantólogo y proceso de trabajo en implantología dental',
          url: 'https://www.implantesdentalesenmalaga.com/implantologo-malaga',
          audience: { '@type': 'Patient' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.implantesdentalesenmalaga.com/' },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Implantólogo en Málaga',
              item: 'https://www.implantesdentalesenmalaga.com/implantologo-malaga',
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
      eyebrow="Equipo de implantología"
      title="Implantólogo en Málaga y Costa del Sol: cómo elegir bien"
      intro="Elegir implantólogo es la decisión que más influye en el resultado de un tratamiento de implantes. Estos son los criterios objetivos que deberías comprobar, en cualquier clínica, incluida la nuestra."
      bullets={['Estudio con TAC 3D', 'Planificación protésica previa', 'Mantenimiento estructurado']}
      image={heroImg}
      imageAlt="Estación de planificación digital de implantes con escáner 3D, modelo dental y férula quirúrgica"
    />

    <LandingSection eyebrow="Qué es" title="Implantología: un área de ejercicio, no una especialidad oficial">
      <p>
        En España no existe la especialidad oficial de implantología. Quien coloca implantes es un
        odontólogo o un cirujano oral y maxilofacial con formación posgraduada específica (máster,
        residencias clínicas, formación continuada acreditada) y con experiencia quirúrgica
        acumulada. Esto significa que el título por sí solo no informa: lo que informa es la
        formación concreta, los años de ejercicio y el volumen y tipo de casos que trata.
      </p>
      <p>
        Todos los dentistas en ejercicio deben estar colegiados. Puedes solicitar el número de
        colegiado y verificarlo en el Colegio Oficial de Dentistas de Málaga. Nuestro equipo y su
        trayectoria están detallados en la página{' '}
        <Link to="/sobre-nosotros" className="text-primary font-medium hover:underline">
          Sobre nosotros
        </Link>
        .
      </p>
    </LandingSection>

    <LandingSection eyebrow="Criterios" title="Siete preguntas que deberías hacer antes de firmar nada" muted>
      <ol className="list-decimal pl-5 space-y-3">
        <li>
          <strong className="text-foreground">¿Se hace TAC 3D antes de planificar?</strong> Sin
          estudio volumétrico no se puede valorar con precisión el hueso disponible ni la relación
          con el nervio dentario o el seno maxilar.
        </li>
        <li>
          <strong className="text-foreground">¿La planificación parte de la prótesis final?</strong>{' '}
          La posición del implante debe decidirse en función del diente que va a soportar.
        </li>
        <li>
          <strong className="text-foreground">¿Qué sistema de implantes se utiliza?</strong> Conviene
          saber la marca y que tenga documentación clínica y disponibilidad de componentes a largo
          plazo, por si años después hay que reponer una pieza.
        </li>
        <li>
          <strong className="text-foreground">¿Quién realiza la cirugía y quién la prótesis?</strong>{' '}
          Y si es un equipo, cómo se coordina.
        </li>
        <li>
          <strong className="text-foreground">¿Se informa de riesgos y alternativas por escrito?</strong>{' '}
          El consentimiento informado no es un trámite: debe explicarse.
        </li>
        <li>
          <strong className="text-foreground">¿Existe un plan de mantenimiento?</strong> La
          periimplantitis afecta a alrededor del 22% de los pacientes con implantes (Derks y Tomasi,
          2015) y el seguimiento periódico es la principal herramienta para detectarla a tiempo.
        </li>
        <li>
          <strong className="text-foreground">¿Se valoran los factores de riesgo individuales?</strong>{' '}
          Tabaquismo, diabetes, bruxismo o enfermedad periodontal previa condicionan el pronóstico.
          El metaanálisis de Chrcanovic y colaboradores (2015) documenta un aumento significativo
          del fracaso de implantes en fumadores.
        </li>
      </ol>
    </LandingSection>

    <LandingSection eyebrow="Cómo trabajamos" title="Nuestro protocolo en las tres clínicas de Málaga">
      <p>
        Trabajamos con un flujo digital que empieza en el diagnóstico y termina en el mantenimiento:
        exploración e historia médica, radiografía panorámica y TAC 3D, planificación virtual del
        caso, cirugía (guiada cuando está indicada), fase de osteointegración, registros y{' '}
        <Link to="/protesis-sobre-implantes" className="text-primary font-medium hover:underline">
          prótesis sobre implantes
        </Link>
        , y revisiones periódicas de mantenimiento.
      </p>
      <p>
        Ese mismo protocolo se aplica en casos sencillos y en los complejos, incluidos los que
        requieren{' '}
        <Link to="/implantes-cigomaticos" className="text-primary font-medium hover:underline">
          implantes cigomáticos
        </Link>{' '}
        o{' '}
        <Link to="/mallas-subperiosticas" className="text-primary font-medium hover:underline">
          mallas subperiósticas
        </Link>{' '}
        por atrofia ósea severa. Atendemos a pacientes de Málaga capital y de toda la{' '}
        <Link to="/implantes-dentales-costa-del-sol" className="text-primary font-medium hover:underline">
          Costa del Sol
        </Link>
        .
      </p>
    </LandingSection>

    <FaqBlock faqs={faqs} />
    <LandingCta
      title="Pide una valoración con nuestro equipo"
      text="Te explicamos el diagnóstico, las alternativas y el plan de mantenimiento antes de que decidas."
    />
    <ReferencesBlock references={references} />
  </Layout>
);

export default ImplantologoMalaga;
