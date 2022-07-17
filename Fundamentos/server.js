// Se importa la libreria en una variable
const express = require("express");
// Se carga la variable app con la ejecucion de la libreria
const app = express();
// midleware: es una funcion que se ejecuta antes que los recursos de nuestra api
// Para renderizar una pagina web desde el backend se utiliza express.static + la ruta absoluta
app.use(express.static(__dirname + "/public"));

// Ahora se generan los EndPoints que se requieran
app.get("/", (req, res) => {
  res.send("Hola mundo desde express principal");
});

app.get("/hola", (req, res) => {
  res.send("Hola mundo desde express otra pagina");
});

app.post("/mundo", (req, res) => {
  res.send("Este es un mensaje desde una peticion post");
});

app.get("*", (req, res) => {
  res.send("La pagina no existe");
});

app.listen(3000);
