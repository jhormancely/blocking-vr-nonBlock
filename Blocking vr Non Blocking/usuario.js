//Crear un metodo fictisio para que nos retorne un usuario de manera sincronica

const obtenerUsuarioSyn = (id) => {
  const inicio = new Date().getTime();
  while (new Date().getTime() - inicio <= 3000) {
    //Haciendo peticion
    //Busca Bd
  }

  return {
    id,
    nombre: `Usuario: ${id}`,
  };
};

const obtenerUsuarioAsyn = (id, tarea) => {
  const usuario = {
    id,
    nombre: `Usuario: ${id}`,
  };

  // La función setTimeout se utiliza para ejecutar una funcion luego de cierto tiempo
  setTimeout(() => {
    tarea(usuario);
  }, 3000);
};

module.exports = {
  obtenerUsuarioSyn,
  obtenerUsuarioAsyn,
};
