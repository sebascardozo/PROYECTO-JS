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



/*
class Menu {
    constructor(plato) {
        this.id = plato.id;
        this.variedad = plato.variedad;
        this.precio = plato.precio;
        this.cantidad = 1;
        this.precioTotal = plato.precio;
    }

    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}

const menus = [
    {
        id: 0,
        variedad: "Milanesa",
        descripcion: "Milanesa clasica con papas",
        precio: 1000,
    },
    {
        id: 1,
        variedad: "Milanesa Napolitana",
        descripcion: "Milanesa con salsa, queso y puré",
        precio: 1200,
    },
    {
        id: 2,
        variedad: "Milanesa de Molleja",
        descripcion: "Milanesa de molleja con papas rusticas",
        precio: 1295,
    },
    {
        id: 3,
        variedad: "Milansesa de pollo",
        descripcion: "Milanesa de pechuga de pollo con pure mixto",
        precio: 1085,
    },
    {
        id: 4,
        variedad: "Milanesas Veggies",
        descripcion: "Milanesa de berenjega con ensalada de tomates y ajo",
        precio: 900,
    },
    {
        id: 5,
        variedad: "Milanesa para compartir",
        descripcion: "Milanesa extra grande con papas fritas y puré",
        precio: 1850,
    },
];
/*
let carrito = [];
let precioTotal;

function menuDeCompras() {
    let stringProductos = "";
    for (let i = 0; i < menus.length; i++) {
        stringProductos += `${menus[i].id}: ${menus[i].variedad}: $ Precio: $${menus[i].precio} \n`;
    }

    let idProducto = prompt(`Escriba el número del producto a comprar, o escriba 'ESC' para finalizar 
${stringProductos} \n`);

    while (idProducto !== "ESC") {
        let menuEnCarrito = carrito.find((elemento) => elemento.id == idProducto);

        if (menuEnCarrito) {
            let index = carrito.findIndex((elemento) => elemento.id === menuEnCarrito.id);

            carrito[index].agregarUnidad();
            carrito[index].actualizarPrecioTotal();
            alert(`
            Se ha añadido otra unidad del menu ${carrito[index].variedad} 
            Unidades: ${carrito[index].cantidad}`);
            console.table(carrito);
        } else {
            carrito.push(new Menu(menus[idProducto]));
            alert(`Se ha añadido al carrito el Menu ${menus[idProducto].variedad} `);
            console.table(carrito);
        }

        idProducto = prompt(`
Desea seguir comprando? 
Escriba el número del producto a comprar, o escriba 'ESC' para finalizar 
${stringProductos}`);
    }
}

function obtenerPrecioTotal() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.precioTotal;
    }

    return precioTotal;
}

menuDeCompras();
precioTotal = obtenerPrecioTotal();

alert(`El precio total de tu compra es de $${precioTotal}
Gracias! `);
console.table(carrito);
*/
