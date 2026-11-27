# Guía: configurar la agenda de pruebas en Cal.com

> Para: María, Nazarena y Ale · Versión del 27/11/2026
> Resultado: una página donde la clienta reserva su prueba, conectada al Google Calendar del local,
> con turnos de 30 minutos y 2 lugares por turno (4 clientes por hora).
> Tiempo estimado: 30 minutos. Se hace desde una computadora.

## Antes de empezar: qué Gmail tiene la agenda

Cal.com se conecta a **un** Google Calendar. Hoy no hay correo del negocio, así que hay que elegir:

| Opción | Cómo queda |
|---|---|
| **Gmail de María** (o de Nazarena) | Las citas caen en su calendario; lo comparte con la otra en modo lectura (Google Calendar → Configuración → Compartir con personas). |
| **Un Gmail nuevo solo para el local** | Las citas no se mezclan con la vida personal y la cuenta queda si alguien deja el negocio. Recomendado, aunque no es obligatorio. |

Se usó: **un Gmail nuevo del local**, `sastreria.taya.santalucia@gmail.com` (cuenta creada el 27/11/2026).

## Paso 1 — Crear la cuenta

1. Entrar a https://cal.com y elegir **Sign up** → **Continuar con Google**, con el Gmail elegido.
2. **Usuario:** `sastreria-taya` (si está tomado, `sastreriataya`). La página quedará como `https://cal.com/sastreria-taya`.
3. **Zona horaria:** `America/Montevideo`.
4. En **Settings → General**, cambiar el idioma a **Español**.
5. Cuando lo pida, **conectar Google Calendar** y dar permiso para:
   - revisar si hay eventos (así no ofrece horarios ocupados);
   - agregar las citas al calendario.

## Paso 2 — Horario del local

En **Disponibilidad**, crear un horario llamado **Horario del local**:

| Día | Mañana | Tarde |
|---|---|---|
| Lunes a sábado | 10:00 a 12:00 | 16:00 a 19:30 |
| Domingo | cerrado | cerrado |

- Se cargan dos franjas por día (con el botón **+** al lado de cada día).
- Feriados y vacaciones: en la misma pantalla, **Date overrides** (fechas especiales).
- Marcarlo como horario **por defecto**.

> Si el sábado tiene otro horario, se cambia solo ese día. (Pregunta abierta en el plan.)

## Paso 3 — El tipo de evento "Prueba de vestuario"

Cal.com crea dos eventos de ejemplo ("Reunión de 15 min" y "Reunión de 30 min"). **Borrarlos u ocultarlos**
(interruptor "Ocultar del perfil"), para que la clienta vea solo la prueba.

En **Tipos de evento → Nuevo**:

| Campo | Valor |
|---|---|
| Título | Prueba de vestuario |
| URL | `prueba` → queda `https://cal.com/sastreria-taya/prueba` |
| Duración | 30 minutos |
| Descripción | Vení a probarte con María y Nazarena: te ayudamos a encontrar la prenda, el talle y el corte. |
| Ubicación | **En persona (dirección del organizador)**: Calle Rivera, Santa Lucía, Canelones |
| Horario | Horario del local |

### Pestaña "Límites"
| Opción | Valor sugerido | Por qué |
|---|---|---|
| Aviso mínimo | 2 horas | Que nadie reserve para "dentro de 5 minutos" |
| Reservar hasta | 60 días hacia adelante | Alcanza para casamientos y quinces |
| Tiempo entre citas (buffer) | 0 | Los turnos van seguidos |

### Pestaña "Avanzado"
- **Ofrecer lugares (Offer seats): 2.** Es lo que permite 2 clientas por turno (2 probadores).
  - **Si esta opción aparece bloqueada o pide pagar:** avisar a Ale. La alternativa gratis son dos agendas de Google (una de María y una de Nazarena) y dos botones en la web.
- **Requiere confirmación:** desactivado (la reserva queda firme al instante).

## Paso 4 — Preguntas del formulario de reserva

En la pestaña **Avanzado → Preguntas de reserva**:

| Pregunta | Tipo | Obligatoria |
|---|---|---|
| Nombre | (viene por defecto) | Sí |
| Correo | (viene por defecto) | Sí — Cal.com lo pide siempre |
| Celular | Teléfono | Sí |
| ¿Por dónde preferís los avisos? | Opciones: WhatsApp / Correo | Sí |
| Tipo de evento | Opciones: Casamiento / Quince / Graduación / Fiesta de fin de año / Otro | No |
| Acepto que Sastrería Taya use estos datos para gestionar mi prueba y enviarme avisos. | Casilla | Sí |

- Quitar cualquier otra pregunta que venga por defecto (por ejemplo, "Notas adicionales") si no la quieren.
- La casilla de consentimiento es necesaria por la Ley 18.331. Cuando exista la política de privacidad, se agrega su enlace en ese texto.

## Paso 5 — Apariencia

En **Settings → Apariencia**:
- **Color de la marca:** `#8E2436` (el bordó del sitio).
- **Tema:** claro.
- Foto o logo del perfil: el logo de Taya (`img/marca/logo-taya.png`).

> En el plan gratuito, la página muestra la marca de Cal.com. Es normal.

## Paso 6 — Probar antes de publicar

1. Abrir `https://cal.com/sastreria-taya/prueba` desde el celular.
2. Hacer **3 reservas de prueba** en el **mismo horario**: las dos primeras deben entrar y la tercera ya no debe ver ese horario.
3. Revisar:
   - que las citas aparezcan en Google Calendar;
   - qué correo de confirmación recibe la clienta y desde qué dirección llega;
   - si llegan recordatorios (en el plan gratuito puede que no).
4. Cancelar las reservas de prueba.

## Paso 7 — Conectar con la web

Pasarle a Ale el enlace final (por ejemplo `https://cal.com/sastreria-taya/prueba`). Se pega en la constante
`RESERVA` de `js/propuesta-3.js` y todos los botones "Reservá tu prueba" quedan apuntando a la agenda.

Opcional, para más adelante: en el tipo de evento, botón **Embed → Al hacer clic en un elemento**, copiar el código
que da Cal.com y pasárselo a Ale. Con eso la agenda se abre en una ventana dentro del sitio, sin salir de la página.

## Cómo quedó configurada (27/11/2026)

- Enlace del evento: `https://cal.com/sastreria-taya/pruebadevestuario`. La web usa
  `https://cal.com/sastreria-taya/pruebadevestuario?attendeePhoneNumber=%2B598` para que el celular arranque en Uruguay
  (sin eso Cal.com propone Brasil y no hay ajuste para cambiarlo).
- Horario lunes a sábado 10:00–12:00 y 16:00–19:30; 25/12 y 1/1 cerrados; 2 lugares por turno; sin cobro.
- Formulario: nombre y celular obligatorios, **correo opcional** (no todas las clientas tienen), notas, consentimiento
  obligatorio. No se pregunta el canal de aviso: **el canal central es WhatsApp**.
- Prueba hecha: 3 reservas en el mismo turno → entran 2, la tercera no ve el horario. Las citas caen en Google Calendar.
- Limitaciones del plan gratis: la plantilla de los correos no se puede editar.
- **Para cancelar hay que usar el enlace "Cancelar" dentro del correo de Cal.com.** Responder "No" en la barra de Gmail
  ("¿Vas a asistir?") solo avisa a Google Calendar: Cal.com no se entera y el lugar queda ocupado.

## Antes de abrir la agenda al público

- [ ] Política de privacidad publicada en la web (qué datos se piden y para qué).
- [ ] Inscripción de la base de datos en la URCDP (hay 90 días desde que empieza a usarse).
- [ ] Reservas de prueba hechas y canceladas.
