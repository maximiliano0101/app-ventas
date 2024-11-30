const admin = require("firebase-admin");
const keys = require("../keys.json");
admin.initializeApp({
    credential: admin.credential.cert(keys)
});

const proyecto = admin.firestore();

const usuarios = proyecto.collection("usuario");
const productos = proyecto.collection("productos")
const ventas = proyecto.collection("ventas");
//console.log(usuarios);


module.exports = {
    usuarios,
    productos,
    ventas
}
