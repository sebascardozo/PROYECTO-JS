Swal.fire({
    title: '¿Quieres recibir novedades?',
    allowOutsideClick: () => {
      const popup = Swal.getPopup()
      popup.classList.remove('swal2-show')
      setTimeout(() => {
        popup.classList.add('animate__animated', 'animate__headShake')
      })
      setTimeout(() => {
        popup.classList.remove('animate__animated', 'animate__headShake')
      }, 500)
      return false
    }
  })

// texto desplegable
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

btn1.addEventListener('click', () => {
    agregarProductoAlCarrito('precio-1','producto-1')
        Swal.fire({
            title: '¿Estas seguro de agregar este pedido?',
            text: 'Haz click en el botón!',
            icon: 'success',
            confirmButtonText: 'Agregar'
    })
})
 btn2.addEventListener('click', () => {
    agregarProductoAlCarrito('precio-2','producto-2')
        Swal.fire({
            title: '¿Estas seguro de agregar este pedido?',
            text: 'Haz click en el botón!',
            icon: 'success',
            confirmButtonText: 'Agregar'
    })
    })

    btn3.addEventListener('click', () => {
        agregarProductoAlCarrito('precio-3','producto-3')
            Swal.fire({
             title: '¿Estas seguro de agregar este pedido?',
            text: 'Haz click en el botón!',
             icon: 'success',
             confirmButtonText: 'Agregar'
      })
   })
 btn4.addEventListener('click', () => {
            agregarProductoAlCarrito('precio-4','producto-4')
            Swal.fire({
            title: '¿Estas seguro de agregar este pedido?',
            text: 'Haz click en el botón!',
            icon: 'success',
            confirmButtonText: 'Agregar'
     })
 })
 btn5.addEventListener('click', () => {
            agregarProductoAlCarrito('precio-5','producto-5')
            Swal.fire({
            title: '¿Estas seguro de agregar este pedido?',
            text: 'Haz click en el botón!',
            icon: 'success',
            confirmButtonText: 'Agregar'
     })
 })

const agregarProductoAlCarrito = (precioProducto,producto)=>{
    let precio = document.getElementById(precioProducto).innerText;
    let posicion = carrito.findIndex(elem => elem.producto === producto);
    console.log(posicion)

    /*  SE APLICA OPERADOR TERNARIO (CODIGO ANTERIOR)
    if(posicion!=-1){
        carrito[posicion].cantidad += 1;
    }else{
        carrito.push({producto: producto,precio:precio, cantidad: 1});
    }*/
posicion!=-1 ? ( carrito[posicion].cantidad += 1) : (carrito.push({producto: producto,precio:precio, cantidad: 1})) //OPERADOR TERNARIO

   renderizarElemento()
    console.log(carrito)
    const guardarLocal  = (clave, valor) => { localStorage.setItem(clave, valor);
}   
guardarLocal("listaProductos", JSON.stringify(carrito));}

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
            total.innerText = `Total a pagar: ${sumaTotal} $`
        }
    }
    
}
let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    Swal.fire('¿Quieres enviar tu pedido?')
    e.preventDefault();
    console.log("Pedido Enviado");    
}



