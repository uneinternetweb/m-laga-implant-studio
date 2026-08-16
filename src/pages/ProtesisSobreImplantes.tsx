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
import heroImg from '@/assets/protesis-sobre-implantes-malaga.jpg';

const faqs: Faq[] = [
  {
    question: '¿Qué diferencia hay entre prótesis fija, mixta y removible?',
    answer:
      'La prótesis fija va atornillada o cementada sobre implantes y no se quita en casa. La mixta o híbrida combina una estructura rígida con una base de resina que reproduce la encía, y también es fija sobre implantes. La removible (sobredentadura) se sujeta a los implantes mediante anclajes y el paciente la retira para su higiene.',
  },
  {
    question: '¿Cuántos implantes necesito para un puente fijo?',
    answer:
      'Un puente de tres piezas suele apoyarse en dos implantes; una arcada completa fija requiere habitualmente entre 4 y 6, según el hueso disponible y la distribución de las cargas. El número exacto se decide tras el TAC 3D, no antes.',
  },
  {
    question: '¿Es mejor atornillada o cementada?',
    answer:
      'La prótesis atornillada permite retirarla para revisiones y reparaciones, una ventaja importante en el mantenimiento a largo plazo. La cementada puede ofrecer ventajas estéticas en algunas posiciones, pero exige un control muy riguroso de los restos de cemento, asociados a inflamación periimplantaria. Por eso, siempre que la posición del implante lo permite, preferimos la atornillada.',
  },
  {
    question: '¿Cuánto duran las prótesis sobre implantes?',
    answer:
      'La revisión sistemática de Pjetursson y colaboradores sitúa la supervivencia de las prótesis fijas sobre implantes en torno al 95% a los 5 años y al 93% a los 10 años. Ahora bien, las complicaciones técnicas (aflojamiento de tornillos, fracturas de recubrimiento) son relativamente frecuentes y suelen ser reparables sin sustituir el conjunto.',
  },
  {
    question: '¿Se puede pasar de una prótesis removible a una fija sobre implantes?',
    answer:
      'En muchos casos sí, siempre que exista hueso suficiente o pueda regenerarse. Es una de las consultas más habituales en pacientes portadores de dentadura completa desde hace años, y requiere un estudio individualizado del volumen óseo.',
  },
  {
    question: '¿Cómo se limpia una prótesis fija sobre implantes?',
    answer:
      'Con cepillo, cepillos interproximales, seda específica para implantes e irrigador, prestando especial atención a la zona de contacto entre la prótesis y la encía. Además, revisiones profesionales periódicas en las que, si la prótesis es atornillada, puede retirarse para una limpieza completa.',
  },
];

const references: Reference[] = [
  {
    text:
      'Pjetursson BE, Thoma D, Jung R, Zwahlen M, Zembic A. A systematic review of the survival and complication rates of implant-supported fixed dental prostheses (FDPs) after a mean observation period of at least 5 years. Clin Oral Implants Res. 2012;23(Suppl 6):22-38.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Pjetursson+survival+complication+rates+implant-supported+fixed+dental+prostheses+5+years',
  },
  {
    text:
      'Wittneben JG, Millen C, Brägger U. Clinical performance of screw- versus cement-retained fixed implant-supported reconstructions: a systematic review. Int J Oral Maxillofac Implants. 2014;29(Suppl):84-98.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Wittneben+screw+versus+cement+retained+fixed+implant+supported+reconstructions',
  },
  {
    text:
      'Sailer I, Makarov NA, Thoma DS, Zwahlen M, Pjetursson BE. All-ceramic or metal-ceramic tooth-supported fixed dental prostheses (FDPs)? A systematic review. Dent Mater. 2015;31(6):603-623.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Sailer+all-ceramic+or+metal-ceramic+tooth-supported+fixed+dental+prostheses',
  },
];

const ProtesisSobreImplantes = () => (
  <Layout>
    <SEOHead
      title="Prótesis sobre implantes en Málaga y Costa del Sol | Bocaboca"
      description="Prótesis fija, mixta y puentes sobre implantes en Málaga y Costa del Sol: tipos, materiales, duración según la evidencia y cuidados. Valoración personalizada."
      canonical="/protesis-sobre-implantes"
      ogImage={heroImg}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: 'Prótesis sobre implantes',
          procedureType: 'https://schema.org/TherapeuticProcedure',
          bodyLocation: 'Maxilar superior y mandíbula',
          description:
            'Rehabilitación protésica sobre implantes dentales: prótesis fija atornillada, puentes sobre implantes, prótesis híbrida o mixta y sobredentaduras removibles ancladas a implantes.',
          url: 'https://www.implantesdentalesenmalaga.com/protesis-sobre-implantes',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.implantesdentalesenmalaga.com/' },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Prótesis Dentales',
              item: 'https://www.implantesdentalesenmalaga.com/protesis-dentales',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Prótesis sobre implantes',
              item: 'https://www.implantesdentalesenmalaga.com/protesis-sobre-implantes',
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
      eyebrow="Rehabilitación protésica"
      title="Prótesis sobre implantes en Málaga y la Costa del Sol"
      intro="Prótesis fija, puentes sobre implantes, prótesis mixta o híbrida y sobredentaduras. Cada solución responde a una situación clínica distinta: aquí te explicamos cuál encaja en cada caso y qué duración cabe esperar."
      bullets={['Diseño digital', 'Prótesis atornillada siempre que es posible', 'Laboratorio propio de confianza']}
      image={heroImg}
      imageAlt="Puente fijo de zirconio atornillado sobre implantes en un modelo dental de laboratorio"
    />

    <LandingSection eyebrow="Tipos" title="Qué tipo de prótesis sobre implantes puedes necesitar">
      <ul className="list-disc pl-5 space-y-3">
        <li>
          <strong className="text-foreground">Corona unitaria sobre implante.</strong> Sustituye una
          sola pieza sin tallar los dientes vecinos, a diferencia del puente convencional.
        </li>
        <li>
          <strong className="text-foreground">Puente sobre implantes.</strong> Repone dos o más
          piezas contiguas apoyándose en implantes, sin necesidad de dientes pilares naturales.
        </li>
        <li>
          <strong className="text-foreground">Prótesis fija de arcada completa.</strong> Rehabilita
          toda una arcada; en muchos casos mediante el protocolo{' '}
          <Link to="/implantes-all-on-4" className="text-primary font-medium hover:underline">
            All-on-4™
          </Link>
          .
        </li>
        <li>
          <strong className="text-foreground">Prótesis mixta o híbrida.</strong> Estructura rígida
          (titanio o zirconio) con dientes y encía de resina o cerámica. Es fija y resulta muy útil
          cuando además de dientes hay que reponer volumen de encía perdida.
        </li>
        <li>
          <strong className="text-foreground">Sobredentadura removible.</strong> Se sujeta a 2-4
          implantes con anclajes tipo bola, locator o barra. El paciente la retira para limpiarla y
          suele ser la opción más contenida en coste.
        </li>
      </ul>
      <p>
        Si buscas información sobre prótesis convencionales sin implantes, la encontrarás en la
        página de{' '}
        <Link to="/protesis-dentales" className="text-primary font-medium hover:underline">
          prótesis dentales
        </Link>
        , y en el blog comparamos con detalle las{' '}
        <Link
          to="/noticias/protesis-dentales-fijas-o-removibles-cual-elegir-malaga"
          className="text-primary font-medium hover:underline"
        >
          opciones fijas y removibles
        </Link>
        .
      </p>
    </LandingSection>

    <LandingSection eyebrow="Materiales" title="Zirconio, metal-cerámica y metal-resina" muted>
      <p>
        El <strong className="text-foreground">zirconio monolítico</strong> ofrece alta resistencia
        a la fractura y una estabilidad de color excelente; es hoy la opción más utilizada en
        prótesis fija sobre implantes. El{' '}
        <strong className="text-foreground">zirconio estratificado</strong> añade cerámica de
        recubrimiento para ganar naturalidad en el sector estético, a cambio de un riesgo algo mayor
        de descascarillado (chipping). La{' '}
        <strong className="text-foreground">metal-cerámica</strong> mantiene una trayectoria clínica
        muy larga y documentada, y el <strong className="text-foreground">metal-resina</strong>{' '}
        (híbrida) es más ligera y fácil de reparar, aunque se desgasta y pigmenta más con los años.
      </p>
      <p>
        En la revisión de Sailer y colaboradores (2015), las prótesis fijas de cerámica y las de
        metal-cerámica mostraron supervivencias comparables a cinco años, con perfiles de
        complicación distintos. Es decir: no hay un material superior en abstracto, sino un material
        adecuado para cada boca. Profundizamos en la comparativa en{' '}
        <Link
          to="/noticias/protesis-fija-implantes-zirconio-metal-resina-malaga"
          className="text-primary font-medium hover:underline"
        >
          este artículo
        </Link>
        .
      </p>
    </LandingSection>

    <LandingSection eyebrow="Evidencia" title="Duración y complicaciones esperables">
      <p>
        La revisión sistemática de Pjetursson y colaboradores (2012) analizó prótesis fijas
        soportadas por implantes con seguimientos de al menos cinco años y describió supervivencias
        próximas al 95,6% a los 5 años y al 93,1% a los 10 años. En el mismo trabajo se recoge algo
        que conviene decir con claridad: las complicaciones técnicas son frecuentes. Aflojamiento de
        tornillos, fracturas del recubrimiento cerámico o desgaste de los anclajes de una
        sobredentadura son incidencias habituales y, en la mayoría de los casos, reparables.
      </p>
      <p>
        Sobre el sistema de retención, la revisión de Wittneben y colaboradores (2014) encontró
        menos complicaciones biológicas en las prótesis atornilladas que en las cementadas,
        relacionadas en buena parte con los restos de cemento subgingival. Es una de las razones por
        las que priorizamos la retención atornillada cuando la posición del implante lo permite.
      </p>
    </LandingSection>

    <LandingSection eyebrow="Mantenimiento" title="Cómo cuidar tu prótesis para que dure" muted>
      <ul className="list-disc pl-5 space-y-2">
        <li>Higiene diaria con cepillo, interproximales y seda específica para implantes.</li>
        <li>Irrigador bucal como complemento, especialmente en prótesis de arcada completa.</li>
        <li>Revisión profesional periódica con control radiográfico del hueso periimplantario.</li>
        <li>Férula de descarga si existe bruxismo, para proteger la cerámica y los tornillos.</li>
        <li>Consultar cuanto antes ante cualquier movilidad, sangrado o mal olor persistente.</li>
      </ul>
      <p>
        Tienes una guía práctica en el artículo sobre{' '}
        <Link
          to="/noticias/como-limpiar-protesis-fija-completa-implantes-malaga"
          className="text-primary font-medium hover:underline"
        >
          cómo limpiar una prótesis fija completa
        </Link>
        .
      </p>
    </LandingSection>

    <FaqBlock faqs={faqs} />
    <LandingCta
      title="¿Qué prótesis encaja en tu caso?"
      text="Solicita una valoración en cualquiera de nuestras tres clínicas de Málaga y te lo explicamos con el estudio en la mano."
    />
    <ReferencesBlock references={references} />
  </Layout>
);

export default ProtesisSobreImplantes;
