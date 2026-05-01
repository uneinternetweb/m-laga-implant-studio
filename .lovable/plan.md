## Análisis de noticias existentes

Las 8 noticias actuales cubren:

1. Periimplantitis (síntomas y prevención)
2. Duración de los implantes
3. Prótesis fijas vs removibles
4. Mantenimiento de implantes
5. Avances tecnológicos (3D y cirugía guiada)
6. All-on-4
7. Guía completa de cuidados
8. Implantes vs dentadura postiza

**Huecos detectados** sin solapamiento, con búsqueda real en Málaga y rigor clínico:

- Nada sobre **regeneración / injerto óseo** (búsqueda muy frecuente: pacientes con poco hueso).
- Nada sobre **proceso completo paso a paso** desde la primera consulta hasta la corona definitiva (informacional puro, alta intención).
- Nada sobre **diabetes / tabaco y otros factores médicos** que condicionan el éxito.
- Nada sobre **carga inmediata real** (qué es y cuándo se puede).

## Propuesta: 2 nuevos artículos

### Artículo 1: Injerto óseo dental: cuándo se necesita antes de un implante

- **Slug:** `injerto-oseo-dental-cuando-necesario-malaga`
- **Por qué:** Tema clínico serio y muy buscado. Resuelve la duda real de pacientes a los que les han dicho "no tienes hueso suficiente". Sin precios, sin promesas comerciales.
- **Keywords:** injerto óseo dental Málaga, regeneración ósea implantes, no tengo hueso para implante, elevación de seno maxilar Málaga.
- **Estructura (~1.100 palabras):**
  - Introducción: por qué a veces no se puede colocar el implante directamente.
  - Por qué se pierde hueso (extracciones antiguas, periodontitis, prótesis removible mal ajustada, traumatismos).
  - Cuándo es necesario un injerto (criterios clínicos reales: volumen, altura, calidad ósea).
  - Tipos de regeneración ósea: ROG, elevación de seno maxilar (lateral y atraumática), injertos en bloque. Explicados en lenguaje claro.
  - Materiales utilizados (autólogo, heterólogo, sintético) con base científica, sin marcas comerciales.
  - Tiempos reales de cicatrización (3–9 meses según técnica) y por qué la prisa es mala consejera.
  - Cuidados postoperatorios (sin inventar protocolos: pautas estándar).
  - FAQ corta (¿duele? ¿se puede hacer a cualquier edad? ¿qué pasa si no me hago el injerto?).
  - Cierre con CTA suave a primera valoración.
- **Enlaces internos naturales:**
  - `/implantes-dentales`
  - `/sobre-nosotros`
  - `/contacto`
  - Noticia relacionada: `avances-implantes-dentales-2024` (cirugía guiada)
  - Noticia relacionada: `periimplantitis-sintomas-prevencion-malaga`

### Artículo 2: Implantes dentales paso a paso: todas las fases del tratamiento

- **Slug:** `implantes-dentales-paso-a-paso-fases-tratamiento-malaga`
- **Por qué:** Búsqueda muy alta de pacientes en fase de investigación ("cómo se pone un implante", "cuántas fases tiene un implante"). Cero solapamiento con los artículos existentes (que hablan de cuidados, duración, comparativas). Aporta utilidad pura.
- **Keywords:** implantes dentales paso a paso, fases implante dental, cómo se coloca un implante, primera consulta implantes Málaga.
- **Estructura (~1.100 palabras):**
  - Introducción: por qué entender el proceso reduce el miedo y mejora el resultado.
  - Fase 1 — Diagnóstico: exploración, escáner CBCT 3D, planificación digital. Importancia de no saltarse esta fase.
  - Fase 2 — Plan de tratamiento individualizado: por qué cada caso es distinto.
  - Fase 3 — Preparación previa (limpieza profesional, tratamiento de caries o periodontitis, injerto óseo si procede).
  - Fase 4 — Cirugía de colocación del implante: cómo es realmente, anestesia local, duración, sensaciones del paciente.
  - Fase 5 — Osteointegración: el periodo de espera (2–6 meses) y por qué es clave.
  - Fase 6 — Colocación del pilar y toma de medidas digitales.
  - Fase 7 — Colocación de la corona/prótesis definitiva.
  - Fase 8 — Revisiones y mantenimiento de por vida.
  - Cuándo es posible la **carga inmediata** (sin prometerla como norma; explicando requisitos clínicos reales).
  - FAQ corta (¿cuánto tiempo en total? ¿me quedaré sin dientes durante el proceso? ¿duele la cirugía?).
  - Cierre con CTA a consulta.
- **Enlaces internos naturales:**
  - `/implantes-dentales`
  - `/protesis-dentales`
  - `/sobre-nosotros`
  - `/contacto`
  - Noticia relacionada: `avances-implantes-dentales-2024`
  - Noticia relacionada: `cuidado-implantes-dentales-guia-completa`

## Imágenes realistas (sin "sello IA")

Para que **no parezcan generadas por IA** y **sin inventar dentistas**:

- Modelo: **Nano Banana Pro** (`google/gemini-3-pro-image-preview`) por mayor realismo.
- **Sin personas con caras visibles**, sin batas con "doctor falso", sin manos en primer plano (donde la IA suele fallar).
- Encuadres documentales tipo stock editorial:
  - **Artículo 1 (injerto óseo):** primer plano de un **escáner CBCT 3D en pantalla** mostrando un maxilar con planificación de implantes. Luz tenue de consulta, fondo desenfocado, lente 50mm. Sin texto legible, sin logos, sin marcas.
  - **Artículo 2 (paso a paso):** **mesa de planificación dental** con modelo dental físico, radiografía panorámica sobre negatoscopio iluminado y herramientas de medición. Estética editorial, luz natural lateral, paleta neutra coherente con la marca.
- **QA obligatorio** antes de aceptar: revisar que no haya manos deformadas, instrumental imposible o textos absurdos. Si se detecta, regenerar.
- Guardado en:
  - `src/assets/news-injerto-oseo-malaga.jpg`
  - `src/assets/news-implantes-paso-a-paso-malaga.jpg`

## SEO técnico (ya soportado)

- `NoticiaDetalle.tsx` ya inyecta JSON-LD `Article`, canonical y OG → cero cambios.
- `title` ≤ 60 caracteres, `excerpt` ≤ 160 caracteres.
- Títulos H2/H3 jerárquicos, FAQ al final para favorecer rich snippets.
- Tono natural (no robótico), frases variadas, sin keyword stuffing.
- **Enlaces internos** integrados en el flujo del texto (no en bloques aislados).

## Sitemap

Tras tu OK, añadir las 2 nuevas URLs a `public/sitemap.xml` con `lastmod` actualizado, `changefreq=monthly` y `priority=0.6`:

- `/noticias/injerto-oseo-dental-cuando-necesario-malaga`
- `/noticias/implantes-dentales-paso-a-paso-fases-tratamiento-malaga`

## Sin cambios de diseño

No se toca ningún componente visual, layout, header, footer ni home. Solo se añaden datos y assets.

## Archivos afectados

- `src/data/newsPosts.ts` (editado — 2 nuevas entradas al inicio del array)
- `src/assets/news-injerto-oseo-malaga.jpg` (creado)
- `src/assets/news-implantes-paso-a-paso-malaga.jpg` (creado)
- `public/sitemap.xml` (editado — 2 URLs nuevas + lastmod)

## ¿Confirmas?

¿Te parecen bien estos **2 temas** (injerto óseo + implantes paso a paso) o prefieres sustituir alguno por:

- **A.** Implantes dentales en pacientes diabéticos: lo que dice la evidencia.
- **B.** Implantes y tabaco: cómo afecta realmente al éxito del tratamiento.
- **C.** Carga inmediata: qué es y cuándo es posible (artículo dedicado).
