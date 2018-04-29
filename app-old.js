const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Henry D.',
            edad: 27,
            url: req.url
        };

        res.write(JSON.stringify(salida));

        //res.write('Hola mundo');
        res.end();
    })
    .listen(3000);

console.log("Escuchando al puerto 3000");