
# Plan: Nuevas subpáginas de tratamientos de implantes

## Objetivo
Crear tres páginas especializadas de alto valor SEO bajo la sección de Implantes Dentales, con contenido original, rigor clínico y enlazado interno coherente — sin alterar el diseño actual de la web.

## 1. Nuevas rutas y páginas

Se añaden 3 rutas en `src/App.tsx` y 3 nuevos archivos de página:

| Ruta | Archivo | H1 |
|------|---------|----|
| `/implantes-all-on-4` | `src/pages/ImplantesAllOn4.tsx` | All-on-4™: dientes fijos en un día con 4 implantes |
| `/implantes-cigomaticos` | `src/pages/ImplantesCigomaticos.tsx` | Implantes cigomáticos: solución para maxilares con poco hueso |
| `/mallas-subperiosticas` | `src/pages/MallasSubperiosticas.tsx` | Mallas subperiósticas: alternativa a injertos óseos complejos |

Cada página reutiliza `Layout`, `SEOHead`, `Accordion`, `Button` y los estilos existentes (mismas clases `hero-section`, `section-padding`, `container-wide`, `cta-gold`, etc.) para mantener el diseño 1:1 con `ImplantesDentales.tsx`.

## 2. Estructura de contenido (cada página)

- **Hero** con H1 + intro + 2 CTAs (Solicitar Cita / Llamar 951 178 110).
- **Banner de cifras** (años de experiencia, casos, tasa de éxito) — reutiliza estilos del banner de `ImplantesDentales`.
- **H2: ¿Qué es el tratamiento?** — definición clínica clara.
- **H2: ¿Cuándo está indicado?** — perfiles de paciente, criterios clínicos, contraindicaciones.
- **H2: Ventajas y beneficios** — grid de 4 tarjetas con iconos.
- **H2: Procedimiento paso a paso** — 4–5 fases (diagnóstico 3D, planificación, cirugía, provisional, definitivo).
- **H2: Recuperación y cuidados** — tiempos, dieta, higiene, revisiones.
- **H2: Preguntas frecuentes** — 6–8 FAQ específicas del tratamiento (no genéricas).
- **CTA final** + enlaces internos contextuales.

Contenido redactado de cero, tono profesional-cercano, sin claims de precio, sin "All-on-6", sin inventar profesionales. Densidad de keyword natural; "Málaga" aparece en lugares lógicos (intro, CTA, FAQ local) sin saturar.

### Enlazado interno (en prosa, no bloques de "ver también")
Cada página enlaza de forma natural a:
- `/` (home), `/contacto`, `/implantes-dentales` (página madre)
- `/protesis-dentales`, `/sobre-nosotros`
- Enlaces cruzados entre las 3 nuevas páginas (ej. en cigomáticos → mallas subperiósticas como alternativa)
- 1–2 enlaces a noticias relevantes (`/noticias/injerto-oseo-dental-cuando-necesario-malaga`, `/noticias/implantes-dentales-paso-a-paso-fases-tratamiento-malaga`)

## 3. SEO por página

| Página | Title (≤60c) | Meta description (≤155c) |
|--------|-------------|--------------------------|
| All-on-4 | `All-on-4™ en Málaga: dientes fijos en un día \| Bocaboca` | `Rehabilitación completa con la técnica All-on-4™ en Málaga. Dientes fijos en 24h sobre 4 implantes. Primera consulta gratuita.` |
| Cigomáticos | `Implantes cigomáticos en Málaga \| Sin injerto óseo \| Bocaboca` | `Implantes cigomáticos en Málaga para pacientes con atrofia maxilar severa. Solución avanzada sin injertos. Pide valoración gratuita.` |
| Mallas subperiósticas | `Mallas subperiósticas dentales en Málaga \| Bocaboca` | `Mallas subperiósticas a medida en Málaga: alternativa a injertos óseos complejos para rehabilitar maxilares atróficos. Consulta sin compromiso.` |

### Schema markup (JSON-LD via `SEOHead.structuredData`)
Cada página inyecta dos bloques:
- `MedicalProcedure` (name, procedureType, bodyLocation, description)
- `FAQPage` con sus FAQs propias

### Página madre `ImplantesDentales`
Añadir `BreadcrumbList` schema y enlaces visibles a las 3 nuevas subpáginas dentro de la sección "Soluciones" existente (sin cambiar diseño, solo añadir 3 tarjetas que enlazan).

## 4. Imágenes

Generar 3 imágenes en `src/assets/` con estilo documental clínico realista (sin retratos de dentistas inventados, sin caras reconocibles), tamaño ~1600×1000:

- `implantes-all-on-4-malaga.jpg` — modelo dental sobre 4 implantes / planificación 3D
- `implantes-cigomaticos-malaga.jpg` — TAC 3D de maxilar superior mostrando trayectoria cigomática
- `mallas-subperiosticas-malaga.jpg` — modelo anatómico con malla de titanio impresa a medida

ALT descriptivos y naturales (no keyword-stuffed). Importadas como módulos de Vite (optimización automática).

## 5. Sitemap

Añadir a `public/sitemap.xml` (priority 0.8, changefreq monthly):
- `/implantes-all-on-4`
- `/implantes-cigomaticos`
- `/mallas-subperiosticas`

## 6. Cambios menores en navegación

- **Footer** (`src/components/layout/Footer.tsx`): añadir las 3 nuevas entradas bajo "Tratamientos" (sin tocar diseño).
- **Header**: NO se añade al menú principal para no saturar (se accede desde la página madre y desde el footer). Confirmamos esta decisión en build si quieres que también aparezcan en el menú.

## 7. Optimización SEO global (revisión ligera, sin rediseño)

- Verificar que cada página existente tiene H1 único — auditar y corregir si hay duplicados.
- Revisar `SEOHead` de páginas internas para asegurar titles/descriptions únicos.
- Añadir `BreadcrumbList` schema en las páginas de tratamiento.
- Asegurar `loading="lazy"` en imágenes no-hero.

## Archivos a crear/editar

**Crear:**
- `src/pages/ImplantesAllOn4.tsx`
- `src/pages/ImplantesCigomaticos.tsx`
- `src/pages/MallasSubperiosticas.tsx`
- `src/assets/implantes-all-on-4-malaga.jpg`
- `src/assets/implantes-cigomaticos-malaga.jpg`
- `src/assets/mallas-subperiosticas-malaga.jpg`

**Editar:**
- `src/App.tsx` (3 rutas nuevas)
- `src/pages/ImplantesDentales.tsx` (3 tarjetas con enlaces + breadcrumb schema)
- `src/components/layout/Footer.tsx` (3 entradas en Tratamientos)
- `public/sitemap.xml` (3 URLs)

## Lo que NO se hará
- No se cambia el diseño general ni la paleta.
- No se mencionan precios.
- No se inventan dentistas ni testimonios.
- No se usa "All-on-6".
- No se añaden las nuevas páginas al menú principal del Header (mantenemos el menú compacto actual).

¿Apruebas el plan para que lo implemente?
