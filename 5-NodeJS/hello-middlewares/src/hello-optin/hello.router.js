import express from 'express';
import appHelloOptin from './hello.middleware.js';

const router = express.Router(); // creo mi router

router.use(appHelloOptin('Router'));

// Creo una ruta get en el router con subpath base `/` cuyo
// handler devuelve lo esperado por el ejercicio 'Hola Router'
router.get('/', appHelloOptin('Route') , (_req,res, next) => {
    console.log('Hello From Handler Optin');
    res.send('Hola Router Optin');
});

export default router; // exporto el router para que pueda ser usado en otros routers o en un app