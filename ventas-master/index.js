const express = require("express");
const usuariosRutas = require("./routes/rutasUsuarios");
const productosRutas = require("./routes/rutasProductos");
const ventaRutas = require("./routes/rutasVentas");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Asignar prefijos a las rutas
app.use("/usuarios", usuariosRutas);
app.use("/productos", productosRutas);
app.use("/ventas", ventaRutas);

app.listen(port, () => {
  console.log("Servidor en http://localhost:" + port);
});
