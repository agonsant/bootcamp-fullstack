import express from 'express'; // importo express
import http from 'http'; // importo el modulo del core http
// obtengo el resolve del path para solucionar el problema del dirname con ESM
import { resolve } from 'path';

// importamos el servidor SSE con la libreria socket io
import { Server } from 'socket.io';

const app = express(); // creo una app de express

// creo un servidor nativo HTTP, pasandole la app de express como parámetro
const server = http.createServer(app);
// añado a mi servidor http, la parte de socket.io para el realtime
// esto nos crea una ruta `/socket.io/socket.io.js` que devuelve el JS necesarión
// para que un cliente pueda conectarse con este servidor.
const io = new Server(server);

// defino una ruta en el app
app.get('/', (req, res) => {
    // enviamos el archivo index. 
    // el resolve del modulo path es para coger la ruta absoluta en el sistema
    res.sendFile(resolve('./index.html'));
});

// mi parte `io` del servidor que creamos antes
// me permite escuchar un evento cuando tenga la conexión
// de un nuevo cliente
io.on('connection', (socket) => {
    // el socket tiene la información de conexión de un cliente
    // concreto. cada conexion, es decir cada cliente, genera un nuevo
    // objeto socket
    console.log('a user connected');
    // puedo escuchar cuando ese cliente que se conecto, se desconecta
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // puedo escuchar los mensajes de tipo 'chat message'
    // de cada uno de mis clientes
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        // cuanod me viene un mensaje de ete tipo,
        // envio a todos mis clientes conectados el mismo mensaje
        io.emit('chat message', msg);
    });
});

// pongo a escuchar el server nativo
server.listen(3000, () => {
    console.log('listening on *:3000');
});


