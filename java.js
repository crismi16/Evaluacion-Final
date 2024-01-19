let contenedorMensaje1=document.querySelector("#contenedor1");
let contenedorMensaje2=document.querySelector("#contenedor2");
const cambiarFondo=(elemento,evento)=>{
    switch(evento){
        case 'mouseover':
            elemento.style.backgroundColor='orange';
            break;
            case 'mouseout':
            elemento.style.backgroundColor='aqua';
    }
}
contenedorMensaje1.addEventListener('mouseover',()=>{
    cambiarFondo(contenedorMensaje2,'mouseover')
})
contenedorMensaje1.addEventListener('mouseout',()=>{
    cambiarFondo(contenedorMensaje2,'mouseout')
})