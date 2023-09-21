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
const Box1Copy = box1.cloneNode(true);

/*-------------------------- funciones------------------------------*/

function cargarColores() {
  let bloqueBoton = document.createElement("div");
  bloqueBoton.classList.add("bloqueBoton");
  box2.appendChild(bloqueBoton);
  datosColor().then((datos) => {
    datos.forEach((dato) => {
      let nombre = dato.nombre;
      let hex = dato.hex;
      let button = document.createElement("button");
      button.title = nombre;
      button.style.backgroundColor = hex;
      button.classList.add("botonaso");
      bloqueBoton.appendChild(button);
    });
  });
}



function cargarImagenes(imagenes, tipoRopa) {
  imagenes.forEach((imagen) => {
    let imagenRuta = document.createElement("img");
    imagenRuta.src = imagen;
    let imagenButton = document.createElement("button");
    imagenButton.appendChild(imagenRuta);
    box2.appendChild(imagenButton);
    imagenRuta.style.width = "80%";
    imagenButton.classList.add(`box2__${tipoRopa}`);
    let imagenSelecionada = document.querySelector(`#${tipoRopa}`);

    imagenRuta.addEventListener("click", () => {
      imagenSelecionada.innerHTML = "";
      imagenSelecionada.appendChild(imagenRuta.cloneNode(true));
      box2.innerHTML = "";
      cargarColores();
      
      /*imagenRuta.style.fill = "black"; SE PUEDE CON SVG*/
    });
  });
}

/*paso 1, agregar las img*/

const btnTop = document.querySelector(".block1__top");

function cargarTop() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    let imagenes = datos.top.map((item) => item.imagen);
    cargarImagenes(imagenes, "top");
  });
}
btnTop.addEventListener("click", () => {
  cargarTop();
});

/*---------------------------------------------------*/

const btnAbrigo = document.querySelector("#abrigo");

function cargarAbrigo() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    let imagenes = datos.abrigo.map((item) => item.imagen);
    cargarImagenes(imagenes, "abrigo");
  });
}

btnAbrigo.addEventListener("click", cargarAbrigo);
/*---------------------------------------------------*/

const btnCuello = document.querySelector("#cuello");

function cargarCuello() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    let imagenes = datos.cuello.map((item) => item.imagen);
    cargarImagenes(imagenes, "cuello");
  });
}

btnCuello.addEventListener("click", cargarCuello);

/*---------------------------------------------------*/

const btnCinturon = document.querySelector(".block2__cinturon");

function cargarCinturon() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    let imagenes = datos.cinturon.map((item) => item.imagen);
    cargarImagenes(imagenes, "cinturon");
  });
}

btnCinturon.addEventListener("click", cargarCinturon);

/*---------------------------------------------------*/

const btnReloj = document.querySelector(".block2__reloj");

function cargarReloj() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    let imagenes = datos.reloj.map((item) => item.imagen);
    cargarImagenes(imagenes, "reloj");
  });
}

btnReloj.addEventListener("click", cargarReloj);

/*---------------------------------------------------*/

const btnPantalon = document.querySelector(".block3__pantalon");

function cargarPantalon() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    let imagenes = datos.pantalon.map((item) => item.imagen);
    cargarImagenes(imagenes, "pantalon");
  });
}

btnPantalon.addEventListener("click", cargarPantalon);

/*---------------------------------------------------*/

const btnCalzado = document.querySelector(".block3__calzado");

function cargarCalzado() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    let imagenes = datos.calzado.map((item) => item.imagen);
    cargarImagenes(imagenes, "calzado");
  });
}

btnCalzado.addEventListener("click", cargarCalzado);
