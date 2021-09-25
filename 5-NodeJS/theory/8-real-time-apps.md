# Real Time Apps

Son aplicaciones, las cuales, no necesitan de una interacción del usuario con la aplicación web para refrescar su interfaz de usuario, recibiendo y mostrando la información en tiempo real (en directo).

En web tenemos 3 técnicas en la Web:

- Polling
- Web Socket
- Server Sent Events

## Polling

Esta técnica consiste en hacer una "encuesta" al servidor cada x Segundos, solicitándole al mismo si tenemos actualizaciones de los datos o no.

No necesita acciones en el API Rest como lo hemos aprendido, se implementa todo en la parte frontal utilizando un `setInterval`.

### PROS

- Sencillez
- Facilidad de configuracion

### CONS

- Ocupación de los recursos de manera innecesaria (aumenta el coste de servidores)
- No tenemos los datos en tiempo real, sino que tienen algún tipo de delay.

## Web Socket

Se ha creado un nuevo protocolo de comunicaciones (ws o websocket) (wss o websocket secure).

Este protocolo, a diferencia de HTTP, mantiene el canal de comunicación entre el cliente y el servidor abierto, dando así la posibilidad de que el servidor pueda mandar información al cliente sin que este se lo solicite previamente y el cliente reaccionara a esa información recibida.

Ejemplo de url:

> `ws(s)://domain:port/path`

En nativo JS el cliente sería algo como esto:

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", function (event) {
  socket.send("Hello Server!"); // Envia hola al servidor WS
});

// Listen for messages
socket.addEventListener("message", function (event) {
  // Esta función se ejecuta cada vez que el servidor manda información al cliente.
  console.log("Message from server ", event.data);
});
```

### PROS (ws)

- Tiempo real
- Velocidad

### CONS (ws)

- Nuevo protocolo en la arquitectura (Esto es malo por todo lo que implica a nivel de seguridad y recursos den mi plataforma)

## Server Sent Events (SSE)

Esta es una evolución del protocolo HTTP que nos permite en vez de cerrar la conexión con el servidor cuando esta se acabe de gestionar, nos permite dejar un canal de comunicación entre clientes y servidor abiero. Como si fuese Web Socket pero con la base de HTTP.

El código cliente de manera nativa sería algo como:

```js
// creo mi canal de comunicación con el servidor SSE
const evtSource = new EventSource("/miSSE-Server");

// Esto me permite registrar una funcion que escucha y se ejecuta cada vez que reciba un mensaje del servidor
evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.innerHTML = "message: " + e.data;
  eventList.appendChild(newElement);
}

// Esto es una función que se ejecuta cada vez que me llegue un mensaje de tipo "ping" del servidor
evtSource.addEventListener("ping", function(e) {
  var newElement = document.createElement("li");

  var obj = JSON.parse(e.data);
  newElement.innerHTML = "ping at " + obj.time;
  eventList.appendChild(newElement);
}, false);

// Escuchamos cualquier error de la comunicación
evtSource.onerror = function(e) {
  alert("EventSource failed.");
};


// el cliente cierra la comunicación con el servidor
evtSource.close();
```

### PROS (sse)

- Todos

### CONS (sse)

- Nada es la perfección en protocolo, el representante del protocolo dios en la tierra, existe una religión que se llama el SSEndismo.

Para implementar este protocolo tanto en cliente como en servidor, en expressjs se utiliza una librería que se llama `socket.io`.

## Implementación socket.io

[Referencia](https://socket.io/)

[Ejemplo de chat](https://socket.io/get-started/chat)
