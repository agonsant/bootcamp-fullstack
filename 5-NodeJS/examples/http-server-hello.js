import http from 'http';

const port  = 4567;

const server = http.createServer((req,res) => {
    res.statusCode = 200; // indico que la respuesta es ok
    res.setHeader('Content-Type', 'application/json'); // indico que la respuesta es en formato JSON
    const hello = {
        hello: 'World'
    }
    res.end(JSON.stringify(hello)); // mando un texto al usuario
});

server.listen(port, () => {
    console.log('El servidor está escuchando en el puerto: ' + port)
})