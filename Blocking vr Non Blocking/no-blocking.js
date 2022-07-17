const { obtenerUsuarioAsyn } = require("./usuario");
console.log("Inicio de programa");
console.time("Inicio");

mostrar_usuario = (usuario) => {
  console.log("Usuario1: ", usuario);
};

obtenerUsuarioAsyn(1, mostrar_usuario);

obtenerUsuarioAsyn(2, (usuario) => {
  console.log("Usuario2: ", usuario);
});

console.log("Fin del programa");
console.timeEnd("Inicio");
