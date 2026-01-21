import clinicaRecepcion from '@/assets/clinica-recepcion.png';
import clinicaGabinete from '@/assets/clinica-gabinete.png';
import clinicaSillon from '@/assets/clinica-sillon.png';
import clinicaAyala from '@/assets/clinica-ayala.png';
import newsImplantMaintenance from '@/assets/news-implant-maintenance.jpg';

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  dateFormatted: string;
  image: string;
  author: string;
  readTime: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'importancia-mantenimiento-implantes-dentales-malaga',
    title: 'La Importancia del Mantenimiento de los Implantes Dentales en Málaga',
    excerpt: 'Descubre por qué el mantenimiento profesional de tus implantes dentales es fundamental para garantizar su durabilidad y éxito a largo plazo. Consejos de expertos en implantología de Málaga.',
    content: `
## Por Qué el Mantenimiento de Implantes Dentales es Crucial

Los implantes dentales son una de las mejores inversiones que puedes hacer para tu salud bucodental. Sin embargo, como cualquier tratamiento dental, requieren un **mantenimiento adecuado** para garantizar su éxito a largo plazo. En Clínicas Bocaboca, especialistas en implantes dentales en Málaga, te explicamos todo lo que necesitas saber.

## ¿Pueden Fallar los Implantes Dentales?

Aunque los implantes dentales tienen una tasa de éxito superior al 95%, la falta de mantenimiento puede provocar problemas como:

- **Periimplantitis**: Infección de los tejidos alrededor del implante
- **Pérdida ósea**: Reabsorción del hueso que sostiene el implante
- **Aflojamiento**: El implante puede perder estabilidad
- **Fractura de la corona**: Desgaste excesivo de la prótesis

## Rutina de Mantenimiento Diario

### Higiene en Casa

Para mantener tus implantes dentales en perfecto estado, sigue estas recomendaciones:

1. **Cepillado tres veces al día**: Utiliza un cepillo de cerdas suaves
2. **Hilo dental o irrigador**: Limpia los espacios interdentales
3. **Cepillos interproximales**: Ideales para limpiar alrededor del implante
4. **Enjuague bucal**: Sin alcohol, para no irritar los tejidos

### Productos Recomendados

- Pasta dentífrica poco abrasiva
- Cepillo eléctrico con cabezal suave
- Irrigador bucal para eliminar restos de comida
- Hilo dental especial para implantes (Super Floss)

## Revisiones Profesionales: Clave del Éxito

### ¿Cada Cuánto Tiempo Debo Ir al Dentista?

En Clínicas Bocaboca recomendamos **revisiones cada 6 meses** para pacientes con implantes dentales. Durante estas visitas:

- Evaluamos el estado de los tejidos periimplantarios
- Realizamos radiografías de control
- Limpieza profesional con instrumental específico
- Comprobamos la oclusión y ajuste de la prótesis
- Detectamos posibles problemas de forma temprana

### Limpieza Profesional de Implantes

La limpieza profesional de implantes es diferente a la limpieza dental convencional. Utilizamos:

- **Curetas de titanio**: Para no rayar la superficie del implante
- **Ultrasonidos específicos**: Con puntas de plástico o PEEK
- **Air-Flow**: Pulido con partículas de glicina

## Señales de Alarma: Cuándo Acudir al Especialista

Contacta con tu implantólogo en Málaga si experimentas:

- Sangrado al cepillarte alrededor del implante
- Enrojecimiento o inflamación de las encías
- Movilidad del implante o la corona
- Dolor o molestias persistentes
- Mal aliento que no desaparece con el cepillado

## Factores que Afectan la Durabilidad del Implante

### Hábitos que Debes Evitar

- **Tabaquismo**: Multiplica por 3 el riesgo de periimplantitis
- **Bruxismo no tratado**: Puede fracturar la corona
- **Morderse las uñas o bolígrafos**: Daña la prótesis
- **Alimentos muy duros**: Nueces enteras, hielo

### Enfermedades que Requieren Atención Especial

- Diabetes no controlada
- Osteoporosis
- Enfermedades autoinmunes
- Tratamientos de quimioterapia o radioterapia

## Más de 13.000 Casos de Éxito en Málaga

En Clínicas Bocaboca, con más de 20 años de experiencia en implantología dental en Málaga, hemos tratado más de 13.000 casos con éxito. El Dr. Alfonso Moreno y su equipo están comprometidos con el seguimiento a largo plazo de todos nuestros pacientes.

## Programa de Mantenimiento en Clínicas Bocaboca

Ofrecemos un programa de mantenimiento personalizado que incluye:

- Revisiones semestrales programadas
- Limpiezas profesionales con protocolo específico para implantes
- Radiografías digitales de control
- Asesoramiento personalizado de higiene
- Precio especial para pacientes de la clínica

## Tu Primera Consulta Gratuita

Si tienes implantes dentales y quieres asegurar su durabilidad, o si estás considerando ponerte implantes en Málaga, te invitamos a una **consulta gratuita** en nuestras clínicas del centro de Málaga. Evaluaremos tu caso y te daremos las recomendaciones personalizadas que necesitas.

**Llámanos al 951 178 110** o escríbenos por WhatsApp al 679 49 02 16 para pedir tu cita.
    `,
    date: '2025-01-21',
    dateFormatted: '21 Enero 2025',
    image: newsImplantMaintenance,
    author: 'Dr. Alfonso Moreno',
    readTime: '7 min',
  },
  {
    slug: 'avances-implantes-dentales-2024',
    title: 'Los Últimos Avances en Implantes Dentales: Tecnología 3D y Cirugía Guiada',
    excerpt: 'La implantología dental ha experimentado una revolución con la llegada de la tecnología 3D y la cirugía guiada por ordenador, permitiendo tratamientos más precisos y seguros.',
    content: `
## La Revolución de la Implantología Digital

La tecnología ha transformado radicalmente la forma en que realizamos los tratamientos de implantes dentales. En Clínicas Bocaboca, hemos incorporado las últimas innovaciones para ofrecer a nuestros pacientes en Málaga los tratamientos más avanzados y seguros.

## Tecnología TAC 3D: Diagnóstico de Precisión

El TAC dental 3D nos permite obtener imágenes tridimensionales de alta resolución del maxilar y la mandíbula. Esta tecnología nos ofrece:

- **Visualización completa** de la anatomía ósea
- **Medición exacta** del hueso disponible
- **Identificación** de estructuras nerviosas y senos maxilares
- **Planificación virtual** del tratamiento antes de la cirugía

## Cirugía Guiada por Ordenador

La cirugía guiada representa uno de los mayores avances en implantología. Consiste en fabricar una guía quirúrgica personalizada que nos permite colocar los implantes exactamente donde se ha planificado virtualmente.

### Ventajas de la Cirugía Guiada

1. **Mayor precisión**: Colocación exacta del implante
2. **Menos invasiva**: Incisiones más pequeñas
3. **Recuperación más rápida**: Menos inflamación y dolor
4. **Resultados predecibles**: Planificación previa detallada
5. **Menor tiempo en el sillón**: Procedimientos más eficientes

## Implantes de Carga Inmediata

Gracias a estos avances tecnológicos, ahora es posible colocar implantes y dientes provisionales en una sola sesión. Los pacientes pueden salir de la clínica con dientes fijos el mismo día de la cirugía.

### ¿Quién es Candidato?

- Pacientes con buena calidad ósea
- Casos planificados con tecnología 3D
- Siguiendo protocolos estrictos de seguridad

## Materiales de Última Generación

Los implantes actuales están fabricados con titanio de grado médico de la más alta calidad, con superficies tratadas que favorecen la osteointegración.

### Características de los Implantes Modernos

- Superficies bioactivas que aceleran la cicatrización
- Diseños optimizados para mayor estabilidad primaria
- Conexiones internas precisas que evitan micromovimientos
- Garantía de por vida del fabricante

## Nuestra Experiencia en Málaga

En Clínicas Bocaboca llevamos más de 20 años aplicando estas tecnologías. El Dr. Alfonso Moreno y su equipo están constantemente formándose en las últimas técnicas para ofrecer los mejores resultados a nuestros pacientes.

## Consulta Gratuita

Si estás considerando implantes dentales, te invitamos a una primera consulta gratuita donde realizaremos un estudio completo con tecnología 3D y te explicaremos todas las opciones de tratamiento.
    `,
    date: '2024-01-20',
    dateFormatted: '20 Enero 2024',
    image: clinicaGabinete,
    author: 'Dr. Alfonso Moreno',
    readTime: '8 min',
  },
  {
    slug: 'all-on-4-solucion-pacientes-sin-dientes',
    title: 'All-on-4: La Solución Definitiva para Pacientes sin Dientes',
    excerpt: 'La técnica All-on-4 permite rehabilitar una arcada completa con solo 4 implantes, ofreciendo dientes fijos en el día para pacientes con pérdida dental total.',
    content: `
## ¿Qué es la Técnica All-on-4?

All-on-4 es una técnica revolucionaria de implantología que permite rehabilitar una arcada dental completa (todos los dientes superiores o inferiores) utilizando únicamente 4 implantes estratégicamente colocados.

## El Concepto Innovador

Desarrollada por el Dr. Paulo Maló en Portugal, esta técnica aprovecha al máximo el hueso disponible colocando dos implantes anteriores rectos y dos implantes posteriores angulados a 45°.

### Ventajas Clave

- **Menos implantes**: Solo 4 en lugar de 6-8
- **Sin injertos óseos**: Aprovecha el hueso existente
- **Dientes en el día**: Prótesis provisional inmediata
- **Menor coste**: Más asequible que tratamientos convencionales
- **Recuperación más rápida**: Menos invasivo

## ¿Quién es Candidato?

Esta técnica está especialmente indicada para:

- Pacientes edéntulos (sin dientes)
- Pacientes con dentadura postiza que buscan una solución fija
- Personas con pérdida ósea moderada
- Pacientes que desean evitar injertos de hueso

## El Proceso Paso a Paso

### 1. Diagnóstico Digital
Realizamos un TAC 3D completo para planificar virtualmente la posición exacta de cada implante.

### 2. Planificación del Tratamiento
El Dr. Alfonso Moreno diseña la prótesis provisional y definitiva, asegurando un resultado estético y funcional óptimo.

### 3. Cirugía
En una sola intervención bajo sedación, se colocan los 4 implantes y se atornilla la prótesis provisional.

### 4. Prótesis Definitiva
Tras 4-6 meses de osteointegración, se coloca la prótesis definitiva de alta estética.

## Resultados que Cambian Vidas

Los pacientes que reciben All-on-4 experimentan una transformación completa:

- Recuperan la capacidad de masticar con normalidad
- Mejoran su estética facial
- Ganan confianza y autoestima
- Eliminan las molestias de las dentaduras removibles

## Experiencia Bocaboca

En nuestras clínicas de Málaga hemos realizado cientos de tratamientos All-on-4 con una tasa de éxito superior al 98%. Nuestro equipo está especialmente formado en esta técnica avanzada.

## Financiación a Tu Medida

Sabemos que es una inversión importante. Por eso ofrecemos financiación hasta 60 meses para que puedas acceder al tratamiento de forma cómoda.

## Primera Consulta Sin Compromiso

¿Cansado de la dentadura postiza? Ven a conocernos. Te explicaremos si eres candidato a All-on-4 y resolveremos todas tus dudas.
    `,
    date: '2024-01-15',
    dateFormatted: '15 Enero 2024',
    image: clinicaSillon,
    author: 'Dr. Alfonso Moreno',
    readTime: '7 min',
  },
  {
    slug: 'cuidado-implantes-dentales-guia-completa',
    title: 'Cómo Cuidar tus Implantes Dentales: Guía Completa de Mantenimiento',
    excerpt: 'Los implantes dentales pueden durar toda la vida si se cuidan correctamente. Descubre las claves para mantener tus implantes en perfecto estado.',
    content: `
## La Importancia del Mantenimiento

Los implantes dentales representan una inversión importante en tu salud y calidad de vida. Con los cuidados adecuados, pueden durar décadas e incluso toda la vida.

## Higiene Diaria: La Base del Éxito

### Cepillado Correcto
- Cepilla tus implantes al menos 3 veces al día
- Usa un cepillo de cerdas suaves o eléctrico
- Dedica especial atención a la zona donde el implante contacta con la encía
- Utiliza pasta dentífrica no abrasiva

### Limpieza Interdental
Los espacios entre implantes y dientes naturales requieren atención especial:

- **Cepillos interdentales**: Ideales para limpiar entre implantes
- **Seda dental específica**: Existen sedas diseñadas para implantes
- **Irrigador bucal**: Complemento excelente para eliminar restos

### Enjuague Bucal
- Usa un colutorio sin alcohol
- Realiza enjuagues después del cepillado
- El colutorio con clorhexidina solo bajo prescripción

## Señales de Alarma

Acude a tu dentista si notas:

- Sangrado de las encías alrededor del implante
- Inflamación o enrojecimiento
- Dolor o molestias al masticar
- Movilidad del implante o la corona
- Mal aliento persistente

## Periimplantitis: El Enemigo a Evitar

La periimplantitis es una infección que afecta a los tejidos alrededor del implante. Es la principal causa de fracaso a largo plazo.

### Factores de Riesgo
- Mala higiene oral
- Tabaquismo
- Diabetes no controlada
- Historial de enfermedad periodontal
- No acudir a revisiones

### Prevención
- Higiene meticulosa diaria
- Revisiones cada 6 meses
- Limpiezas profesionales regulares
- Dejar de fumar

## Revisiones en Clínicas Bocaboca

Nuestro protocolo de mantenimiento incluye:

### Revisión Semestral
- Exploración clínica del implante
- Sondaje periodontal
- Evaluación de la higiene
- Limpieza profesional

### Revisión Anual
- Todo lo anterior más:
- Radiografía de control
- Evaluación del nivel óseo
- Ajuste de la oclusión si es necesario

## Hábitos que Debes Evitar

Para proteger tus implantes:

- **No fumar**: El tabaco multiplica el riesgo de periimplantitis
- **No morder objetos duros**: Hielo, bolígrafos, uñas...
- **Evitar rechinar los dientes**: Usa férula de descarga si tienes bruxismo
- **No usar los dientes como herramientas**: Para abrir envases, etc.

## Alimentación y Estilo de Vida

Una dieta equilibrada favorece la salud de tus implantes:

- Consume alimentos ricos en vitamina C y D
- Mantén niveles adecuados de calcio
- Evita el exceso de azúcar
- Modera el consumo de alcohol

## Conclusión

Cuidar tus implantes es sencillo si mantienes buenos hábitos de higiene y acudes a las revisiones periódicas. En Clínicas Bocaboca te acompañamos durante toda la vida de tus implantes.

## Programa de Mantenimiento

Únete a nuestro programa de mantenimiento de implantes y benefíciate de revisiones periódicas a precio especial. Pregunta en tu próxima visita.
    `,
    date: '2024-01-10',
    dateFormatted: '10 Enero 2024',
    image: clinicaRecepcion,
    author: 'Equipo Bocaboca',
    readTime: '9 min',
  },
  {
    slug: 'implantes-dentales-vs-dentadura-postiza',
    title: 'Implantes Dentales vs Dentadura Postiza: ¿Cuál es la Mejor Opción?',
    excerpt: 'Comparamos las ventajas e inconvenientes de los implantes dentales frente a las dentaduras postizas tradicionales para ayudarte a tomar la mejor decisión.',
    content: `
## El Dilema de Muchos Pacientes

Cuando se pierden todos o la mayoría de los dientes, surge una pregunta fundamental: ¿Implantes dentales o dentadura postiza? En este artículo analizamos ambas opciones para ayudarte a decidir.

## Dentadura Postiza Tradicional

### Ventajas
- **Coste inicial menor**: Más económica a corto plazo
- **Tratamiento no quirúrgico**: No requiere cirugía
- **Rapidez**: Se puede fabricar en pocas semanas
- **Reversible**: Puede retirarse en cualquier momento

### Inconvenientes
- **Inestabilidad**: Se mueve al comer y hablar
- **Pérdida ósea progresiva**: El hueso se reabsorbe sin estímulo
- **Molestias**: Roces, llagas, dolor
- **Limitaciones alimentarias**: Dificultad con alimentos duros
- **Necesita adhesivo**: Para mejorar la sujeción
- **Hay que retirarla para dormir**
- **Requiere reajustes**: Se desadapta con el tiempo

## Implantes Dentales

### Ventajas
- **Fijación permanente**: No se mueven
- **Preservan el hueso**: Estimulan el maxilar
- **Como dientes naturales**: Misma función y estética
- **Sin limitaciones alimentarias**: Come lo que quieras
- **Durabilidad**: Pueden durar toda la vida
- **Comodidad**: No hay que quitarlos
- **Mejoran la calidad de vida**: Mayor confianza y bienestar

### Inconvenientes
- **Inversión inicial mayor**: Aunque se amortiza a largo plazo
- **Requiere cirugía**: Aunque es mínimamente invasiva
- **Proceso más largo**: Varios meses hasta el resultado final
- **Necesitan buen estado de salud**: Algunas contraindicaciones

## Comparativa Práctica

| Aspecto | Dentadura | Implantes |
|---------|-----------|-----------|
| Masticación | 30-40% | 95-100% |
| Estética | Buena | Excelente |
| Confort | Limitado | Total |
| Durabilidad | 5-7 años | Toda la vida |
| Mantenimiento | Alto | Normal |
| Coste a 20 años | Similar | Similar |

## La Perspectiva Económica

Aunque los implantes tienen un coste inicial mayor, a largo plazo la diferencia se reduce considerablemente:

- Las dentaduras necesitan renovarse cada 5-7 años
- Requieren adhesivos, productos de limpieza especiales
- Los reajustes tienen coste
- Los implantes bien mantenidos duran décadas

## ¿Qué Dicen Nuestros Pacientes?

La gran mayoría de pacientes que han pasado de dentadura postiza a implantes coinciden: "Ojalá lo hubiera hecho antes". La mejora en calidad de vida es inmensa.

## Soluciones Intermedias

Existen opciones que combinan ambos sistemas:

### Sobredentadura sobre Implantes
- 2-4 implantes que sujetan la dentadura
- Mayor estabilidad que la dentadura convencional
- Coste intermedio
- Se puede retirar para limpiar

## Nuestra Recomendación

En Clínicas Bocaboca siempre recomendamos los implantes como primera opción cuando es posible. Los beneficios para la salud oral y la calidad de vida son incomparables.

Sin embargo, entendemos que cada caso es único. Por eso realizamos un estudio completo y te explicamos todas las opciones para que tomes una decisión informada.

## Consulta Sin Compromiso

¿Tienes dudas sobre qué opción es mejor para ti? Solicita una consulta gratuita. Estudiaremos tu caso y te presentaremos todas las alternativas con sus pros y contras.
    `,
    date: '2024-01-05',
    dateFormatted: '5 Enero 2024',
    image: clinicaAyala,
    author: 'Dr. Alfonso Moreno',
    readTime: '8 min',
  },
];
