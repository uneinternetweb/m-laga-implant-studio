## Objetivo

Añadir 2 nuevas noticias al blog (solo español por ahora) con rigor científico, optimizadas para SEO local Málaga, redacción humana, enlaces internos a páginas existentes, e imágenes realistas sin retratar dentistas inventados. Actualizar `sitemap.xml` cuando estén creadas.

## Noticias a crear

Se insertan en `src/data/newsPosts.ts` al principio del array (orden ya configurado: más reciente primero).

### 1. Tabaco e implantes dentales: ¿afecta realmente al éxito del tratamiento?
- **Slug**: `tabaco-implantes-dentales-riesgo-fracaso-malaga`
- **Fecha**: 2026-06-02 (la más reciente)
- **Base científica**: Meta-análisis de Moraschini & Barboza (2016, *Int J Oral Maxillofac Surg*) y Chrcanovic et al. (2015, *J Dent Res*) — fumadores presentan ~2x más riesgo de fracaso implantario y mayor incidencia de periimplantitis. Consenso ITI sobre tabaco como factor de riesgo modificable.
- **Estructura**: por qué el tabaco compromete osteointegración (vasoconstricción, hipoxia, alteración fibroblastos) → cifras de la evidencia → impacto en la fase quirúrgica y de mantenimiento → recomendaciones (dejar de fumar 1-2 semanas antes y 8 semanas después, según ITI) → qué hacemos en pacientes fumadores que no pueden dejarlo.
- **Enlaces internos**: `/implantes-dentales`, `/noticias/periimplantitis-sintomas-prevencion-malaga`, `/noticias/importancia-mantenimiento-implantes-dentales-malaga`, `/contacto`.

### 2. Diabetes e implantes dentales: ¿se pueden colocar de forma segura?
- **Slug**: `diabetes-implantes-dentales-seguridad-malaga`
- **Fecha**: 2026-05-26
- **Base científica**: Revisiones sistemáticas (Naujokat et al. 2016, *Int J Implant Dent*; Moraschini et al. 2016) — pacientes con diabetes bien controlada (HbA1c < 7-7.5%) tienen tasas de éxito comparables a no diabéticos; mal control glucémico retrasa osteointegración y aumenta periimplantitis. Posición de la American Diabetes Association y consensos europeos de periodoncia.
- **Estructura**: relación diabetes-salud oral → qué dice la evidencia sobre éxito implantario según HbA1c → protocolo: control glucémico previo, coordinación con endocrino, profilaxis antibiótica cuando proceda → mantenimiento reforzado → mensaje claro: la diabetes no contraindica los implantes si está controlada.
- **Enlaces internos**: `/implantes-dentales`, `/noticias/periimplantitis-sintomas-prevencion-malaga`, `/noticias/injerto-oseo-dental-cuando-necesario-malaga`, `/contacto`.

## Estilo y SEO

- Tono humano, frases mixtas, anécdotas de consulta, sin frases plantilla típicas de IA ("en el mundo actual…", "es importante destacar…").
- Cada artículo ~1.100-1.400 palabras, H2/H3 con keywords locales ("implantes dentales en Málaga"), bullets justos, sin tablas inventadas.
- `excerpt` 150-160 caracteres con keyword principal.
- Enlaces internos en formato markdown existente `[texto](/ruta)` — ya soportado por el parser de `NoticiaDetalle.tsx`.
- Datos sin inventar: citamos solo lo respaldado por las revisiones mencionadas; no se inventan estadísticas propias de la clínica más allá del dato ya validado de "+13.000 casos".
- Sin fechas/autor/readTime visibles (regla activa de `estrategia-noticias-seo`). Los campos seguirán existiendo en la interfaz `NewsPost` para no romper tipos, pero no se renderizan (ya es el comportamiento actual).

## Imágenes

Generadas con `imagegen` (premium estándar, fotorrealistas, sin caras reconocibles ni batas con nombres):

- `src/assets/news-tabaco-implantes-malaga.jpg` — primer plano de un cigarrillo apagado junto a un modelo dental con implante de titanio sobre superficie clínica neutra, iluminación natural, sin personas.
- `src/assets/news-diabetes-implantes-malaga.jpg` — glucómetro moderno junto a un modelo dental con implante sobre mesa clínica clara, sin personas.

Ratio 16:9, importadas en `newsPosts.ts` como las demás.

## Sitemap

Tras crear los artículos, añadir al inicio de `<urlset>` en `public/sitemap.xml`:

```xml
<url>
  <loc>https://www.implantesdentalesenmalaga.com/noticias/tabaco-implantes-dentales-riesgo-fracaso-malaga</loc>
  <lastmod>2026-06-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
<url>
  <loc>https://www.implantesdentalesenmalaga.com/noticias/diabetes-implantes-dentales-seguridad-malaga</loc>
  <lastmod>2026-05-26</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

También actualizar `<lastmod>` de `/noticias` a `2026-06-02`.

## Fuera de alcance

- Traducciones EN: la web no tiene i18n; mantener solo ES como pediste.
- Backlinks externos o cambios en otras páginas.

## Pasos de implementación

1. Generar las 2 imágenes en `src/assets/`.
2. Añadir las 2 entradas (con `import` de imágenes) al principio del array en `src/data/newsPosts.ts`.
3. Actualizar `public/sitemap.xml`.
4. Verificar build OK y previsualizar las nuevas URLs `/noticias/<slug>`.