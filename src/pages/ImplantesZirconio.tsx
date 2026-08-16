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
import heroImg from '@/assets/implantes-zirconio-malaga.jpg';

const faqs: Faq[] = [
  {
    question: '¿Es lo mismo un implante de zirconio que una corona de zirconio?',
    answer:
      'No, y es la confusión más habitual. El implante de zirconio es el tornillo cerámico que se integra en el hueso. La corona o prótesis de zirconio es la parte visible que se atornilla o cementa encima, y puede colocarse igualmente sobre un implante de titanio. La mayoría de pacientes que buscan "zirconio" se refieren en realidad a la prótesis.',
  },
  {
    question: '¿Los implantes de zirconio duran tanto como los de titanio?',
    answer:
      'El titanio cuenta con documentación clínica de más de 30 años y supervivencias en torno al 95% a 10 años. Los implantes cerámicos de zirconio muestran resultados favorables a corto y medio plazo (supervivencias en torno al 95-97% a 1-2 años en el metaanálisis de Roehling y colaboradores), pero disponen de menos seguimiento a largo plazo. Es una diferencia de evidencia acumulada, no un juicio sobre el material.',
  },
  {
    question: '¿Para quién puede estar indicado el zirconio?',
    answer:
      'Se plantea sobre todo en pacientes con encía fina y alta exigencia estética en el sector anterior, donde el gris del titanio puede transparentar, y en quienes prefieren una solución sin metal. La indicación se decide caso a caso, valorando el hueso, la posición del diente y la carga masticatoria.',
  },
  {
    question: '¿Puedo tener alergia al titanio?',
    answer:
      'La hipersensibilidad al titanio está descrita, pero es muy poco frecuente. No es un motivo habitual para descartar el titanio y, si se sospecha, debe estudiarse antes de decidir el material.',
  },
  {
    question: '¿La prótesis de zirconio se mancha o se desgasta?',
    answer:
      'El zirconio es muy estable frente a la pigmentación y resistente al desgaste; de hecho, hay que vigilar que no desgaste en exceso al diente antagonista, algo que se controla con un pulido correcto y con el ajuste de la mordida. No cambia de color con el café o el tabaco como puede hacerlo un composite.',
  },
  {
    question: '¿Cuánto cuesta una prótesis de zirconio?',
    answer:
      'Depende del número de piezas, del tipo de conexión y de si se rehabilita una arcada completa o una unidad. El precio se cierra siempre después del estudio diagnóstico y por escrito; no damos cifras cerradas sin haber valorado el caso.',
  },
];

const references: Reference[] = [
  {
    text:
      'Roehling S, Schlegel KA, Woelfler H, Gahlert M. Performance and outcome of zirconia dental implants in clinical studies: A meta-analysis. Clin Oral Implants Res. 2018;29(Suppl 16):135-153.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Roehling+zirconia+dental+implants+clinical+studies+meta-analysis',
  },
  {
    text:
      'Cionca N, Hashim D, Mombelli A. Zirconia dental implants: where are we now, and where are we heading? Periodontol 2000. 2017;73(1):241-258.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Cionca+zirconia+dental+implants+where+are+we+now',
  },
  {
    text:
      'Sailer I, Makarov NA, Thoma DS, Zwahlen M, Pjetursson BE. All-ceramic or metal-ceramic tooth-supported fixed dental prostheses (FDPs)? A systematic review of the survival and complication rates. Dent Mater. 2015;31(6):603-623.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Sailer+all-ceramic+or+metal-ceramic+tooth-supported+fixed+dental+prostheses',
  },
];

const ImplantesZirconio = () => (
  <Layout>
    <SEOHead
      title="Implantes de zirconio en Málaga y Costa del Sol | Bocaboca"
      description="Implantes y prótesis de zirconio en Málaga y Costa del Sol: diferencias reales con el titanio, indicaciones estéticas y qué dice la evidencia científica actual."
      canonical="/implantes-zirconio"
      ogImage={heroImg}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: 'Implantes y prótesis de zirconio',
          procedureType: 'https://schema.org/SurgicalProcedure',
          bodyLocation: 'Maxilar superior y mandíbula',
          description:
            'Implantes dentales cerámicos de óxido de circonio y prótesis de zirconio sobre implantes, indicados principalmente en casos con alta exigencia estética o preferencia por soluciones sin metal.',
          url: 'https://www.implantesdentalesenmalaga.com/implantes-zirconio',
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
              name: 'Zirconio',
              item: 'https://www.implantesdentalesenmalaga.com/implantes-zirconio',
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
      eyebrow="Soluciones cerámicas"
      title="Implantes de zirconio en Málaga y la Costa del Sol"
      intro="Zirconio y titanio no compiten: resuelven necesidades distintas. Te explicamos qué es cada cosa, cuándo el zirconio aporta una ventaja real y qué respaldo científico tiene hoy."
      bullets={['Sin metal visible', 'Alta estabilidad del color', 'Indicación valorada caso a caso']}
      image={heroImg}
      imageAlt="Ilustración médica comparativa de un implante dental de zirconio y uno de titanio integrados en el hueso"
    />

    <LandingSection eyebrow="Conceptos" title="Implante de zirconio y prótesis de zirconio no son lo mismo">
      <p>
        El óxido de circonio (ZrO₂) es una cerámica de alta resistencia de color blanco. En
        implantología aparece en dos lugares muy distintos y conviene separarlos:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong className="text-foreground">Implante cerámico de zirconio:</strong> el tornillo
          que sustituye a la raíz y se integra en el hueso. Es una alternativa al titanio.
        </li>
        <li>
          <strong className="text-foreground">Prótesis o corona de zirconio:</strong> la parte
          visible, que puede ir sobre un implante de titanio o de zirconio. Es la opción más
          extendida y la que la mayoría de pacientes tiene en mente al buscar «zirconio».
        </li>
      </ul>
      <p>
        En nuestra{' '}
        <Link to="/protesis-sobre-implantes" className="text-primary font-medium hover:underline">
          página de prótesis sobre implantes
        </Link>{' '}
        detallamos las diferencias entre zirconio monolítico, zirconio estratificado y las
        prótesis híbridas de metal-resina, y en esta{' '}
        <Link
          to="/noticias/protesis-fija-implantes-zirconio-metal-resina-malaga"
          className="text-primary font-medium hover:underline"
        >
          comparativa publicada en el blog
        </Link>{' '}
        analizamos el comportamiento de cada material en arcada completa.
      </p>
    </LandingSection>

    <LandingSection eyebrow="Evidencia" title="Zirconio frente a titanio: lo que sabemos y lo que aún no" muted>
      <p>
        El titanio es el material de referencia en implantología: décadas de estudios y
        supervivencias en torno al 95% a diez años. Los implantes cerámicos son más recientes y su
        evidencia todavía se está construyendo. El metaanálisis de Roehling y colaboradores (2018)
        recogió supervivencias en torno al 95-97% en seguimientos de uno y dos años, resultados
        prometedores pero con un horizonte temporal mucho más corto que el del titanio.
      </p>
      <p>
        Los puntos a favor documentados del zirconio son su color blanco (relevante cuando la encía
        es fina y puede transparentar el gris del titanio), su biocompatibilidad y una menor
        adhesión bacteriana descrita en algunos trabajos in vitro. Como contrapartida, la revisión
        de Cionca, Hashim y Mombelli (2017) recuerda que el zirconio es más rígido y menos tolerante
        a los defectos de superficie, con menos flexibilidad en la conexión protésica y sin la
        variedad de componentes que ofrece el titanio.
      </p>
      <p className="text-foreground font-medium">
        Nuestra postura: recomendamos zirconio cuando aporta una ventaja objetiva en el caso, y
        titanio cuando lo que necesita el paciente es el respaldo de la evidencia más consolidada.
      </p>
    </LandingSection>

    <LandingSection eyebrow="Indicaciones" title="Cuándo tiene sentido plantear zirconio">
      <ul className="list-disc pl-5 space-y-2">
        <li>Ausencias en el sector anterior con encía fina y sonrisa que expone el margen gingival.</li>
        <li>Pacientes que prefieren expresamente una rehabilitación sin metal.</li>
        <li>Prótesis fijas sobre implantes donde se busca estabilidad de color a largo plazo.</li>
        <li>
          Casos con antecedentes de hipersensibilidad a metales debidamente documentados, situación
          poco frecuente pero real.
        </li>
      </ul>
      <p>
        No es la primera opción en todos los escenarios: en atrofias severas tratadas con{' '}
        <Link to="/implantes-cigomaticos" className="text-primary font-medium hover:underline">
          implantes cigomáticos
        </Link>{' '}
        o en rehabilitaciones tipo{' '}
        <Link to="/implantes-all-on-4" className="text-primary font-medium hover:underline">
          All-on-4™
        </Link>
        , la elección del material se subordina al diseño mecánico del caso.
      </p>
    </LandingSection>

    <FaqBlock faqs={faqs} />
    <LandingCta
      title="¿Zirconio o titanio en tu caso?"
      text="Tras el estudio 3D te explicamos qué material está indicado y por qué, sin recomendaciones genéricas."
    />
    <ReferencesBlock references={references} />
  </Layout>
);

export default ImplantesZirconio;
