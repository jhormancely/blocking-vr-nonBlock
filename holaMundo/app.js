const http = require("http");

let hostname = "localhost"; //127.0.0.1
let port = 3000;

// request = es la peticion del cliente al servidor, o informacion del cliente al servidor.
// responce = es la respuesta del servidor al cliente.
// Respuestas informativas = (100-109)
// Respuestas satisfactorias = (200-299)
// Redirecciones = (300-399)
// Errores de los clientes = (400-499)
// Errores de los servidores = (500-599)
funcion = (request, responce) => {
  responce.statusCode = 200;
  responce.setHeader("Content-Type", "text/plain");
  responce.end("Hola mundo desde node... ahora con nodemon");
};

let server = http.createServer(funcion);
server.listen(port, hostname, () => {
  console.log(`El servidor se esta ejecutando en http//${hostname}:${port}/`);
});
