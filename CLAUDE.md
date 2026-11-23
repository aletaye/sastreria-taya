# Sastrería Taya — sitio web

Proyecto de práctica de Ale para aprender a construir y publicar un sitio desde cero. Responder siempre en español (Uruguay) y explicar cada paso: Ale está aprendiendo, quiere entender qué hace cada comando y por qué.

## El negocio
- Alquiler de vestidos, trajes y accesorios de fiesta en la calle Rivera, Santa Lucía (Canelones, Uruguay). Abre de lunes a sábado, de 10:00 a 12:00 y de 16:00 a 19:30.

## Cómo trabaja el local (informado el 22/11/2026)
- **Pruebas:** hasta 4 clientes por hora (2 probadores, turnos de 30 minutos).
- **Pagos:** el día de la prueba se cobra una seña; el pago total se hace al retirar la prenda. Monto de la seña: a confirmar.
- **Prendas para entregar:** hoy llevan una etiqueta de papel escrita a mano con nombre y apellido del cliente, día en que la retira y arreglos a realizar. Esos tres datos son los mínimos que debe mostrar la ficha de la prenda al leer su etiqueta NFC.
- **Devoluciones:** generalmente los lunes.
- **Tintorería:** generalmente 2 días; la prenda queda disponible de nuevo a partir del martes. Son los valores por defecto de la configuración (días de bloqueo).
- **Los vestidos no tienen etiqueta** (de tela, de talle o de cuidados) donde fijar la NFC: Ale está buscando una alternativa.
- Dueñas: María José Taya y su hija Nazarena Delgado. El nombre viene de la sastrería de Miguel Taya (padre de María), que hacía trajes de hombre en el mismo local.
- Público muy variado (chicas jóvenes a señoras mayores, varones adolescentes y padres, niñas y niños). El celular es el dispositivo principal.
- Lemas: "Calidad y perfección" (cartel original) y "Si es Taya, no falla" (Instagram @sastreria_taya).

## Decisiones tomadas
- Un solo sitio responsivo, diseñado primero para celular. Puntos de corte: 600px y 1024px.
- HTML, CSS y JS planos, sin frameworks ni build. Publicación prevista: GitHub + GitHub Pages o Netlify.
- **Habrá base de datos de clientes** (decidido el 21/11/2026; reemplaza la decisión anterior de no tenerla). Datos: nombre, celular, correo y canal de aviso preferido (WhatsApp o correo); CI y dirección solo al firmar el alquiler. Cumpleaños y promociones, con consentimiento aparte que nunca viene marcado. Obliga a inscribir la base en la URCDP dentro de los 90 días desde la etapa 2 (Ley 18.331, Decreto 664/008). Sin registro abierto de usuarios en la web por ahora.
- **Agenda de pruebas:** 4 clientes por hora = turnos de 30 minutos con 2 lugares cada uno (2 probadores), dentro del horario de atención. Recomendado: una agenda única en Cal.com con "Offer seats" (2 lugares), conectada a un Google Calendar que María y Nazarena compartan; no necesita correo del negocio. Alternativa gratis si "seats" resultara pago: una página de reservas de Google por persona (María y Nazarena) y dos botones en la web. La agenda gratuita de Google admite una sola reserva por turno. Duración y cantidad de probadores deben ser configurables (en el back-office desde la etapa 4). La clienta elige las prendas en el local, con asesoramiento: no se eligen desde la web por ahora.
- **Modelo elegido para seguir:** `propuesta-3.html` (22/11/2026).
- **Estado "En depósito":** la prenda elegida se cuelga en otra área y queda apartada para los ajustes hasta la entrega.
- **Identificación de prendas con etiquetas NFC (NTAG213)**, que reemplazan al papel identificatorio: se le ponen a la prenda cuando la eligen y quedan con ella (tipo lavandería, porque va a tintorería). El back-office tiene una sección para grabar la etiqueta con el enlace a la ficha y asociarla al código de la prenda (grabar desde la web solo funciona en Chrome para Android). Se leen en cualquier momento acercando el celular (Android y iPhone XS o posterior): la ficha muestra estado, quién la alquila, fechas, ajustes pendientes y un bloc de notas libre donde María o Naza agregan notas. La etiqueta guarda solo el enlace; los datos se ven con sesión iniciada.
- **Back-office:** cada persona puede tener más de un rol. Las preguntas frecuentes se cargan en el back-office y se ven en la web.
- **Datos de clientes:** cumpleaños solo con día y mes (sin año); el tipo de evento no es obligatorio.
- El catálogo crece con los alquileres: la foto se saca cuando la prenda se alquila por primera vez. Entrega y devolución sin registro fotográfico.
- Sin reseñas con foto, área de clientes registrados ni chatbot por ahora.
- Supabase desde la etapa 4 (inventario, alquileres, clientes y login del equipo con roles). Plan gratuito: se pausa tras 7 días sin uso. La clave secreta nunca va en el front; proteger tablas con Row Level Security.
- Se descartaron los fondos tipo tela (satén, lentejuelas, encaje…): el fondo queda crema liso.

## Etapas
Plan completo (privado): https://claude.ai/artifact/7n4d1g3NWJZLxzRaxTmmJd
0 Diseño (hecho) · 1 Sitio publicado (en curso) · 2 Agenda de pruebas (antes del 18/12) · 3 Vidriera por categoría · 4 Back-office: inventario y "Hoy" · 5 Alquileres y dinero · 6 Comunicación · 7 Métricas.
Cada etapa termina con una revisión con María y Nazarena; las decisiones se anotan acá.

## Estructura
- `index.html` — portada: cabecera, portada, tendedero (carrusel), acordeón de categorías, asesoramiento, cómo funciona, historia, visitanos, pie.
- `css/styles.css` — tokens en `:root` arriba de todo; luego componentes; media queries 600px y 1024px al final; respeta `prefers-reduced-motion`.
- `js/main.js` — menú, acordeón, carrusel del tendedero (flechas, arrastre, desfile automático cada 5 s, perchas que siguen la cuerda diagonal), WhatsApp.
- `propuesta-2.html` + `css/propuesta-2.css` + `js/propuesta-2.js` — propuesta "Todos bailan", en evaluación frente a `index.html`. Portada con la foto `img/portada/todos-bailan.jpg` (fundida con el crema por `mix-blend-mode: multiply`) y dos títulos verticales en letra hueca que bajan como cartel corredizo continuo; carrusel solo manual (flechas, dedo, arrastre); sin acordeón, sin "asesoramiento" ni llamado bordó; logo antes del nombre en la cabecera. Reutiliza `styles.css` y suma sus estilos encima.
- `propuesta-3.html` + `css/propuesta-3.css` + `js/propuesta-3.js` — **modelo elegido**. Es la propuesta 2 con las mejoras de la revisión UI/UX: pausa del cartel corredizo (botón y toque), foto que deja ver "Reservá tu prueba" en celular, borde de letra hueca de 1,5px, `fetchpriority` en la foto, menú "Recién llegados". Cabecera: logo a la izquierda, "Sastrería Taya" y debajo "Alquiler de vestidos y trajes en Santa Lucía-Canelones" en Pinyon Script bordó. Constante `RESERVA` en el JS: todos los botones con `data-reserva` van a la agenda en pestaña nueva (vacía = van a Visitanos).
- `docs/brand-guidelines.md` — manual de marca (skill `brand`).
- `assets/banners/prueba-instagram/` — 3 pruebas de publicación de Instagram (skill `banner-design`).
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
- Propuesta 2: "Vos andá y bailá" y "Sastrería Taya te viste como nunca".
- Historia (en los dos modelos): "Sastrería Taya en Santa Lucía año 1940, desde entonces vistiendo siempre con el mejor gusto".

## Pendientes
- Número de WhatsApp (constante `WHATSAPP` en el JS de cada página), logo original en alta resolución.
- Agenda: crear la cuenta (Cal.com recomendado), confirmar si "Offer seats" es gratis, qué Gmail la tiene, y pasar el enlace para la constante `RESERVA` en `js/propuesta-3.js`. Antes de abrirla al público: política de privacidad e inscripción en la URCDP.
- Alternativa para fijar la etiqueta NFC en vestidos sin etiqueta de tela (ver plan, sección "Ciclo de vida de la prenda").
- Foto histórica en mayor definición (`img/historia/sastreria-original.jpg` hoy es 230×300, foto de una foto impresa): Ale la va a conseguir escaneada a 600 dpi o con Google PhotoScan. Al recibirla: recortar, enderezar, ajustar contraste, exportar ~600px de ancho y actualizar `width`/`height` en `index.html`.
- 11 imágenes de catálogo más (vestidos VM, niñas VN, moños AC) cuando se renueve la cuota de Canva.
- Al publicar el sitio de verdad (deja de ser demo): borrar `<meta name="robots" content="noindex, nofollow">` y su comentario en el `<head>` de `index.html`.
- Mostrar a María y Nazarena las 3 pruebas de publicación de Instagram (1080×1080) en `assets/banners/prueba-instagram/`: A "Todos bailan" (foto), B "Perchero" (editorial) y C "Si es Taya, no falla" (tipografía sobre bordó). Cada PNG tiene su HTML para editarlo. Las prendas de B son ilustrativas (Canva).
- Revisar con ellas el manual de marca `docs/brand-guidelines.md`: colores de estado del back-office, palabras a evitar y texto base para imágenes con IA están marcados como propuesta.
- Preguntas abiertas para María y Nazarena: monto de la seña, garantía, penalizaciones, días en depósito antes del evento, si el horario es el mismo los sábados, accesorios, cómo fijar la etiqueta NFC sin dañar la prenda, quién inscribe la base en la URCDP, qué celulares usa el equipo, qué prendas de ejemplo van en cada carrusel.
