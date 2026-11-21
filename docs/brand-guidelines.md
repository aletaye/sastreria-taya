# Sastrería Taya — Manual de marca v1.0

> Última actualización: 2026-11-21
> Estado: Borrador (a revisar con María y Nazarena)
> Fuente: decisiones del `CLAUDE.md` del proyecto y de `css/styles.css`.
> Los títulos de sección van en inglés porque los scripts de la skill `brand` los buscan con ese nombre.

## Quick Reference (resumen)

| Elemento | Valor |
|---------|-------|
| Color principal (acción) | #8E2436 bordó |
| Color secundario | #1F5E54 esmeralda |
| Fondo | #F3EDE2 crema |
| Tipografía de títulos | DM Serif Display |
| Tipografía de texto | DM Sans (17px) |
| Acento | Pinyon Script (una palabra suelta) |
| Voz | Cercana, en voseo, sin estereotipos de cuerpo |
| Lemas | "Calidad y perfección" · "Si es Taya, no falla" |

---

## 1. Color Palette (paleta "El perchero de Taya")

### Primary Colors (principales)

| Nombre | Hex | RGB | Uso |
|------|-----|-----|-------|
| Bordó | #8E2436 | rgb(142,36,54) | Acción principal: un solo botón bordó por pantalla, "Reservá tu prueba" |
| Bordó oscuro | #6E1A29 | rgb(110,26,41) | Estado hover del botón bordó |

### Secondary Colors (secundarios)

| Nombre | Hex | RGB | Uso |
|------|-----|-----|-------|
| Esmeralda | #1F5E54 | rgb(31,94,84) | Títulos, enlaces y botón de WhatsApp |
| Azul | #2B3F8C | rgb(43,63,140) | Categoría Hombre |
| Menta | #8CCEB5 | rgb(140,206,181) | Solo como fondo, con texto en tinta |
| Rosa | #E7A1B0 | rgb(231,161,176) | Solo como fondo, con texto en tinta (categoría Mujer) |
| Mostaza | #D9A441 | rgb(217,164,65) | Solo como fondo, con texto en tinta |
| Dorado | #B8935A | rgb(184,147,90) | Solo líneas y detalles (cuerda del perchero, ganchos); nunca texto |

### Neutral Palette (neutros)

| Nombre | Hex | RGB | Uso |
|------|-----|-----|-------|
| Crema | #F3EDE2 | rgb(243,237,226) | Fondo de página (liso; se descartaron fondos tipo tela) |
| Crema claro | #FBF8F2 | rgb(251,248,242) | Superficies, tarjetas, texto sobre bordó o esmeralda |
| Tinta | #1E1B1C | rgb(30,27,28) | Texto principal |
| Tinta suave | #5C5250 | rgb(92,82,80) | Texto secundario, bajadas, avisos |
| Línea | #D9CFBF | rgb(217,207,191) | Divisores y bordes |

### Semantic Colors (estados, back-office — propuesta a confirmar)

| Estado | Hex | Uso |
|-------|-----|-------|
| Disponible | #1F5E54 | Prenda disponible (esmeralda) |
| En depósito | #D9A441 | Prenda apartada para ajustes (mostaza, con texto en tinta) |
| Alquilada | #2B3F8C | Prenda en poder del cliente (azul) |
| Tintorería | #8CCEB5 | Limpieza y control (menta, con texto en tinta) |
| En reparación | #8E2436 | Daño o atraso (bordó) |

### Accessibility (contraste medido)

- Tinta sobre crema: 14,7:1 (AAA)
- Tinta suave sobre crema: 6,5:1 (AA)
- Crema claro sobre bordó: 8,1:1 (AAA)
- Crema claro sobre esmeralda: 7,1:1 (AAA)
- Todo lo tocable mide al menos 48px; foco visible de 2px en tinta.

---

## 2. Typography (tipografías)

### Font Stack

```css
--font-heading: 'DM Serif Display', Georgia, 'Times New Roman', serif;
--font-body: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
--font-accent: 'Pinyon Script', 'Brush Script MT', cursive;
```

### Type Scale (escala)

| Elemento | Escritorio | Celular | Peso | Interlineado |
|---------|----------------|---------------|--------|-------------|
| Título de portada (H1) | 64px | 40px | 400 | 68px / 44px |
| Título de sección (H2) | 40px | 32px | 400 | 46px / 38px |
| Subtítulo (H3) | 24px | 24px | 400 | 30px |
| Texto | 17px | 17px | 400 | 26px |
| Texto chico | 15px | 15px | 400 | 22px |
| Etiqueta | 13px | 13px | 600, mayúsculas | 16px |
| Acento (Pinyon Script) | 32px | 32px | 400 | 36px |

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&family=DM+Serif+Display&family=Pinyon+Script&display=swap" rel="stylesheet">
```

---

## 3. Logo Usage (uso del logo)

### Variants

| Variante | Archivo | Uso |
|---------|------|----------|
| Logo redondo | img/marca/logo-taya.png | Cabecera (44px) y pie (64px) |
| Alta resolución | Pendiente | Impresos, Instagram, etiquetas |

### Clear Space

Espacio libre alrededor del logo: al menos la mitad de su diámetro.

### Minimum Size

| Contexto | Ancho mínimo |
|---------|---------------|
| Digital | 44px |
| Impreso | 20mm (con el logo en alta resolución) |

### Don'ts

- No rotarlo, deformarlo ni recortarlo
- No cambiarle los colores
- No agregarle sombras ni efectos
- No ponerlo sobre fotos recargadas sin contraste suficiente

---

## 4. Voice & Tone (voz y tono)

### Brand Personality

| Rasgo | Descripción |
|-------|-------------|
| **Cercana** | Habla como María y Nazarena en el local: de vos, con calidez |
| **Experta** | Tres generaciones de oficio desde 1940: sabe qué le queda bien a cada cuerpo |
| **Inclusiva** | Para chicas jóvenes y señoras, adolescentes y padres, niñas y niños; sin estereotipos de cuerpo |
| **Festiva** | Celebra el evento: la fiesta empieza en el perchero |

### Voice Chart

| Rasgo | Somos | No somos |
|-------|--------|------------|
| Cercana | Voseo uruguayo: "buscás", "vení", "reservá" | Distante ("usted") ni con "tú" ("buscas", "ven") |
| Experta | Asesoramiento concreto | Soberbia ni técnica de más |
| Inclusiva | "Cada cuerpo la luce a su manera" | Comentarios sobre talles o "defectos" |
| Festiva | Alegre, con ritmo | Con emojis ni signos de exclamación en cadena |

### Tone by Context

| Contexto | Tono | Ejemplo |
|---------|------|---------|
| Portada | Festivo | "Vos andá y bailá" · "Sastrería Taya te viste como nunca" |
| Invitación | Cercano | "Vení a probarte con María y Nazarena, te ayudamos a elegir." |
| Asesoramiento | Experto y amable | "¿No está exactamente lo que buscás? Siempre hay algo que se adapte a ti, y te ayudamos a encontrarlo." |
| Recordatorio | Claro y breve | "Te esperamos el sábado a las 10:30 para tu prueba." |
| Historia | Orgulloso | "Sastrería Taya en Santa Lucía año 1940, desde entonces vistiendo siempre con el mejor gusto" |

### Approved Phrases (frases aprobadas)

- "Tu fiesta empieza en el perchero."
- "Te mostramos la prenda sin moldes: cada cuerpo la luce a su manera."
- "María y Nazarena saben qué te queda bien antes de que te lo pruebes."
- "Calidad y perfección." (cartel original) · "Si es Taya, no falla." (Instagram)

### Prohibited Terms

Emojis y "usted" vienen de decisiones ya tomadas; el resto es una propuesta a confirmar.

| Avoid (evitar) | Motivo |
|-------|--------|
| Emojis | Decisión de tono del proyecto |
| Usted | La marca habla de vos |
| Disimular | Habla de "defectos" del cuerpo |
| Talla única | No refleja el asesoramiento por cuerpo |
| Barato | Desvaloriza; mejor "accesible" o el precio concreto |

---

## 5. Imagery Guidelines (imágenes)

### Photography Style

- **Catálogo:** prenda sola en percha sobre fondo crema, vertical 3:4, 720px de ancho, sin personas, en webp.
- **Portada:** "Todos bailan": personas de fiesta bailando en fila, recortadas sobre fondo blanco que se funde con el crema.
- **Luz:** suave y natural; colores fieles a la prenda.
- **Nombres de archivo:** el código de la prenda (VM mujer, VH hombre, VN niñas, AC accesorios), por ejemplo `VM-02.webp`.

### Icons

- Pocos y lineales, en tinta; nunca emojis como íconos.

---

## 6. Design Components (componentes)

### Buttons

| Tipo | Fondo | Texto | Bordes |
|------|------------|------|---------------|
| Principal | #8E2436 | #FBF8F2 | Píldora (999px) |
| WhatsApp | #1F5E54 | #FBF8F2 | Píldora (999px) |
| Secundario | Transparente, borde #5C5250 | #1E1B1C | Píldora (999px) |
| Claro (sobre bordó) | #FBF8F2 | #8E2436 | Píldora (999px) |

### Spacing Scale

| Token | Valor | Uso |
|-------|-------|-------|
| space-1 | 4px | Muy ajustado |
| space-2 | 8px | Compacto |
| space-4 | 16px | Estándar y margen lateral en celular |
| space-6 | 24px | Entre bloques |
| space-8 | 32px | Separaciones grandes |
| space-12 | 48px | Separación de secciones (celular) |
| space-16 | 64px | Separación de secciones (escritorio) |

### Border Radius

| Elemento | Radio |
|---------|--------|
| Botones | 999px |
| Tarjetas de prenda | 8px |
| Paneles | 16px |
| Etiquetas | 4px |

---

## AI Image Generation

### Base Prompt Template

```
Fotografía de moda de fiesta, cálida y elegante, fondo crema liso (#F3EDE2), luz suave natural, acentos bordó (#8E2436), esmeralda (#1F5E54) y dorado (#B8935A), composición limpia, sin texto ni letras.
```

### Style Keywords

| Categoría | Palabras clave |
|----------|----------|
| **Lighting** | luz suave, natural, cálida |
| **Mood** | festivo, elegante, cercano |
| **Composition** | prenda centrada, vertical, mucho aire |
| **Treatment** | colores fieles, sin filtros fuertes |
| **Aesthetic** | clásico con frescura, sastrería tradicional |

### Visual Mood Descriptors

- Fiesta que empieza en el perchero
- Oficio y calidad desde 1940
- Cada cuerpo luce la prenda a su manera

### Visual Don'ts

| Avoid (evitar) | Motivo |
|-------|-------|
| Fondos tipo tela (satén, lentejuelas, encaje) | Se descartaron: el fondo queda crema liso |
| Cuerpos estereotipados | Va contra el tono inclusivo de la marca |
| Texto dentro de la imagen generada | El texto va en HTML para que sea editable y accesible |

---

## Changelog

| Versión | Fecha | Cambios |
|---------|------|---------|
| 1.0 | 2026-11-21 | Primera versión, armada a partir del `CLAUDE.md` y `css/styles.css` |
