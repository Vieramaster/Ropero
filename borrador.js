/*Modal cuenta*/

const BtnOpenAcc = document.querySelector("#btn-open-acc");
const modalAcc = document.querySelector("#modal-acc");

BtnOpenAcc.addEventListener("click", () => {
  modalAcc.showModal();
});
window.onclick = function (event) {
  if (event.target == modalAcc) modalAcc.close();
};
/* CIRCULO CROMATICO*/

/* SUSTRAER LOS ARRAYS*/

function datosRopa() {
  return fetch("./database.json")
    .then((response) => response.json())
    .catch(console.error);
}

function datosColor() {
  return fetch("./dataColor.json")
    .then((response) => response.json())
    .catch(console.error);
}
const box1 = document.querySelector(".box");
const box2 = document.querySelector(".box2");
const fafa = {
  top: {},
  abrigo:{}
};

/*-------------------------- funciones------------------------------*/

function cargarColores(
  imagenSelecionada,
  imagen2,
  imagenRuta,
  imagen,
  tipoRopa
) {
  let bloqueBoton = document.createElement("div");
  bloqueBoton.classList.add("bloqueBoton");
  box2.appendChild(bloqueBoton);
  datosColor().then((datos) => {
    datos.forEach((dato, index) => {
      let nombre = dato.nombre;
      let hex = dato.hex;
      let tono = dato.tono;
      let button = document.createElement("button");
      button.title = nombre;
      button.style.backgroundColor = hex;
      button.classList.add("botonaso");
      bloqueBoton.appendChild(button);

      button.addEventListener("click", () => {
        fafa[tipoRopa].color = hex;
        if (tono == "oscuro") {
          imagenRuta.src = imagen2;
          imagenSelecionada.style.backgroundColor = hex;
        } else {
          imagenRuta.src = imagen;
          imagenSelecionada.style.backgroundColor = hex;
        }
      });
    });
  });
}

function cargarImagenes(imagenesProp, tipoRopa) {
  imagenesProp.forEach((ropa) => {
    let imagenRuta = document.createElement("img");
    imagenRuta.src = ropa.imagen;
    let imagenButton = document.createElement("button");
    let nombre = ropa.nombre
    imagenButton.appendChild(imagenRuta);
    imagenButton.title = nombre
    box2.appendChild(imagenButton);
    imagenButton.classList.add(`box2__${tipoRopa}`);

    let imagenSelecionada = document.querySelector(`#${tipoRopa}`);
    imagenRuta.style.width = "100%";
    imagenRuta.addEventListener("click", () => {
      imagenSelecionada.innerHTML = "";

      imagenSelecionada.appendChild(imagenRuta);
      box2.innerHTML = "";
      cargarColores(
        imagenSelecionada,
        ropa.imagen2,
        imagenRuta,
        ropa.imagen,
        tipoRopa
      );
    });
  });
}

/*paso 1, agregar las img*/

const btnTop = document.querySelector(".block1__top");

function cargarTop() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    cargarImagenes(datos.top, "top");
  });
}
btnTop.addEventListener("click", cargarTop);
/*---------------------------------------------------*/

const btnAbrigo = document.querySelector("#abrigo");

function cargarAbrigo() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    cargarImagenes(datos.abrigo, "abrigo");
  });
}

btnAbrigo.addEventListener("click", cargarAbrigo);
/*---------------------------------------------------*/

const btnCuello = document.querySelector("#cuello");

function cargarCuello() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    cargarImagenes(datos.cuello, "cuello");
  });
}

btnCuello.addEventListener("click", cargarCuello);

/*---------------------------------------------------*/

const btnCinturon = document.querySelector(".block2__cinturon");

function cargarCinturon() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    cargarImagenes(datos.cinturon, "cinturon");
  });
}

btnCinturon.addEventListener("click", cargarCinturon);

/*---------------------------------------------------*/

const btnReloj = document.querySelector(".block2__reloj");

function cargarReloj() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    cargarImagenes(datos.reloj, "reloj");
  });
}

btnReloj.addEventListener("click", cargarReloj);

/*---------------------------------------------------*/

const btnPantalon = document.querySelector(".block3__pantalon");

function cargarPantalon() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    cargarImagenes(datos.pantalon, "pantalon");
  });
}

btnPantalon.addEventListener("click", cargarPantalon);

/*---------------------------------------------------*/

const btnCalzado = document.querySelector(".block3__calzado");

function cargarCalzado() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    cargarImagenes(datos.calzado, "calzado");
  });
}

btnCalzado.addEventListener("click", cargarCalzado);



