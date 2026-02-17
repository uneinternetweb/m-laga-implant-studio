

## Problema

En pantallas de escritorio con resoluciones intermedias (1024px - 1400px), los enlaces de navegacion se amontonan y solapan con el boton "Pedir Cita". Esto ocurre porque:

1. El menu se muestra a partir de `lg` (1024px) con `gap-8` fijo
2. Hay 6 enlaces + boton, demasiados para ese espacio sin ajustar el tamanho

## Solucion

Ajustar el Header para que sea responsive en todas las resoluciones de escritorio:

1. **Reducir el gap en pantallas lg** y aumentarlo en xl: cambiar `gap-8` a `gap-4 xl:gap-8`
2. **Reducir el tamanho del texto** en pantallas lg: usar `text-sm lg:text-sm xl:text-base`
3. **Subir el breakpoint del menu** de `lg` a `xl` (1280px), o mantenerlo en `lg` con texto mas pequenho

## Cambios tecnicos

### `src/components/layout/Header.tsx`

- Cambiar la clase del contenedor de enlaces de `gap-8` a `gap-3 xl:gap-6`
- Reducir tamanho de fuente de los enlaces en `lg`: agregar `text-sm xl:text-base`
- Reducir padding del boton CTA en lg: `px-4 xl:px-6`

Esto garantiza que el menu se vea correctamente en todas las resoluciones desde 1024px hasta pantallas grandes.

