Swal.fire({
	title: '¡Te estabamos esperando!',
	text:'¿Cómo nos conociste?',
	icon: 'question',
	confirmButtonText: 'seleccionar',
	footer:  'Gracias por contestar!!' ,
	 input:'select',
	inputPlaceholder:'Elije una opción',
	inputValue: '',
	inputOptions: {
        Facebook: 'Facebook',
        twitter: 'Twitter',
        Instagram: 'Instagram',
    } 
});


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
let clearTrash = document.getElementById("vaciarCarrito");


let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');

let listadoCarrito = document.getElementById('carrito');
let total = document.getElementById('total');
let carrito = [];

btn1.addEventListener('click', () => {
    agregarProductoAlCarrito('precio-1','Mila Clasica')
        Swal.fire({
            title: 'Pruducto agregado',
            text: 'Haz click en el botón!',
            icon: 'success',
            confirmButtonText: 'Seguir'
    })
})
 btn2.addEventListener('click', () => {
    agregarProductoAlCarrito('precio-2','Mila Napo')
    Swal.fire({
        title: 'Pruducto agregado',
        text: 'Haz click en el botón!',
        icon: 'success',
        confirmButtonText: 'Seguir'
})
})

    btn3.addEventListener('click', () => {
        agregarProductoAlCarrito('precio-3','Mila Molle')
            Swal.fire({
                title: 'Pruducto agregado',
                text: 'Haz click en el botón!',
                icon: 'success',
                confirmButtonText: 'Seguir'
      })
   })
 btn4.addEventListener('click', () => {
            agregarProductoAlCarrito('precio-4','Mila Veggie')
            Swal.fire({
                title: 'Pruducto agregado',
                text: 'Haz click en el botón!',
                icon: 'success',
                confirmButtonText: 'Seguir'
     })
 })
 btn5.addEventListener('click', () => {
            agregarProductoAlCarrito('precio-5','Mila Pollo')
            Swal.fire({
                title: 'Pruducto agregado',
                text: 'Haz click en el botón!',
                icon: 'success',
                confirmButtonText: 'Seguir'
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


vaciarCarrito.addEventListener('click', () => {
    localStorage.removeItem("listaProductos");
    listadoCarrito.innerHTML = '';
    total.innerText = '';
} 
)



const renderizarElemento = ()=>{
    listadoCarrito.innerHTML = '';
    let sumaTotal = 0;
    /*  SE APLICA OPERADOR LOGICO AND (CODIGO ANTERIOR)
    if(carrito.length > 0){
        console.log(carrito.length)*/
    carrito.length > 0 && console.log(carrito.length) //OPERADOR AND
        for (let index = 0; index < carrito.length; index++) {
            let elemento = document.createElement('div')
            elemento.innerHTML = `<p  class="text-white bg-dark">
                            Producto: ${carrito[index].producto}
                            Cantidad: ${carrito[index].cantidad} <i class="fas fa-shopping-cart" ></i> </p>`;
            sumaTotal = sumaTotal + carrito[index].precio * carrito[index].cantidad
            listadoCarrito.append(elemento);
            total.innerText = `Total a pagar: ${sumaTotal} $`

        
        }
        
        
        
    }


 
    

let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Tu pedido ha sido enviado',
        showConfirmButton: false,
        timer: 1500
      })
    e.preventDefault();
    
    console.log("Pedido Enviado");    
}
