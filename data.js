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

const buttons = document.querySelectorAll(" .box button");
const buttons2 = document.querySelectorAll(" .box2 button");

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

    datosRopa().then((datos) => {
      const categoriaRopa = datos.filter((item) => {
        return item.categoria === btnNombre;
      });
      RopaEstructura(categoriaRopa);

      const buttons2 = document.querySelectorAll(" .box2 button");

      buttons2.forEach((btnBox) => {
        btnBox.addEventListener("click", () => {
          
          
          box2.innerHTML = ""
          


        });
      });
    });
  });
});
