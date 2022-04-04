// E- COMERCE 
const muestra = ()=>{
    let elemento= document.getElementById('adicional');
    elemento.className= 'visible';

    let ocultar =document.getElementById('ocultar');
    ocultar.className= 'visible';

    let enlace = document.getElementById('enlace');
    enlace.className= 'oculto';
}
const oculta = ()=>{

    document.getElementById('adicional').className= 'oculto';
    document.getElementById('ocultar').className= 'oculto';
    document.getElementById('enlace').className= 'visible';
   
}


let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');

let listadoCarrito = document.getElementById('carrito');
let total = document.getElementById('total');
let carrito = [];

btn1.onclick = function(){
    agregarProductoAlCarrito('precio-1','producto-1')
}

btn2.onclick = ()=>{
    agregarProductoAlCarrito('precio-2','producto-2')
}

btn3.onclick = function(){
    agregarProductoAlCarrito('precio-3','producto-3')
}
btn4.onclick = function(){
    agregarProductoAlCarrito('precio-4','producto-4')
}
btn5.onclick = function(){
    agregarProductoAlCarrito('precio-5','producto-5')
}
const agregarProductoAlCarrito = (precioProducto,producto)=>{
    let precio = document.getElementById(precioProducto).innerText;
    let posicion = carrito.findIndex(elem => elem.producto === producto);
    console.log(posicion)
    if(posicion!=-1){
        carrito[posicion].cantidad += 1;
    }else{
        carrito.push({producto: producto,precio:precio, cantidad: 1});
    }
    renderizarElemento()
}

const renderizarElemento = ()=>{
    listadoCarrito.innerHTML = '';
    let sumaTotal = 0;
    if(carrito.length > 0){
        console.log(carrito.length)
        for (let index = 0; index < carrito.length; index++) {
            let elemento = document.createElement('div')
            elemento.innerHTML = `<p>
                            Producto: ${carrito[index].producto}
                            Cantidad: ${carrito[index].cantidad}</p>`;
            sumaTotal = sumaTotal + carrito[index].precio * carrito[index].cantidad
            listadoCarrito.append(elemento);
            total.innerText = `Total a pagar: ${sumaTotal}`
        }
    }
}


