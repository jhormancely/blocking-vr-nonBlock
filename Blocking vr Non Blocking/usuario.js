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

module.exports = {
  obtenerUsuarioSyn,
};
