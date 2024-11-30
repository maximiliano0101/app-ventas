const express = require("express");
const rutas = express.Router();
const {mostrarVentas,buscarPorID,nuevaVenta,actualizarVenta} = require("../db/ventasDB");

rutas.get("/", async (req,res) =>{
    const ventas = await mostrarVentas();
    res.send(ventas);
});

rutas.get("/buscarPorId/:id", async (req,res)=>{
    const venta = await buscarPorID(req.params.id);
    res.json(venta);
});

rutas.post("/nuevaVenta", async (req,res)=>{
    const venta = await nuevaVenta(req.body);
    res.json(venta);
}); 

rutas.post("/cancelarVenta/:id", async (req, res) => {
    const id = req.params.id;
    const nuevoEstatus = "cancelado";
    const venta = await actualizarVenta(id, nuevoEstatus);
   res.json(venta);
});

module.exports = rutas;