/*Modal cuenta*/
const BtnOpenAcc = document.querySelector("#btn-open-acc")
const modalAcc = document.querySelector("#modal-acc")


BtnOpenAcc.addEventListener("click", ()=> {
    modalAcc.showModal()
    
})
window.onclick = function(event){
    if (event.target == modalAcc)
    modalAcc.close()
} 

/* SUSTRAER LOS ARRAYS*/



function datosTop(){
    return fetch('./database.json')  // reemplaza esto con la ruta a tu archivo JSON
    .then(response => response.json())
    .then(data => data.top)
    .then(data => data.abri)
    .catch(error => console.error('Error:', error));

}



/*paso 1, agregar las img*/


const btnTop = document.querySelector("#top")
const boxTop = document.querySelector(".box2__top")
const box2 = document.querySelector(".box2")

let isClicked = false;

function cargarTop (){
    
        if (!isClicked) {
            datosTop().then(top => {
                let imagenes = top.map(item => item.imagen);  
    
                imagenes.forEach(imagen => {
                    let imagenRuta= document.createElement("img");
                    imagenRuta.src = imagen;
                    let imagenDiv = document.createElement("div")
                    imagenDiv.appendChild(imagenRuta)
                    box2.appendChild(imagenDiv);
                    imagenDiv.classList.add ("block1__top")
                    imagenDiv.style.transition = "0.3s all ease"
                    imagenRuta.style.width = "80%"
                });
            });
            isClicked = true;
        }
    };

btnTop.addEventListener("click", cargarTop)
/*---------------------------------------------------*/
const btnAbrigo = document.querySelector("#abrigo")

function datosAbrigo(){
    return fetch('./database.json')  // reemplaza esto con la ruta a tu archivo JSON
    .then(response => response.json())
    .then(data => data.abrigo)
    .catch(error => console.error('Error:', error));

}

function cargarAbrigo (){
    
    if (!isClicked) {
        datosAbrigo().then(abrigo => {
            let imagenes = abrigo.map(item => item.imagen);  

            imagenes.forEach(imagen => {
                let imagenRuta= document.createElement("img");
                imagenRuta.src = imagen;
                let imagenDiv = document.createElement("div")
                imagenDiv.appendChild(imagenRuta)
                box2.appendChild(imagenDiv);
                imagenDiv.classList.add ("block1__top")
                
                imagenRuta.style.width = "80%"
            });
        });
        isClicked = true;
    }
};

btnAbrigo.addEventListener("click", cargarAbrigo)