const ventaDB = require("./conexion").ventas;
const Venta = require ("../models/VentaModelo");
const { buscarPorID: buscarUsuarioPorID } = require('./usuariosDB'); 
const { buscarPorID: buscarProductoPorID } = require('./productosDB'); 

function validarDatos(venta){
    var valido = false;
    if(venta.cantidad != undefined && venta.estatus != undefined && venta.fecha != undefined && venta.idProducto != undefined && venta.idUsuario != undefined){
        valido = true;
    }
    return valido;
};

async function mostrarVentas() {
    const ventas = await ventaDB.get();
    ventaValida = [];
    ventas.forEach(venta => {
        const venta1 = new Venta({id:venta.id,...venta.data()});
        if(validarDatos(venta1.getVenta)){
            ventaValida.push(venta1.getVenta);
        }
    });
    return ventaValida;
};

async function buscarPorID(id) {
    const venta=await ventaDB.doc(id).get();
    const venta1=new Venta({id:venta.id,...venta.data()});
    var ventaValida;
    if(validarDatos(venta1.getVenta)){
        ventaValida=venta1.getVenta;
    }
    return ventaValida;
};

async function nuevaVenta(data) {
    const usuarioValido = await buscarUsuarioPorID(data.idUsuario);
    if (!usuarioValido) {
        throw new Error('El usuario no existe');
    }
    const productoValido = await buscarProductoPorID(data.idProducto);
    if (!productoValido) {
        throw new Error('El producto no existe');
    }
    
    const fechaActual = new Date().toISOString();
    const ventaData = {
        cantidad: data.cantidad,
        estatus: data.estatus,
        fecha: fechaActual,
        idProducto: data.idProducto,
        idUsuario: data.idUsuario
    };
    const venta1 = new Venta(ventaData);
    var ventaValida = false;
    const docRef = ventaDB.doc();
    await docRef.set(venta1.getVentaConId);
    venta1.id = docRef.id; 
    return { id: venta1.id, ...venta1.getVenta };
}



async function actualizarVenta(id, nuevoEstatus) {
    var ventaValida = await buscarPorID(id);
    var ventaActualizada = false;
    if (ventaValida) {
        await ventaDB.doc(id).update({ estatus: nuevoEstatus });
        ventaActualizada = true;
    }
    return ventaActualizada;
}



module.exports={
    mostrarVentas,
    buscarPorID,
    nuevaVenta,
    actualizarVenta
}