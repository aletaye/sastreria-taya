// Sastrería Taya — Propuesta 3: "Todos bailan" con las mejoras de la revisión UI/UX
// Igual que propuesta-2.js, más la pausa del cartel corredizo (sección 2).

// Número de WhatsApp del local, con código de país y sin espacios (ej.: "59899123456").
// Mientras esté vacío, los botones de WhatsApp llevan a la sección Visitanos.
const WHATSAPP = "";
const MENSAJE_WHATSAPP = "Hola, quiero consultar por una prenda para una fiesta.";

// Enlace de la página de reservas de pruebas (Cal.com, evento "Prueba de vestuario").
// "?attendeePhoneNumber=%2B598" precarga el prefijo de Uruguay en el celular (si no, Cal.com propone Brasil).
// Si queda vacío, "Reservá tu prueba" lleva a la sección Visitanos.
// Para cambiar de proveedor (Google Calendar u otro) alcanza con cambiar este enlace: el resto no se toca.
const RESERVA = "https://cal.com/sastreria-taya/pruebadevestuario?attendeePhoneNumber=%2B598";

const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1. Menú del celular
const menuBoton = document.getElementById("menu-boton");
const menu = document.getElementById("menu");
const escritorio = window.matchMedia("(min-width: 1024px)");

function ajustarMenu() {
  if (escritorio.matches) {
    menu.hidden = false;
  } else {
    menu.hidden = menuBoton.getAttribute("aria-expanded") !== "true";
  }
}
menuBoton.addEventListener("click", () => {
  const abierto = menuBoton.getAttribute("aria-expanded") === "true";
  menuBoton.setAttribute("aria-expanded", String(!abierto));
  menuBoton.textContent = abierto ? "Menú" : "Cerrar";
  ajustarMenu();
});
menu.addEventListener("click", (e) => {
  if (e.target.closest("a") && !escritorio.matches) {
    menuBoton.setAttribute("aria-expanded", "false");
    menuBoton.textContent = "Menú";
    ajustarMenu();
  }
});
escritorio.addEventListener("change", ajustarMenu);
ajustarMenu();

// 2. Títulos de la portada como cartel corredizo vertical: bajan, desaparecen por abajo
//    y vuelven a entrar por arriba sin cortes. Si la persona pidió menos movimiento, quedan quietos.
const VELOCIDAD = 40; // píxeles por segundo
const lemas = [...document.querySelectorAll(".lema")];

function armarLemas() {
  lemas.forEach((lema) => {
    const texto = lema.querySelector(".lema__texto");
    lema.querySelector(".lema__pista")?.remove(); // al recalcular, borra la pista anterior
    if (sinMovimiento) { lema.classList.remove("en-movimiento"); return; }

    const pista = document.createElement("span");
    pista.className = "lema__pista";
    pista.setAttribute("aria-hidden", "true"); // las copias no se leen; el lector lee el texto original
    lema.append(pista);
    lema.classList.add("en-movimiento");

    // primer juego: copias suficientes para cubrir todo el alto del costado
    do {
      pista.append(texto.cloneNode(true));
    } while (pista.offsetHeight < lema.clientHeight && pista.children.length < 20);
    const altoJuego = pista.offsetHeight;

    // segundo juego idéntico, pegado debajo del primero
    [...pista.children].forEach((copia) => pista.append(copia.cloneNode(true)));

    // misma velocidad en los dos costados, aunque los textos tengan distinto largo
    pista.style.setProperty("--duracion", (altoJuego / VELOCIDAD).toFixed(1) + "s");
  });
}
armarLemas();
// cuando termina de cargar la tipografía cambian las medidas: se vuelve a armar
document.fonts?.ready.then(armarLemas);
// al cambiar el ancho de la ventana (girar el celular, achicar el navegador) también
let anchoAnterior = window.innerWidth;
let esperaLemas;
window.addEventListener("resize", () => {
  if (window.innerWidth === anchoAnterior) return; // en celular la barra del navegador cambia solo el alto
  anchoAnterior = window.innerWidth;
  clearTimeout(esperaLemas);
  esperaLemas = setTimeout(armarLemas, 200);
});

// Pausa del cartel (WCAG 2.2.2: lo que se mueve más de 5 segundos tiene que poder frenarse).
// Sirven el botón "Pausar movimiento" (también con teclado) y un toque sobre cualquiera de los títulos.
const baile = document.querySelector(".baile");
const pausaBoton = document.getElementById("pausa-lemas");

function alternarPausa() {
  const enPausa = baile.classList.toggle("en-pausa");
  pausaBoton.setAttribute("aria-pressed", String(enPausa));
  pausaBoton.textContent = enPausa ? "Reanudar movimiento" : "Pausar movimiento";
}
if (sinMovimiento) {
  pausaBoton.hidden = true; // los títulos ya están quietos: el botón no hace falta
} else {
  pausaBoton.addEventListener("click", alternarPausa);
  lemas.forEach((lema) => lema.addEventListener("click", alternarPausa));
}

// 3. Tendedero: carrusel manual — flechas, dedo (celular) o arrastre con el mouse.
//    Las perchas siguen la cuerda diagonal en escritorio.
const carrusel = document.getElementById("carrusel");
const pista = document.getElementById("tendedero");
const perchas = [...pista.children];
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

const paso = () => perchas[0].getBoundingClientRect().width + parseFloat(getComputedStyle(pista).columnGap || 16);
const alFinal = () => pista.scrollLeft + pista.clientWidth >= pista.scrollWidth - 4;
const alInicio = () => pista.scrollLeft <= 4;
const comportamiento = sinMovimiento ? "auto" : "smooth";

function mover(direccion) {
  pista.scrollBy({ left: direccion * paso(), behavior: comportamiento });
}
anterior.addEventListener("click", () => mover(-1));
siguiente.addEventListener("click", () => mover(1));

// cada percha baja según dónde está, para seguir la cuerda en diagonal (en celular la cuerda es recta)
function seguirCuerda() {
  const angulo = parseFloat(getComputedStyle(carrusel).getPropertyValue("--angulo")) || 0;
  const pendiente = Math.tan(angulo * Math.PI / 180);
  const izquierda = carrusel.getBoundingClientRect().left;
  perchas.forEach((li) => {
    const r = li.getBoundingClientRect();
    const centro = r.left + r.width / 2 - izquierda;
    li.style.setProperty("--caida", (centro * pendiente).toFixed(1) + "px");
  });
  // las flechas se apagan en cada punta del perchero
  anterior.disabled = alInicio();
  siguiente.disabled = alFinal();
}

let ultimaX = pista.scrollLeft;
let esperaBalanceo;
let cuadro = 0;
pista.addEventListener("scroll", () => {
  if (!cuadro) cuadro = requestAnimationFrame(() => { cuadro = 0; seguirCuerda(); });
  if (sinMovimiento) return;
  const delta = pista.scrollLeft - ultimaX;
  ultimaX = pista.scrollLeft;
  const grados = Math.max(-6, Math.min(6, -delta / 4));
  pista.style.setProperty("--balanceo", grados.toFixed(2));
  clearTimeout(esperaBalanceo);
  esperaBalanceo = setTimeout(() => pista.style.setProperty("--balanceo", "0"), 120);
}, { passive: true });
window.addEventListener("resize", seguirCuerda);
seguirCuerda();

// arrastrar con el mouse (en el celular el dedo ya desliza solo)
let arrastre = null;
pista.addEventListener("pointerdown", (e) => {
  if (e.pointerType !== "mouse" || e.button !== 0) return;
  arrastre = { x: e.clientX, scroll: pista.scrollLeft, movio: false };
});
window.addEventListener("pointermove", (e) => {
  if (!arrastre) return;
  const dx = e.clientX - arrastre.x;
  if (Math.abs(dx) > 5) { arrastre.movio = true; pista.classList.add("arrastrando"); }
  if (arrastre.movio) pista.scrollLeft = arrastre.scroll - dx;
});
window.addEventListener("pointerup", () => {
  if (!arrastre) return;
  const movio = arrastre.movio;
  arrastre = null;
  if (movio) {
    // se quita un instante después para que soltar no abra la tarjeta
    setTimeout(() => pista.classList.remove("arrastrando"), 0);
    // al soltar, acomoda la percha más cercana
    const p = paso();
    pista.scrollTo({ left: Math.round(pista.scrollLeft / p) * p, behavior: comportamiento });
  }
});

// 4. Reserva de pruebas: todos los botones con data-reserva van a la agenda, en una pestaña nueva
if (RESERVA) {
  document.querySelectorAll("[data-reserva]").forEach((a) => {
    a.href = RESERVA;
    a.target = "_blank";
    a.rel = "noopener";
    // aviso solo para lectores de pantalla: el enlace abre otra pestaña
    const aviso = document.createElement("span");
    aviso.className = "solo-lector";
    aviso.textContent = " (se abre en una pestaña nueva)";
    a.append(aviso);
  });
}

// 5. WhatsApp
if (WHATSAPP) {
  const enlace = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`;
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    a.href = enlace;
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll("[data-whatsapp-texto]").forEach((s) => {
    s.textContent = "+" + WHATSAPP;
  });
}

// 6. Año del pie
document.getElementById("anio").textContent = new Date().getFullYear();
