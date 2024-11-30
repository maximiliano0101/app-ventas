function saludar(){
    console.log("hola");
};
saludar();

function saludar2(nombre){
    console.log("hola "+nombre);
};
saludar2("Ramiro");

function saludar3(nombre="Anonimo"){
    var s="hola "+nombre;
    return s;
};
console.log(saludar3("Fran"));

var saludo=nombre=>{
    console.log("hola "+nombre);
};
saludo("Aldo");

var saludo3=nombre=>{
    var s= "Hola "+nombre;
    return s;
};
console.log(saludo3("Santi"));

var saludo4=nombre=>{
    return "Hola "+nombre;
};
console.log(saludo3("Lyonel"));

console.log(nombre=>"Hola "+nombre);

var saludo5=function(){
    console.log("hola");
};
saludo5();

var saludo6=()=>{
    console.log("Saludo6");
};

var saludo7=(nombre,s)=>{
    console.log("Hola "+nombre);
    s();
};
saludo7("Bethoven",saludo6);

