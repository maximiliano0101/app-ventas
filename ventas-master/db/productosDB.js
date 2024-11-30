const productoDB = require("./conexion").productos;
const Producto = require("../models/ProductoModelo");

function validarDatos(producto) {
    var valido = false;
    if (producto.producto != undefined && producto.descripcion != undefined && producto.cantidad != undefined && producto.precio != undefined) {
        valido = true;
    }
    return valido;
}

async function borrarProducto(id) {
    var productoValido = await buscarPorID(id);
    var productoBorrado = false;
    if (productoValido) {
        await productoDB.doc(id).delete();
        productoBorrado = true;
    }
    return productoBorrado;
}

async function mostrarProductos() {
    const productos = await productoDB.get();
    productoValido = [];
    productos.forEach(producto => {
        const producto1 = new Producto({ id: producto.id, ...producto.data() });
        if (validarDatos(producto1.getProducto)) {
            productoValido.push(producto1.getProducto);
        }
    });
    return productoValido;
}

async function buscarPorID(id) {
    const producto = await productoDB.doc(id).get();
    const producto1 = new Producto({ id: producto.id, ...producto.data() });
    var productoValido;
    if (validarDatos(producto1.getProducto)) {
        productoValido = producto1.getProducto;
    }
    return productoValido;
}

async function nuevoProducto(data) {
    const producto1 = new Producto(data);
    var productoValido = false;
    if (validarDatos(producto1.getProducto)) {
        await productoDB.doc().set(producto1.getProducto);
        productoValido = true;
    }
    return productoValido;
}

module.exports = {
    mostrarProductos,
    nuevoProducto,
    borrarProducto,
    buscarPorID
};
