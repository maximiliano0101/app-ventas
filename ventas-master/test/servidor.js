const express = require("express");
require("dotenv").config();
const app = express();

var saludo=(req,res,next)=>{
    console.log("Hola");
    next();
}

app.get("/",saludo,(req,res)=>{
    res.send("hola estas en raiz");
});

app.get("/home",saludo,(req,res)=>{
    res.send("Estas en home");
});

app.get("/otro",(req,res)=>{
    res.send("Otro")
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port)
});
