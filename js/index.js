// E- COMERCE 

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

let carrito = [];
let precioTotal;

function menuDeCompras() {
    let stringProductos = "";


    for (let i = 0; i < menus.length; i++) {
        stringProductos += `${menus[i].id}: ${menus[i].variedad}. Precio: $${menus[i].precio} \n`;
    }

    let idProducto = prompt(`
Escriba el número del producto a comprar, o escriba 'ESC' para finalizar 
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

