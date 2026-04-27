## Objetivo

Publicar **una nueva noticia** sobre implantes dentales en la web, real, con criterio clínico, optimizada para SEO local en Málaga, con imagen realista (que no parezca generada por IA) y enlaces internos a las páginas clave. **Sin hablar de precios** para no comprometer a la clínica.

## Tema recomendado

**"Periimplantitis: qué es, síntomas y cómo evitar perder un implante dental"**

Por qué este tema:

- **Clínico y serio**, sin compromisos comerciales (no hablamos de precios, ofertas ni plazos garantizados).
- **Búsqueda real y creciente**: "periimplantitis", "implante se mueve", "encía inflamada implante", "por qué se cae un implante".
- **Complementa** los artículos existentes sin solaparse (los actuales hablan de duración, cuidados generales y tipos de prótesis; ninguno aborda específicamente la periimplantitis como patología).
- Refuerza la autoridad de la clínica y del Dr. Alfonso Moreno Sánchez como referentes serios en implantología.
- Encaja perfectamente con la línea editorial: educar al paciente, no vender.

## Alternativas si prefieres otro enfoque

- **A.** Injerto óseo dental: cuándo es necesario antes de un implante.
- **B.** Carga inmediata: dientes fijos en 24 horas, requisitos clínicos reales.
- **C.** Implantes dentales en pacientes mayores: mitos, realidad y cuándo sí están indicados.

(Avísame si prefieres una de estas en lugar de periimplantitis.)

## Plan de ejecución

### 1. Crear el artículo en `src/data/newsPosts.ts`

- **Slug:** `periimplantitis-sintomas-prevencion-malaga`
- **Title:** "Periimplantitis: síntomas, causas y cómo prevenirla en Málaga" (≤60 chars)
- **Excerpt:** ~155 chars optimizado para meta description
- **Contenido:** ~1.000–1.200 palabras con jerarquía H2/H3 limpia y tono natural (estilo de los artículos existentes, no robótico):
  - Introducción: por qué un implante puede fallar años después
  - Qué es la periimplantitis (vs mucositis periimplantaria)
  - Síntomas que debes vigilar (sangrado, inflamación, mal sabor, movilidad)
  - Causas principales (higiene, tabaco, bruxismo, falta de revisiones, diabetes)
  - Cómo se diagnostica y cómo se trata (sin entrar en precios ni protocolos comerciales)
  - Prevención: rutina diaria + revisiones de mantenimiento
  - FAQ corta (3–4 preguntas) para favorecer rich snippets
  - Cierre con CTA suave a primera consulta gratuita
- **Enlaces internos** integrados de forma natural:
  - `/implantes-dentales` (servicio principal)
  - `/sobre-nosotros` (Dr. Alfonso Moreno y equipo)
  - `/contacto` (CTA consulta)
  - 1–2 noticias relacionadas: `cuidado-implantes-dentales-guia-completa` e `importancia-mantenimiento-implantes-dentales-malaga`
- **Insertar al inicio** del array `newsPosts` para que aparezca como la noticia más reciente.
- **Fecha:** actual (abril 2026).

### 2. Imagen realista (no obvia de IA)

Estrategia para que no se note generada por IA:

- Generar con **Nano Banana Pro** (`google/gemini-3-pro-image-preview`) usando prompt fotoperiodístico muy concreto: foto editorial de consulta dental real en Málaga, luz natural de ventana lateral, lente 50mm f/2.8, grano fílmico sutil, encuadre documental, sin manos deformadas, sin texto, sin logos, paleta neutra coherente con la marca.
- Tema visual seguro: **detalle de revisión dental con espejo e instrumento sobre encía sana** (evita primeros planos de boca con patología que suelen verse falsos en IA).
- **QA obligatorio**: convertir a imagen y revisar antes de aceptar. Si se nota artificial (manos raras, instrumental imposible, encía plástica), regenerar con prompt corregido o cambiar el encuadre a un plano más amplio (consulta, sillón, profesional con bata).
- Guardar como `src/assets/news-periimplantitis-malaga.jpg` (formato JPG, ~1600px ancho).
- Importar en `newsPosts.ts`.

### 3. SEO técnico

- `NoticiaDetalle.tsx` ya inyecta JSON-LD `Article`, canonical y OG mediante `SEOHead` → cero cambios necesarios.
- Añadir la nueva URL a `public/sitemap.xml` con `changefreq=monthly`, `priority=0.6` y `lastmod` actualizado.
- Title ≤60 chars, excerpt ≤160 chars, sin keyword stuffing.

### 4. Sin cambios de diseño

No se tocan componentes visuales, estilos, layout, header, footer ni la home. Solo se editan datos y se añade un asset.

## Archivos afectados

- `src/data/newsPosts.ts` (editado — nueva entry al inicio del array)
- `src/assets/news-periimplantitis-malaga.jpg` (creado)
- `public/sitemap.xml` (editado — nueva URL + lastmod)

## Confirmación

¿Te parece bien **periimplantitis** como tema, o prefieres una de las alternativas (A injerto óseo, B carga inmediata, C implantes en mayores)?
