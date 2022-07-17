const { obtenerUsuarioSyn } = require("./usuario");

console.log("Inicio del programa");
console.time("Inicio");

const usuario1 = obtenerUsuarioSyn(1);
console.log("Usuario1:", usuario1);

const usuario2 = obtenerUsuarioSyn(2);
console.log("Usuario2:", usuario2);

console.log("Fin del programa");
console.timeEnd("Inicio");
