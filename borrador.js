/*Modal cuenta*/
const BtnOpenAcc = document.querySelector("#btn-open-acc");
const modalAcc = document.querySelector("#modal-acc");

BtnOpenAcc.addEventListener("click", () => {
  modalAcc.showModal();
});
window.onclick = function (event) {
  if (event.target == modalAcc) modalAcc.close();
};

/* SUSTRAER LOS ARRAYS*/

function datosRopa() {
  return fetch("./database.json")
    .then((response) => response.json())
    .catch(console.error);
}


const boxTop = document.querySelector(".box2__top");
const box2 = document.querySelector(".box2");

/*-------------------------- funciones------------------------------*/

function cargarImagenes(imagenes, tipoRopa) {
  imagenes.forEach((imagen) => {
    let imagenRuta = document.createElement("img");
    imagenRuta.src = imagen;
    let imagenDiv = document.createElement("div");
    imagenDiv.appendChild(imagenRuta);
    box2.appendChild(imagenDiv);
    imagenRuta.style.width = "80%";
    /*imagenDiv.classList.add(`block__${tipoRopa}`)*/
        if (tipoRopa === "top" || tipoRopa === "abrigo") {
          imagenDiv.classList.add("block1__top");
        } else if (tipoRopa === "cuello") {
          imagenDiv.classList.add("block2__cuello");
        } else if (tipoRopa === "cinturon") {
          imagenDiv.classList.add("block2__cinturon");
        } else if (tipoRopa === "reloj") {
          imagenDiv.classList.add("block2__reloj");
        } else if (tipoRopa === "pantalon") {
          imagenDiv.classList.add("block3__pantalon");
        } else if (tipoRopa === "calzado")
          imagenDiv.classList.add("block3__calzado");

          imagenRuta.addEventListener("click",() => {
            let imagenSelecionada = document.querySelector(".block3__calzado")
            imagenSelecionada.innerHTML = ""
            imagenSelecionada.appendChild(imagenRuta.cloneNode(true))

      })    
    }
    );
  
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
btnTop.addEventListener("click", cargarTop);

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

function cargarColores(imagenSelecionada) {
  let bloqueBoton = document.createElement("div");
  bloqueBoton.classList.add("bloqueBoton");
  box2.appendChild(bloqueBoton);
  datosColor().then((datos) => {
    datos.forEach((dato, index) => {
      let nombre = dato.nombre;
      let hex = dato.hex;
      let button = document.createElement("button");
      button.title = nombre;
      button.style.backgroundColor = hex;
      button.classList.add("botonaso");
      bloqueBoton.appendChild(button);

      button.addEventListener("click", () => {
        imagenSelecionada.style.backgroundColor = hex;
      });
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
      let clonImagenRuta = imagenRuta.cloneNode(true);
      imagenSelecionada.appendChild(clonImagenRuta);

      box2.innerHTML = "";
      cargarColores(clonImagenRuta);
    });
  });
}
