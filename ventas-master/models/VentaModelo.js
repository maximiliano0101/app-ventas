const { ventas } = require("../db/conexion");
class Venta {
    constructor(data) {
        this.id = data.id;
        this.cantidad = data.cantidad;
        this.estatus = data.estatus;
        this.fecha = data.fecha;
        this.idProducto = data.idProducto;
        this.idUsuario = data.idUsuario;
    }
    
    set id(id){
        this._id = id;
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    set estatus(estatus) {
            this._estatus = estatus;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }

    set idUsuario(idUsuario){
        this._idUsuario = idUsuario;
    }

    get id(){
        return this._id;
    }

    get cantidad() {
        return this._cantidad;
    }
    
    get estatus() {
        return this._estatus;
    }
    
    get fecha() {
        return this._fecha;
    }
    
    get idProducto() {
        return this._idProducto;
    }
    
    get idUsuario() {
        return this._idUsuario;
    }

    get getVenta() {
        return {
            id: this._id,
            cantidad: this._cantidad,
            estatus: this._estatus,
            fecha: this._fecha,
            idProducto: this._idProducto,
            idUsuario: this._idUsuario
        };
    }

    get getVentaConId() {
        return {
            cantidad: this._cantidad,
            estatus: this._estatus,
            fecha: this._fecha,
            idProducto: this._idProducto,
            idUsuario: this._idUsuario
        };
    }          
}

module.exports = Venta;