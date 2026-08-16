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
import heroImg from '@/assets/implantes-sin-dolor-malaga.jpg';

const faqs: Faq[] = [
  {
    question: '¿Se siente dolor durante la colocación de un implante?',
    answer:
      'Durante la cirugía no debe sentirse dolor: la zona se anestesia por completo con anestesia local. Sí es normal notar presión, vibración o el ruido del instrumental, sensaciones que no son dolorosas pero que conviene anticipar para que no sorprendan.',
  },
  {
    question: '¿Y después, cuando pasa la anestesia?',
    answer:
      'Los estudios que han medido el dolor postoperatorio tras la colocación de implantes describen molestias de intensidad leve a moderada, con un pico en las primeras 24 horas y una disminución progresiva a partir del segundo o tercer día. La mayoría de pacientes lo controla con la analgesia pautada.',
  },
  {
    question: '¿Qué opciones hay si tengo mucho miedo al dentista?',
    answer:
      'Además de la anestesia local, valoramos sedación consciente en casos seleccionados y con evaluación médica previa, cirugías más cortas, planificación guiada por TAC (que reduce el tiempo quirúrgico) y acompañamiento durante todo el proceso. La ansiedad dental es frecuente y se aborda, no se ignora.',
  },
  {
    question: '¿La cirugía guiada duele menos?',
    answer:
      'La cirugía guiada por férula, planificada sobre el TAC 3D, permite en muchos casos intervenciones más precisas y con menor manipulación de los tejidos, lo que suele traducirse en menos inflamación y un postoperatorio más cómodo. No es aplicable a todos los casos y su indicación depende del hueso disponible.',
  },
  {
    question: '¿Cuánto dura la inflamación?',
    answer:
      'La inflamación suele alcanzar su máximo entre las 48 y 72 horas y remite en unos días. El frío local las primeras horas, evitar esfuerzos físicos y seguir la pauta de medicación son las medidas que más ayudan.',
  },
  {
    question: '¿Puedo tomar antiinflamatorios por mi cuenta?',
    answer:
      'No conviene. La pauta analgésica se ajusta a cada paciente y a su historial médico. Sigue siempre las indicaciones que te entregamos por escrito tras la cirugía y consúltanos si el dolor aumenta pasadas 72 horas, porque puede indicar una complicación que hay que revisar.',
  },
];

const references: Reference[] = [
  {
    text:
      'Al-Khabbaz AK, Griffin TJ, Al-Shammari KF. Assessment of pain associated with the surgical placement of dental implants. J Periodontol. 2007;78(2):239-246.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Al-Khabbaz+assessment+of+pain+surgical+placement+dental+implants',
  },
  {
    text:
      'González-Santana H, Peñarrocha-Diago M, Guarinos-Carbó J, Balaguer-Martínez J. Pain and inflammation in 41 patients following the placement of 131 dental implants. Med Oral Patol Oral Cir Bucal. 2005;10(3):258-263.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=pain+and+inflammation+41+patients+placement+131+dental+implants',
  },
  {
    text:
      'Armfield JM, Heaton LJ. Management of fear and anxiety in the dental clinic: a review. Aust Dent J. 2013;58(4):390-407.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Armfield+Heaton+management+of+fear+and+anxiety+in+the+dental+clinic',
  },
];

const ImplantesSinDolor = () => (
  <Layout>
    <SEOHead
      title="Implantes sin dolor en Málaga y Costa del Sol | Bocaboca"
      description="Implantes dentales sin dolor en Málaga y Costa del Sol: anestesia local, cirugía guiada y control del postoperatorio. Qué se siente realmente y qué dicen los estudios."
      canonical="/implantes-sin-dolor"
      ogImage={heroImg}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          name: 'Implantes dentales sin dolor en Málaga y Costa del Sol',
          about: 'Control del dolor y la ansiedad en cirugía de implantes dentales',
          url: 'https://www.implantesdentalesenmalaga.com/implantes-sin-dolor',
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
              name: 'Implantes Dentales',
              item: 'https://www.implantesdentalesenmalaga.com/implantes-dentales',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Implantes sin dolor',
              item: 'https://www.implantesdentalesenmalaga.com/implantes-sin-dolor',
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
      eyebrow="Control del dolor y la ansiedad"
      title="Implantes sin dolor en Málaga y la Costa del Sol: qué se siente de verdad"
      intro="El miedo al dolor es el principal motivo por el que se retrasa un tratamiento de implantes. Te explicamos con datos qué se siente durante la cirugía, cómo es el postoperatorio real y qué hacemos para que sea lo más llevadero posible."
      bullets={['Anestesia local completa', 'Cirugía guiada por TAC', 'Pauta analgésica por escrito']}
      image={heroImg}
      imageAlt="Quirófano dental preparado para una cirugía de implantes con instrumental estéril y anestesia local"
    />

    <LandingSection eyebrow="Durante la cirugía" title="Qué ocurre mientras se coloca el implante">
      <p>
        La colocación de un implante se realiza bajo anestesia local, la misma familia de fármacos
        que se emplea para un empaste o una extracción, con la diferencia de que la infiltración se
        planifica para cubrir toda la zona quirúrgica durante el tiempo necesario. Con la anestesia
        en efecto, el paciente no percibe dolor; lo que sí percibe es presión y vibración, porque
        el hueso se trabaja con fresas a baja velocidad.
      </p>
      <p>
        Una cirugía de un implante unitario suele durar entre 30 y 60 minutos. La planificación
        previa sobre TAC 3D y, cuando está indicada, la cirugía guiada por férula, permiten acortar
        el tiempo en boca y reducir la manipulación de los tejidos, dos factores directamente
        relacionados con la inflamación posterior. Puedes ver el detalle completo del procedimiento
        en la{' '}
        <Link to="/implantes-dentales" className="text-primary font-medium hover:underline">
          página de implantes dentales
        </Link>
        .
      </p>
      <p className="text-foreground font-medium">
        Sinceridad ante todo: «sin dolor» describe la cirugía, no el postoperatorio. Ninguna técnica
        elimina por completo las molestias de los días siguientes; lo que sí se puede es
        controlarlas bien.
      </p>
    </LandingSection>

    <LandingSection eyebrow="Después" title="El postoperatorio, según los estudios" muted>
      <p>
        Los trabajos que han medido el dolor tras la colocación de implantes con escalas validadas
        coinciden en un patrón claro: molestias de intensidad leve a moderada, con el pico en las
        primeras 24 horas y descenso progresivo desde el segundo o tercer día. En la serie de
        Al-Khabbaz y colaboradores (2007), la mayoría de los pacientes describió el dolor como leve,
        y la intensidad se relacionó sobre todo con la duración de la cirugía y el número de
        implantes colocados, no con la edad ni con el sexo.
      </p>
      <p>Medidas que sí marcan diferencia en esos primeros días:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Frío local intermitente durante las primeras 24 horas.</li>
        <li>Tomar la analgesia pautada de forma preventiva, sin esperar a que aparezca el dolor.</li>
        <li>Dieta blanda y fría los primeros días, evitando masticar sobre la zona.</li>
        <li>Evitar tabaco y alcohol: el tabaco altera la cicatrización y aumenta el riesgo de fracaso.</li>
        <li>No hacer esfuerzo físico intenso ni exposición prolongada al sol las primeras 48 horas.</li>
        <li>Dormir con la cabeza ligeramente elevada.</li>
      </ul>
      <p>
        Un dolor que aumenta a partir del tercer día, en lugar de disminuir, no es lo esperable y
        debe revisarse.
      </p>
    </LandingSection>

    <LandingSection eyebrow="Miedo al dentista" title="Si la ansiedad es el problema, también se trata">
      <p>
        La ansiedad dental es un fenómeno bien documentado y afecta a una proporción relevante de
        la población adulta, con formas severas que llevan a evitar el tratamiento durante años. La
        literatura sobre su manejo (Armfield y Heaton, 2013) recoge estrategias eficaces que
        aplicamos en consulta: información clara y previa de cada paso, señales acordadas para
        detener la intervención, control del tiempo quirúrgico y, en casos seleccionados y con
        valoración médica previa, sedación consciente.
      </p>
      <p>
        Si has aplazado el tratamiento por miedo, dilo abiertamente en la primera visita: cambia por
        completo la forma en que planificamos la cirugía. Atendemos tanto a pacientes de Málaga
        capital como a quienes vienen desde la{' '}
        <Link to="/implantes-dentales-costa-del-sol" className="text-primary font-medium hover:underline">
          Costa del Sol
        </Link>
        .
      </p>
    </LandingSection>

    <FaqBlock faqs={faqs} />
    <LandingCta
      title="Resolvemos tus dudas antes de decidir"
      text="Una valoración inicial sirve para saber qué necesitas y cómo se controlará el dolor en tu caso."
    />
    <ReferencesBlock references={references} />
  </Layout>
);

export default ImplantesSinDolor;
