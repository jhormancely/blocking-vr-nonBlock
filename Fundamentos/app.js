const { closeSync } = require("fs");
const http = require("http");
http
  .createServer((req, res) => {
    //Se puede devolver como respuesta el codigo
    res.writeHead(202, { "content-type": "application/json" });

    const mi_objeto = {
      nombre: "Jhorman",
      apellido: "Cely",
      edad: 37,
      url: req.url,
    };
    // res.write(mi_objeto) ==> No se puede enviar un json directamente, JavaScript no lo puede hacer.
    // para eso se utiliza el JSON.stringify()
    res.write(JSON.stringify(mi_objeto));

    // por medio de postman envio una variable llamada "token = acceso_plataforma" en el header de la peticion
    // y la recibo con la variable req.header.token
    // Tambien se envia dos variables y se suman en el servidor y se devuelve.
    console.log(req.headers.token);
    res.write(
      `La suma de los dos numeros enviados es: ${
        Number(req.headers.num1) + Number(req.headers.num2)
      }`
    );

    //console.log(req);
    console.log("---FIN ---");

    res.end();
  })
  .listen(3000);
