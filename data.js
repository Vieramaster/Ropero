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

const box1 = document.querySelector(".box");
const box2 = document.querySelector(".box2");

/*-------------------------- funciones------------------------------*/

const buttons = document.querySelectorAll(" .box button");

function RopaEstructura(datos) {
  let displayMenu = datos.map((item) => {
    return ` <button class="block__${item.categoria}" title="${item.nombre}">
                    <img src="${item.imagen}" alt="${item.categoria}">
                </button>
      `;
  });
  displayMenu = displayMenu.join("");
  box2.innerHTML = displayMenu;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnNombre = btn.id;
    const PrimerBoton = btn;
    datosRopa().then((datos) => {
      const categoriaRopa = datos.filter((item) => {
        return item.categoria === btnNombre;
      });
      RopaEstructura(categoriaRopa);
      const buttons2 = document.querySelectorAll(" .box2 button");
      segundoBoton(datos, buttons2, PrimerBoton);
    });
  });
});

function segundoBoton(datos, buttons2, PrimerBoton) {
  buttons2.forEach((btnBox) => {
    btnBox.addEventListener("click", () => {
      let padre = PrimerBoton.parentNode;
      padre.replaceChild(btnBox, PrimerBoton);
      box2.innerHTML = "";
      MostrarColores(btnBox, datos, PrimerBoton);
    });
  });
}

function MostrarColores(btnBox, datos) {
  let nombre = btnBox.title;
  const bloqueDiv = document.createElement("div");
  bloqueDiv.classList.add("bloqueBoton");

  const arrayRecuperado = datos.find((item) => {
    return item.nombre === nombre;
  });
  let coloresArray = arrayRecuperado.colores;
  let displayColor = coloresArray.map((item) => {
    return `<button style="background-color:${item.hex} ;" title="${item.nombre}"></button>`;
  });
  displayColor = displayColor.join("");
  bloqueDiv.innerHTML = displayColor;
  box2.appendChild(bloqueDiv);
  botonesColor(btnBox, arrayRecuperado,datos);
}

function botonesColor(btnBox, arrayRecuperado, datos) {
  let colorButtons = document.querySelectorAll(".bloqueBoton > button");
  colorButtons.forEach((colorButton) => {
    colorButton.addEventListener("click", () => {
      let color = colorButton.style.backgroundColor;
      let imagen1 = arrayRecuperado.imagen
      let imagen2 = arrayRecuperado.imagen2;
      imagenBtnBox = btnBox.querySelector("img");
          if (color === "rgb(0, 0, 0)") {
            imagenBtnBox.src = imagen2;
            btnBox.style.backgroundColor = color;
          } else {
            imagenBtnBox.src = imagen1;
            btnBox.style.backgroundColor = color;
          }
      createButtonCombiner(arrayRecuperado,datos)
    });

  });
}

/******************************************************************************** */

function createButtonCombiner(arrayRecuperado, datos){

  let buttonFinal = document.createElement("button")
  buttonFinal.classList.add("butonFinal");
  buttonFinal.style.backgroundColor = "grey"
  box2.appendChild(buttonFinal)
  
    buttonFinal.addEventListener("click",()=>{

      filtroRopa(arrayRecuperado,datos)
    })
}




function filtroRopa(arrayRecuperado,datos){
  const estiloElegido = arrayRecuperado.estilo
  const climaElegido = arrayRecuperado.clima
  const tiempoElegido = arrayRecuperado.tiempo
  const categoriaElegida = arrayRecuperado.categoria
 
        let filtrado = datos.filter( dato => 
            estiloElegido.some(estilo => dato.estilo.includes(estilo))
        &&  climaElegido.some(clima => dato.clima.includes(clima))
        &&  tiempoElegido.some(tiempo => dato.tiempo.includes(tiempo))
        &&  dato.categoria !== categoriaElegida)
  
          console.log(filtrado)
} 



