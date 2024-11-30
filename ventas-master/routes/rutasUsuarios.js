const express = require("express");
const rutas = express.Router();
const { mostrarUsuarios, nuevoUsuario, borrarUsuario, buscarPorID } = require("../db/usuariosDB");

rutas.get("/", async (req, res) => {
    const usuarios = await mostrarUsuarios();
    res.json(usuarios);
});

rutas.get("/buscarPorId/:id", async (req, res) => {
    const usuario = await buscarPorID(req.params.id);
    res.json(usuario);
});

rutas.delete("/borrarUsuario/:id", async (req, res) => {
    const usuarioBorrado = await borrarUsuario(req.params.id);
    res.json(usuarioBorrado);
});

rutas.post("/nuevoUsuario", async (req, res) => {
    const nuevo = await nuevoUsuario(req.body);
    res.json(nuevo);
});

module.exports = rutas;
