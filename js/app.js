const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const imagenes = document.querySelectorAll("img");
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

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  platillos();
});

const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};

const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
  botonCerrar();
};

const botonCerrar = () => {
  const btnCerrar = document.createElement("p");
  const overlay = document.createElement("div");
  overlay.classList.add("pantalla-completa");
  const body = document.querySelector("body");
  if (document.querySelectorAll(".pantalla-completa").length > 0) return;
  body.appendChild(overlay);
  btnCerrar.textContent = "x";
  btnCerrar.classList.add("btn-cerrar");

  // while(navegacion.children[5]){
  //     navegacion.removeChild(navegacion.children[5]);
  // }
  navegacion.appendChild(btnCerrar);
  cerrarMenu(btnCerrar, overlay);
};

/*const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imagen = entry.target;
      imagen.src = imagen.dataset.src;
      observer.unobserve(imagen);
    }
  });
});

imagenes.forEach((imagen) => {
  observer.observe(imagen);
});*/

const cerrarMenu = (boton, overlay) => {
  boton.addEventListener("click", () => {
    navegacion.classList.add("ocultar");
    overlay.remove();
    boton.remove();
  });

  overlay.onclick = function () {
    overlay.remove();
    navegacion.classList.add("ocultar");
    boton.remove();
  };
};

const platillos = () => {
  let platillosArreglo = [];

  const platillos = document.querySelectorAll(".platillo");

  platillos.forEach(
    (platillo) => (platillosArreglo = [...platillosArreglo, platillo])
  );

  const entradas = platillosArreglo.filter((entrada) => entrada.getAttribute("data-platillo") === "entrada");
  const piqueos = platillosArreglo.filter((piqueo) => piqueo.getAttribute("data-platillo") === "piqueo");
  const principales = platillosArreglo.filter((principal) => principal.getAttribute("data-platillo") === "principal");
  const postres = platillosArreglo.filter((postre) => postre.getAttribute("data-platillo") === "postre");
  const refrescos = platillosArreglo.filter((refresco) => refresco.getAttribute("data-platillo") === "refresco");
  const jugos = platillosArreglo.filter((jugo) => jugo.getAttribute("data-platillo") === "jugo");
  const vinos = platillosArreglo.filter((vino) => vino.getAttribute("data-platillo") === "vino");
  const cocteles = platillosArreglo.filter((coctel) => coctel.getAttribute("data-platillo") === "coctel");
  mostrarPlatillos(entradas, piqueos, principales, postres, refrescos, jugos, vinos, cocteles, platillosArreglo);
};

const mostrarPlatillos = (entradas, piqueos, principales, postres, refrescos, jugos, vinos, cocteles, todos) => {
  btnEntradas.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    entradas.forEach((entrada) => contenedorPlatillos.appendChild(entrada));
  });
  btnPiqueos.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    piqueos.forEach((piqueo) => contenedorPlatillos.appendChild(piqueo));
  });
  btnPrincipales.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    principales.forEach((principal) => contenedorPlatillos.appendChild(principal));
  });
  btnPostres.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    postres.forEach((postre) => contenedorPlatillos.appendChild(postre));
  });
  btnRefrescos.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    refrescos.forEach((refresco) => contenedorPlatillos.appendChild(refresco));
  });
  btnJugos.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    jugos.forEach((jugo) => contenedorPlatillos.appendChild(jugo));
  });
  btnVinos.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    vinos.forEach((vino) => contenedorPlatillos.appendChild(vino));
  });
  btnCocteles.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    cocteles.forEach((coctel) => contenedorPlatillos.appendChild(coctel));
  });
  btnTodos.addEventListener("click", () => {
    limpiarHtml(contenedorPlatillos);
    todos.forEach((todo) => contenedorPlatillos.appendChild(todo));
  });
};

const limpiarHtml = (contenedor) => {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
};

// Aparecer suavemente las imágenes cuando se cargan
document.querySelectorAll('.box-img img').forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });
});