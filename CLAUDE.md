# Sastrería Taya — sitio web

Proyecto de práctica de Ale para aprender a construir y publicar un sitio desde cero. Responder siempre en español (Uruguay) y explicar cada paso: Ale está aprendiendo, quiere entender qué hace cada comando y por qué.

## El negocio
- Alquiler de vestidos, trajes y accesorios de fiesta en la calle Rivera, Santa Lucía (Canelones, Uruguay). Abre de lunes a sábado, de 10:00 a 12:00 y de 16:00 a 19:30.

## Cómo trabaja el local (informado el 22/11/2026)
- **Pruebas:** hasta 4 clientes por hora (2 probadores, turnos de 30 minutos).
- **Pagos:** el día de la prueba se cobra una seña; el pago total se hace al retirar la prenda. Monto de la seña: a confirmar.
- **Prendas para entregar:** hoy llevan una etiqueta de papel escrita a mano con nombre y apellido del cliente, día en que la retira y arreglos a realizar. Esos tres datos van en la etiqueta adhesiva impresa y en la ficha de la prenda.
- **Devoluciones:** generalmente los lunes.
- **Tintorería:** generalmente 2 días; la prenda queda disponible de nuevo a partir del martes. Son los valores por defecto de la configuración (días de bloqueo).
- **Los vestidos no tienen etiqueta** (de tela, de talle o de cuidados): se evalúa coserles una grifa con logo y código (ver "Identificación de prendas").
- Dueñas: María José Taya y su hija Nazarena Delgado. El nombre viene de la sastrería de Miguel Taya (padre de María), que hacía trajes de hombre en el mismo local.
- Público muy variado (chicas jóvenes a señoras mayores, varones adolescentes y padres, niñas y niños). El celular es el dispositivo principal.
- Lemas: "Calidad y perfección" (cartel original) y "Si es Taya, no falla" (Instagram @sastreria_taya).

## Decisiones tomadas
- Un solo sitio responsivo, diseñado primero para celular. Puntos de corte: 600px y 1024px.
- HTML, CSS y JS planos, sin frameworks ni build. Publicación prevista: GitHub + GitHub Pages o Netlify.
- **Habrá base de datos de clientes** (decidido el 21/11/2026; reemplaza la decisión anterior de no tenerla). Datos: nombre, celular y correo opcional (los avisos van por WhatsApp); CI y dirección solo al firmar el alquiler. Cumpleaños y promociones, con consentimiento aparte que nunca viene marcado. Obliga a inscribir la base en la URCDP dentro de los 90 días desde la etapa 2 (Ley 18.331, Decreto 664/008). Sin registro abierto de usuarios en la web por ahora.
- **Agenda de pruebas (en funcionamiento desde el 27/11/2026):** 4 clientes por hora = turnos de 30 minutos con 2 lugares cada uno (2 probadores), dentro del horario de atención. Cal.com, plan gratuito, cuenta del Gmail del local `sastreria.taya.santalucia@gmail.com`, conectada a su Google Calendar. Evento "Prueba de vestuario": https://cal.com/sastreria-taya/pruebadevestuario ("Offer seats" = 2 es gratis; la dirección `prueba-de-vestuario` quedó tomada por un evento único cancelado). Formulario: nombre (obligatorio), celular (tipo teléfono, obligatorio), correo **opcional** (no todas las clientas tienen), notas y casilla de consentimiento obligatoria; no se pregunta el canal de aviso. El campo celular abre en Brasil (+55) y no hay ajuste para cambiarlo: la web lo precarga con `?attendeePhoneNumber=%2B598`. Feriados cerrados con fechas especiales (25/12 y 1/1). Probado con 3 reservas en el mismo turno: entran 2 y la tercera no ve el horario. Limitaciones aceptadas: en el plan gratis los correos de Cal.com usan su plantilla (no se pueden simplificar); responder "No" en la barra de Gmail no cancela en Cal.com y el lugar no se libera (no se investiga más por ahora; hay que usar el enlace "Cancelar" del correo). Duración y cantidad de probadores deben ser configurables (en el back-office desde la etapa 4). La clienta elige las prendas en el local, con asesoramiento: no se eligen desde la web por ahora.
- **Modelo elegido para seguir:** `propuesta-3.html` (22/11/2026).
- **Prioridades actuales (26/11/2026):** 1) diseño web, 2) agenda por web conectada a Google Calendar, 3) avisos a clientes por WhatsApp: recordatorio de la cita, aviso de prenda lista para retirar y recordatorio de devolución. Lo demás espera.
- **Pagos (26/11/2026):** el cobro por Mercado Pago u otro medio integrado queda **en espera de resolución**. Por ahora, una mini administración en el historial del alquiler: adelanto al reservar y pago total al entregar o en cualquier otro momento, registrados a mano. A futuro se le puede dar más relevancia.
- **WhatsApp es el canal central de comunicación con las clientas (27/11/2026):** el correo queda como opción secundaria (pocas lo eligen; se evalúa en la marcha). Avanzar lo más rápido posible hacia una buena interfaz de avisos por WhatsApp.
- **Avisos por WhatsApp, en dos pasos:** (1) ya mismo, "respuestas rápidas" de la app WhatsApp Business, enviadas a mano y gratis; (2) cuando exista la base de datos, API de WhatsApp de Meta (Cloud API) con plantillas "utility" aprobadas y una tarea programada en Supabase, pago por mensaje. No usar librerías no oficiales que manejan WhatsApp Web (incumplen las condiciones de Meta y el número puede quedar bloqueado). El MCP oficial de Meta ("WhatsApp Business Tools MCP", sept. 2026) sirve para que Claude ayude a configurar la cuenta, el número y las plantillas, no para enviar los avisos en producción.
- **Estado "En depósito":** la prenda elegida se cuelga en otra área y queda apartada para los ajustes hasta la entrega.
- **Identificación de prendas (EN EVALUACIÓN, propuesta de Ale del 22/11/2026, falta aprobación de María y Nazarena):**
  - **Grifa cosida** con el logo del local y un código único: solo números, 6 cifras + dígito de control (7 en total), sin la categoría. Se cose en el alta, la primera vez que la prenda se alquila, y es el identificador permanente que guarda su historial (alquileres, arreglos, notas). Los códigos actuales (VM-02…) quedan como referencia interna. Consultar al proveedor la numeración correlativa (en tejidas suele ser cara; opción: logo tejido + número estampado) y que resista tintorería.
  - **Etiqueta adhesiva impresa** para el perchero de entregas, que reemplaza al papel escrito a mano: nombre y apellido, día de retiro, arreglos, código de la prenda y un QR. El QR guarda solo el enlace a la ficha (los datos se ven con sesión iniciada) y se escanea con la cámara de cualquier celular; la ficha permite agregar notas en un bloc libre. Impresora: sin prioridad por ahora, pero con **Bluetooth como requisito** (decidido el 24/11/2026). Candidata: Brother QL-820NWB (USB, Wi-Fi y Bluetooth, 62 mm, negro y rojo con rollo DK-22251). Desde la computadora se imprime con el diálogo del navegador y una plantilla del tamaño de la etiqueta; desde el celular, por Bluetooth, con la app gratuita de Brother (iPrint&Label), a la que el back-office le pasa la etiqueta como imagen. Imprimir por Bluetooth directo desde la web (Web Bluetooth, solo Chrome para Android) no se prevé. Símbolos en negro: recuadro "AJUSTES" cuando hay arreglos y día de retiro grande. Precio y rollos en Uruguay: a consultar. Adhesivo removible o pegado en marbete/funda, no directo sobre telas delicadas.
  - **Alternativa: etiquetas NFC (NTAG213)**, la propuesta anterior: grabar desde la web solo funciona en Chrome para Android y en vestidos sin etiqueta hay que resolver cómo fijarlas.
  - Implica costos (grifas por lote, impresora, rollos): rompe el "todo gratis" y hay que presupuestarlo.
- **Back-office:** cada persona puede tener más de un rol. Las preguntas frecuentes se cargan en el back-office y se ven en la web.
- **Datos de clientes:** cumpleaños solo con día y mes (sin año); el tipo de evento no es obligatorio.
- El catálogo crece con los alquileres: la foto se saca cuando la prenda se alquila por primera vez. Entrega y devolución sin registro fotográfico.
- **Alta de prendas en el back-office (26/11/2026):** al alquilar una prenda por primera vez se le saca la foto, se le cose la grifa y su código queda guardado en la base de datos: desde ese momento está inventariada y entra en el flujo de trabajo. Descripción y detalles se completan después. Nace "sin publicar" y solo llega al catálogo web cuando María o Nazarena la aprueban (estados: sin publicar → propuesta lista → publicada).
- **A futuro (etapa 8, progresiva y sin fecha):** asistente que propone una foto mejorada (fondo crema, luz, recorte 3:4) y una descripción a partir de la foto, siempre con aprobación de María o Nazarena; catálogo completo en la web y "Mi probador" para que la clienta elija modelos y llegue a la cita con ellos. Ellas confirmaron que les ayuda; se hace de a poco. La descripción automática usa un servicio de IA pago por uso (clave solo en el servidor).
- Sin reseñas con foto, área de clientes registrados ni chatbot por ahora.
- Supabase desde la etapa 4 (inventario, alquileres, clientes y login del equipo con roles). Plan gratuito: se pausa tras 7 días sin uso. La clave secreta nunca va en el front; proteger tablas con Row Level Security.
- Se descartaron los fondos tipo tela (satén, lentejuelas, encaje…): el fondo queda crema liso.

## Etapas
Plan completo (privado): https://claude.ai/artifact/7n4d1g3NWJZLxzRaxTmmJd
0 Diseño (hecho) · 1 Sitio publicado (en curso) · 2 Agenda de pruebas (funcionando con Cal.com desde el 27/11; falta privacidad y URCDP) · 3 Vidriera por categoría · 4 Back-office: inventario y "Hoy" · 5 Alquileres y dinero · 6 Comunicación · 7 Métricas · 8 Catálogo completo y asistente de fotos (progresiva, sin fecha).
Cada etapa termina con una revisión con María y Nazarena; las decisiones se anotan acá.

## Estructura
- `index.html` — portada: cabecera, portada, tendedero (carrusel), acordeón de categorías, asesoramiento, cómo funciona, historia, visitanos, pie.
- `css/styles.css` — tokens en `:root` arriba de todo; luego componentes; media queries 600px y 1024px al final; respeta `prefers-reduced-motion`.
- `js/main.js` — menú, acordeón, carrusel del tendedero (flechas, arrastre, desfile automático cada 5 s, perchas que siguen la cuerda diagonal), WhatsApp.
- `propuesta-2.html` + `css/propuesta-2.css` + `js/propuesta-2.js` — propuesta "Todos bailan", en evaluación frente a `index.html`. Portada con la foto `img/portada/todos-bailan.jpg` (fundida con el crema por `mix-blend-mode: multiply`) y dos títulos verticales en letra hueca que bajan como cartel corredizo continuo; carrusel solo manual (flechas, dedo, arrastre); sin acordeón, sin "asesoramiento" ni llamado bordó; logo antes del nombre en la cabecera. Reutiliza `styles.css` y suma sus estilos encima.
- `propuesta-3.html` + `css/propuesta-3.css` + `js/propuesta-3.js` — **modelo elegido**. Es la propuesta 2 con las mejoras de la revisión UI/UX: pausa del cartel corredizo (botón y toque), foto que deja ver "Reservá tu prueba" en celular, borde de letra hueca de 1,5px, `fetchpriority` en la foto, menú "Recién llegados". Cabecera: logo a la izquierda, "Sastrería Taya" y debajo "Alquiler de vestidos y trajes en Santa Lucía-Canelones" en Pinyon Script bordó. Constante `RESERVA` en el JS: todos los botones con `data-reserva` van a la agenda en pestaña nueva (vacía = van a Visitanos).
- `docs/brand-guidelines.md` — manual de marca (skill `brand`).
- `docs/guia-cal-com.md` — guía paso a paso para configurar la agenda de pruebas en Cal.com.
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
- **WhatsApp en pausa hasta definir el número (27/11/2026):** hoy los únicos celulares son los personales de María y de Nazarena; falta decidir qué número usará el local. Cuando esté: (1) instalar WhatsApp Business y cargar las 3 respuestas rápidas (recordatorio de prueba, prenda lista, recordatorio de devolución; borradores en la etapa 6 del plan); (2) crear el portfolio de Meta Business; (3) revisar el MCP oficial de Meta en su repositorio antes de instalarlo y usarlo para registrar el número y las plantillas. Precio por mensaje en Uruguay: confirmar en la tabla oficial de Meta.
- Agenda: conectada a los botones "Reservá tu prueba" de `propuesta-3.html` (constante `RESERVA`). Antes de difundirla al público: política de privacidad (agregar su enlace al texto del consentimiento) e inscripción de la base en la URCDP. Sumar a la descripción del evento: "Si no podés venir, usá el enlace Cancelar del correo de confirmación". Cargar otros feriados o cierres (6/1, Carnaval, Turismo) cuando ellas confirmen.
- Grifas e impresora de etiquetas: aprobación de María y Nazarena, muestra y presupuesto del proveedor de grifas (numeración correlativa), elegir impresora térmica y tamaño de etiqueta.
- Foto histórica en mayor definición (`img/historia/sastreria-original.jpg` hoy es 230×300, foto de una foto impresa): Ale la va a conseguir escaneada a 600 dpi o con Google PhotoScan. Al recibirla: recortar, enderezar, ajustar contraste, exportar ~600px de ancho y actualizar `width`/`height` en `index.html`.
- 11 imágenes de catálogo más (vestidos VM, niñas VN, moños AC) cuando se renueve la cuota de Canva.
- Al publicar el sitio de verdad (deja de ser demo): borrar `<meta name="robots" content="noindex, nofollow">` y su comentario en el `<head>` de `index.html`.
- Mostrar a María y Nazarena las 3 pruebas de publicación de Instagram (1080×1080) en `assets/banners/prueba-instagram/`: A "Todos bailan" (foto), B "Perchero" (editorial) y C "Si es Taya, no falla" (tipografía sobre bordó). Cada PNG tiene su HTML para editarlo. Las prendas de B son ilustrativas (Canva).
- Revisar con ellas el manual de marca `docs/brand-guidelines.md`: colores de estado del back-office, palabras a evitar y texto base para imágenes con IA están marcados como propuesta.
- Preguntas abiertas para María y Nazarena: monto de la seña, garantía, penalizaciones, días en depósito antes del evento, si el horario es el mismo los sábados, accesorios, dónde se cose la grifa para que no se vea al usar la prenda, si la etiqueta adhesiva va sobre la tela o en un marbete, quién inscribe la base en la URCDP, qué celulares usa el equipo, qué prendas de ejemplo van en cada carrusel.
