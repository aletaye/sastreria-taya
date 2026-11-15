# Sastrería Taya — sitio web

Proyecto de práctica de Ale para aprender a construir y publicar un sitio desde cero. Responder siempre en español (Uruguay) y explicar cada paso: Ale está aprendiendo, quiere entender qué hace cada comando y por qué.

## El negocio
- Alquiler de vestidos, trajes y accesorios de fiesta en la calle Rivera, Santa Lucía (Canelones, Uruguay). Abre de lunes a sábado.
- Dueñas: María José Taya y su hija Nazarena Delgado. El nombre viene de la sastrería de Miguel Taya (padre de María), que hacía trajes de hombre en el mismo local.
- Público muy variado (chicas jóvenes a señoras mayores, varones adolescentes y padres, niñas y niños). El celular es el dispositivo principal.
- Lemas: "Calidad y perfección" (cartel original) y "Si es Taya, no falla" (Instagram @sastreria_taya).

## Decisiones tomadas
- Un solo sitio responsivo, diseñado primero para celular. Puntos de corte: 600px y 1024px.
- HTML, CSS y JS planos, sin frameworks ni build. Publicación prevista: GitHub + GitHub Pages o Netlify.
- **Sin base de datos de clientes.** Las citas de prueba se piden en la página de reservas de Google Calendar (etapa 2) con solo nombre y celular. Ofertas por Canal de WhatsApp e Instagram; descuento de cumpleaños mostrando la CI en el local. No agregar registro de usuarios ni formularios que guarden datos personales (Ley 18.331).
- Supabase recién en la etapa 3, solo para inventario de prendas y login de las administradoras. La clave secreta nunca va en el front; proteger tablas con Row Level Security.
- Se descartaron los fondos tipo tela (satén, lentejuelas, encaje…): el fondo queda crema liso.

## Etapas
0 Diseño (hecho) · 1 Sitio institucional (en curso: portada lista) · 2 Citas con Google Calendar · 3 Catálogo e inventario · 4 Gestión de alquileres · 5 Comunidad y métricas.

## Estructura
- `index.html` — portada: cabecera, portada, tendedero (carrusel), acordeón de categorías, asesoramiento, cómo funciona, historia, visitanos, pie.
- `css/styles.css` — tokens en `:root` arriba de todo; luego componentes; media queries 600px y 1024px al final; respeta `prefers-reduced-motion`.
- `js/main.js` — menú, acordeón, carrusel del tendedero (flechas, arrastre, desfile automático cada 5 s, perchas que siguen la cuerda diagonal), WhatsApp.
- `img/catalogo/<CÓDIGO>.webp` — prendas, 720px, vertical 3:4, prenda sola en percha sobre fondo crema, sin personas. Códigos: VM (mujer), VH (hombre), VN (niñas), AC (accesorios). Hoy son imágenes ilustrativas generadas en Canva.

## Sistema de diseño (paleta "El perchero de Taya")
- Fondo `--crema` #f3ede2; superficies `--crema-claro` #fbf8f2; texto `--tinta` #1e1b1c; secundario `--tinta-suave` #5c5250.
- Acción principal `--bordo` #8e2436 (un solo botón bordó por pantalla, "Reservá tu prueba"); `--esmeralda` #1f5e54 títulos, enlaces y WhatsApp; `--azul` #2b3f8c categoría Hombre.
- `--menta`, `--rosa`, `--mostaza` solo como fondos con texto en tinta. `--dorado` #b8935a solo líneas y detalles, nunca texto.
- Tipografías (Google Fonts): títulos DM Serif Display, texto DM Sans (17px), acento Pinyon Script (una palabra suelta).
- Todo lo tocable mide al menos 48px; foco visible de 2px en tinta.

## Tono de los textos
Cercano, voseo uruguayo ("buscás", "vení", "reservá"), sin emojis, sin estereotipos de cuerpo. Frases aprobadas:
- "Tu fiesta empieza en el perchero."
- "Te mostramos la prenda sin moldes: cada cuerpo la luce a su manera."
- "¿No está exactamente lo que buscás? Siempre hay algo que se adapte a ti, y te ayudamos a encontrarlo."
- "María y Nazarena saben qué te queda bien antes de que te lo pruebes."

## Pendientes
- Número de WhatsApp (constante `WHATSAPP` en `js/main.js`), horario exacto, logo original en alta resolución.
- 11 imágenes de catálogo más (vestidos VM, niñas VN, moños AC) cuando se renueve la cuota de Canva.
- Crear el repositorio en GitHub y publicar la demo.
- Al publicar el sitio de verdad (deja de ser demo): borrar `<meta name="robots" content="noindex, nofollow">` y su comentario en el `<head>` de `index.html`.
- Preguntas abiertas para María y Nazarena: duración de la prueba, seña, garantía, penalizaciones, días de limpieza, accesorios.
