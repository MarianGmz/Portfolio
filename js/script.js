
const btnHabilidades = document.getElementById("btn_habilidades")

const btnFormacion = document.getElementById("btn_formacion")

const ventanaHabilidades = document.getElementById("habilidades")
const ventanaFormacion = document.getElementById("formacion")

const btnEnviar = document.getElementById("btn-enviar")






function mostrarHabilidades(){
    
    ventanaHabilidades.style.display = "block"
    
    ventanaHabilidades.classList.add("animate__animated" ,"animate__backInLeft")
    
    
}
function btnEnviarAnimacion(){
    btnEnviar.classList.add("animate__animated" ,"animate__flash")
}
const mostrarFormacion = () =>{
    ventanaFormacion.style.display = "block"
    
    ventanaFormacion.classList.add("animate__animated" ,"animate__backInLeft")
}


btnHabilidades.addEventListener("click",mostrarHabilidades)

btnFormacion.addEventListener("click",mostrarFormacion)


btnEnviar.addEventListener("click",btnEnviarAnimacion)




