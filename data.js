const BtnOpenAcc = document.querySelector("#btn-open-acc")
const modalAcc = document.querySelector("#modal-acc")


BtnOpenAcc.addEventListener("click", ()=> {
    modalAcc.showModal()
    
})
window.onclick = function(event){
    if (event.target == modalAcc)
    modalAcc.close()
} 

