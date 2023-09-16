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

const btnTop = document.querySelector("#top");
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
    imagenDiv.classList.add(`block__${tipoRopa}`);
    if (tipoRopa === "top" || tipoRopa === "abrigo") {
      imagenDiv.classList.add("block1__top");
    } else if (tipoRopa === "cuello") {
      imagenDiv.classList.add("block2__cuello");
    } else if (tipoRopa === "cinturon") {
      imagenDiv.classList.add("block2__cinturon");
    }else if (tipoRopa === "reloj"){
      imagenDiv.classList.add ("block2__reloj"); 
    } else if (tipoRopa === "pantalon"){
      imagenDiv.classList.add("block3__pantalon")
    } else if (tipoRopa === "calzado")
      imagenDiv.classList.add("block3__calzado")
    
      
  } 
  );
}

/*paso 1, agregar las img*/

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

const btnReloj = document.querySelector(".block2__reloj")

function cargarReloj() {
  box2.innerHTML = "";
  datosRopa().then((datos) => {
    let imagenes = datos.reloj.map((item) => item.imagen);
    cargarImagenes(imagenes, "reloj")
  })
}

btnReloj.addEventListener("click", cargarReloj)

/*---------------------------------------------------*/

const btnPantalon = document.querySelector(".block3__pantalon")

function cargarPantalon(){
  box2.innerHTML = ""
  datosRopa().then((datos) =>{
    let imagenes = datos.pantalon.map((item) => item.imagen)
    cargarImagenes(imagenes, "pantalon")
  })
}

btnPantalon.addEventListener("click", cargarPantalon)

/*---------------------------------------------------*/

const btnCalzado = document.querySelector(".block3__calzado")

function cargarCalzado(){
  box2.innerHTML = ""
  datosRopa().then((datos) =>{
    let imagenes = datos.calzado.map((item)=> item.imagen)
    cargarImagenes(imagenes, "calzado")
  })
}

btnCalzado.addEventListener("click", cargarCalzado)