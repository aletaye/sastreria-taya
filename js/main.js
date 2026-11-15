// Sastrería Taya — comportamiento de la portada

// Número de WhatsApp del local, con código de país y sin espacios (ej.: "59899123456").
// Mientras esté vacío, los botones de WhatsApp llevan a la sección Visitanos.
const WHATSAPP = "";
const MENSAJE_WHATSAPP = "Hola, quiero consultar por una prenda para una fiesta.";

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

// 2. Acordeón de categorías: se abre una franja por vez
const acordeon = document.getElementById("acordeon");
acordeon.addEventListener("click", (e) => {
  const franja = e.target.closest(".acordeon__franja");
  if (!franja) return;
  acordeon.querySelectorAll(".acordeon__item").forEach((item) => {
    const boton = item.querySelector(".acordeon__franja");
    const panel = item.querySelector(".acordeon__panel");
    const esEste = boton === franja;
    const abrir = esEste ? boton.getAttribute("aria-expanded") !== "true" : false;
    boton.setAttribute("aria-expanded", String(abrir));
    panel.hidden = !abrir;
    item.classList.toggle("abierto", abrir);
  });
});

// 3. Tendedero: carrusel con flechas, arrastre con mouse, desfile automático y perchas que siguen la cuerda
const carrusel = document.getElementById("carrusel");
const pista = document.getElementById("tendedero");
const perchas = [...pista.children];
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const desfileBoton = document.getElementById("desfile-boton");

const paso = () => perchas[0].getBoundingClientRect().width + parseFloat(getComputedStyle(pista).columnGap || 16);
const alFinal = () => pista.scrollLeft + pista.clientWidth >= pista.scrollWidth - 4;
const alInicio = () => pista.scrollLeft <= 4;
const comportamiento = sinMovimiento ? "auto" : "smooth";

function mover(direccion) {
  if (direccion > 0 && alFinal()) {
    pista.scrollTo({ left: 0, behavior: comportamiento }); // vuelve al principio del perchero
  } else {
    pista.scrollBy({ left: direccion * paso(), behavior: comportamiento });
  }
}
anterior.addEventListener("click", () => { detenerDesfile(); mover(-1); });
siguiente.addEventListener("click", () => { detenerDesfile(); mover(1); });

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
  anterior.disabled = alInicio();
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
  detenerDesfile();
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

// desfile automático: avanza una prenda cada 5 s; se pausa al pasar el mouse, tocar o enfocar,
// y no corre si el carrusel no se ve o si la persona pidió menos movimiento
let desfile = null;
let desfileActivo = !sinMovimiento;
let visible = true;
function iniciarDesfile() {
  if (!desfileActivo || desfile || !visible || document.hidden) return;
  desfile = setInterval(() => mover(1), 5000);
}
function pausarDesfile() { clearInterval(desfile); desfile = null; }
function detenerDesfile() {
  desfileActivo = false;
  pausarDesfile();
  desfileBoton.setAttribute("aria-pressed", "true");
  desfileBoton.textContent = "Reanudar desfile";
}
desfileBoton.addEventListener("click", () => {
  if (desfileActivo) {
    detenerDesfile();
  } else {
    desfileActivo = true;
    desfileBoton.setAttribute("aria-pressed", "false");
    desfileBoton.textContent = "Pausar desfile";
    iniciarDesfile();
  }
});
if (sinMovimiento) desfileBoton.hidden = true;
carrusel.addEventListener("mouseenter", pausarDesfile);
carrusel.addEventListener("mouseleave", iniciarDesfile);
carrusel.addEventListener("focusin", pausarDesfile);
carrusel.addEventListener("focusout", iniciarDesfile);
pista.addEventListener("touchstart", detenerDesfile, { passive: true });
document.addEventListener("visibilitychange", () => (document.hidden ? pausarDesfile() : iniciarDesfile()));
if ("IntersectionObserver" in window) {
  new IntersectionObserver(([entrada]) => {
    visible = entrada.isIntersecting;
    visible ? iniciarDesfile() : pausarDesfile();
  }, { threshold: 0.4 }).observe(carrusel);
}
iniciarDesfile();

// 4. WhatsApp
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

// 5. Año del pie
document.getElementById("anio").textContent = new Date().getFullYear();
