const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const btnTodos = document.querySelector(".todos");
const btnEntradas = document.querySelector(".entradas");
const btnPiqueos = document.querySelector(".piqueos");
const btnPrincipales = document.querySelector(".principales");
const btnPostres = document.querySelector(".postres");
const btnRefrescos = document.querySelector(".refrescos");
const btnJugos = document.querySelector(".jugos");
const btnVinos = document.querySelector(".vinos");
const btnCocteles = document.querySelector(".cocteles");
const contenedorPlatillos = document.querySelector(".platillos");
const imagenes = document.querySelectorAll(".box-img img");

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  platillos();

  // Actualizar año del footer automáticamente
  const footer = document.querySelector(".footer p");
  footer.textContent = `Todos los derechos reservados © ${new Date().getFullYear()} Sabores Mágicos`;

  // Animación de aparición de imágenes
  imagenes.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });
});

const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};

const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
  botonCerrar();
};

const botonCerrar = () => {
  if (document.querySelector(".pantalla-completa")) return;

  const btnCerrar = document.createElement("p");
  const overlay = document.createElement("div");
  overlay.classList.add("pantalla-completa");
  btnCerrar.textContent = "x";
  btnCerrar.classList.add("btn-cerrar");

  document.body.appendChild(overlay);
  navegacion.appendChild(btnCerrar);

  cerrarMenu(btnCerrar, overlay);
};

const cerrarMenu = (boton, overlay) => {
  const cerrar = () => {
    navegacion.classList.add("ocultar");
    overlay.remove();
    boton.remove();
  };

  boton.addEventListener("click", cerrar);
  overlay.addEventListener("click", cerrar);
};

const platillos = () => {
  const platillosArreglo = Array.from(document.querySelectorAll(".platillo"));

  const entradas = platillosArreglo.filter(p => p.dataset.platillo === "entrada");
  const piqueos = platillosArreglo.filter(p => p.dataset.platillo === "piqueo");
  const principales = platillosArreglo.filter(p => p.dataset.platillo === "principal");
  const postres = platillosArreglo.filter(p => p.dataset.platillo === "postre");
  const refrescos = platillosArreglo.filter(p => p.dataset.platillo === "refresco");
  const jugos = platillosArreglo.filter(p => p.dataset.platillo === "jugo");
  const vinos = platillosArreglo.filter(p => p.dataset.platillo === "vino");
  const cocteles = platillosArreglo.filter(p => p.dataset.platillo === "coctel");

  mostrarPlatillos(entradas, piqueos, principales, postres, refrescos, jugos, vinos, cocteles, platillosArreglo);
};

const mostrarPlatillos = (entradas, piqueos, principales, postres, refrescos, jugos, vinos, cocteles, todos) => {
  const mostrar = (items) => {
    contenedorPlatillos.innerHTML = "";
    items.forEach(item => contenedorPlatillos.appendChild(item));
  };

  btnEntradas.addEventListener("click", () => mostrar(entradas));
  btnPiqueos.addEventListener("click", () => mostrar(piqueos));
  btnPrincipales.addEventListener("click", () => mostrar(principales));
  btnPostres.addEventListener("click", () => mostrar(postres));
  btnRefrescos.addEventListener("click", () => mostrar(refrescos));
  btnJugos.addEventListener("click", () => mostrar(jugos));
  btnVinos.addEventListener("click", () => mostrar(vinos));
  btnCocteles.addEventListener("click", () => mostrar(cocteles));
  btnTodos.addEventListener("click", () => mostrar(todos));
};

//botón activo en filtros de platillos
const botonesFiltros = document.querySelectorAll(".botones-platillos button");

botonesFiltros.forEach(boton => {
  boton.addEventListener("click", () => {
    botonesFiltros.forEach(b => b.classList.remove("activo"));
    boton.classList.add("activo");
  });
});

