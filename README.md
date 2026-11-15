# Sastrería Taya — sitio web

Sitio de presentación de Sastrería Taya (Santa Lucía, Canelones): alquiler de vestidos, trajes y accesorios de fiesta.

## Estructura

```
index.html            la portada (una sola página, responsiva)
css/styles.css        estilos: primero celular, luego 600px y 1024px
js/main.js            menú, acordeón, balanceo del tendedero, WhatsApp
img/catalogo/         fotos de prendas (WebP, 720px de ancho), nombradas por código
img/historia/         foto de la sastrería original
img/marca/            logo
```

## Cómo verlo

Abrir `index.html` en el navegador, o publicar la carpeta en GitHub Pages o Netlify.

## Pendientes antes de publicar

- Número de WhatsApp en `js/main.js` (constante `WHATSAPP`).
- Horario exacto del local.
- Logo original en alta resolución (el actual es un recorte de Instagram).
- Enlace de "Reservá tu prueba" a la página de reservas de Google Calendar (etapa 2).
- Imágenes del catálogo: son ilustrativas (generadas en Canva); reemplazar por fotos reales con el mismo código.

## Agregar una prenda al tendedero

1. Guardar la foto en `img/catalogo/<CÓDIGO>.webp` (vertical 3:4, prenda sola en percha, fondo crema).
2. Copiar un `<li>` del tendedero en `index.html`, cambiar código, nombre, `alt` y etiqueta, y el número de `--i` (posición).
