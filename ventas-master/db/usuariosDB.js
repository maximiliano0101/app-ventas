const usuariosBD = require("./conexion").usuarios;
const Usuario = require("../models/UsuarioModelo");
const { encriptarPassword, validarPassword, usuarioAutorizado, adminAutorizado } = require("../middleware/funcionesPassword");

function validarDatos(usuario) {
    var valido = false;
    if (usuario.nombre != undefined && usuario.usuario != undefined && usuario.password != undefined) {
        valido = true;
    }
    return valido;
}

async function borrarUsuario(id) {
    var usuarioValido = await buscarPorID(id);
    var usuarioBorrado = false;
    if (usuarioValido) {
        await usuariosBD.doc(id).delete();
        usuarioBorrado = true;
    }
    return usuarioBorrado;
}

async function mostrarUsuarios() {
    const usuarios = await usuariosBD.get();
    usuarioValido = [];
    usuarios.forEach(usuario => {
        const usuario1 = new Usuario({ id: usuario.id, ...usuario.data() });
        if (validarDatos(usuario1.getUsuario)) {
            usuarioValido.push(usuario1.getUsuario);
        }
    });
    return usuarioValido;
}

async function buscarPorID(id) {
    const usuario = await usuariosBD.doc(id).get();
    const usuario1 = new Usuario({ id: usuario.id, ...usuario.data() });
    var usuarioValido;
    if (validarDatos(usuario1.getUsuario)) {
        usuarioValido = usuario1.getUsuario;
    }
    return usuarioValido;
}

async function nuevoUsuario(data) {
    const { salt, hash } = encriptarPassword(data.password);
    data.password = hash;
    data.salt = salt;
    data.tipoUsuario = "usuario";
    const usuario1 = new Usuario(data);
    var usuarioValido = false;
    if (validarDatos(usuario1.getUsuario)) {
        await usuariosBD.doc().set(usuario1.getUsuario);
        usuarioValido = true;
    }
    return usuarioValido;
}

module.exports = {
    mostrarUsuarios,
    nuevoUsuario,
    borrarUsuario,
    buscarPorID
};
