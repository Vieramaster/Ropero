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
  abrigo: {},
};

/*-------------------------- funciones------------------------------*/
const datosBotones = {
  top: {},
  abrigo: {},
  cuello: {},
  cinturon: {},
  pantalon: {},
  calzado: {},
};

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

function cargarColores(btnBox, datos) {
  datosColor().then((items) => {
    const bloqueDiv = document.createElement("div");
    bloqueDiv.classList.add("bloqueBoton");
    let displayColor = items.map((item) => {
      return `<button type="button" title="${item.nombre}" style="background-color: ${item.hex};"></button>`;
    });
    displayColor = displayColor.join("");
    bloqueDiv.innerHTML = displayColor;
    box2.appendChild(bloqueDiv);
    tercerBoton(btnBox, datos);
  });
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
      cargarColores(btnBox, datos);
    });
  });
}

function tercerBoton(btnBox) {
  let colorButtons = document.querySelectorAll(".bloqueBoton > button");
  colorButtons.forEach((colorButton) => {
    colorButton.addEventListener("click", () => {
      let color = colorButton.style.backgroundColor;
      btnBox.style.backgroundColor = color;
    });
  });
};

