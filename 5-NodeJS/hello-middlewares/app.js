// const express = require('express'); CJS
import express from 'express'; // ESM
import helloRouter  from './src/hello/hello.router.js';  // importo el router para poder registrarlo en la app
import appHello from './src/hello/hello.app-middleware.js'; // importo el middleware de app para usarlo
import counterRouter from './src/counter/counter.router.js';
import counter from './src/counter/counter.middleware.js';
import optinRouter from './src/hello-optin/hello.router.js';
import appHelloOptin from './src/hello-optin/hello.middleware.js';

const app = express(); // creo una aplicacion express

app.use(appHello); // con el use defino un middleware pasandole como parámetro la función. En este caso va asociado a la APP
app.use(counter);
app.use(counter);
app.use(counter);
app.use(counter);
app.use(appHelloOptin('App'));

// registro el router importado en la app con el path base '/hello'
app.use('/hello', helloRouter); 
// registro mi rputer importado en la app con el path base '/counter'
app.use('/counter', counterRouter);

app.use('/hello-optin', optinRouter); 


app.listen(4000, () => console.log('Servidor levantado y escuchando')) // levantar el servidor HTTP