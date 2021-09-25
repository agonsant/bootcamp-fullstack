import express from 'express';
import helloRoute from './hello.route-middleware.js';
import routerHello from './hello.router-middleware.js';

const router = express.Router(); // creo mi router

router.use(routerHello); // uso un middleware que afecta a todas las rutas y sub rutas de ese router

// Creo una ruta get en el router con subpath base `/` cuyo
// handler devuelve lo esperado por el ejercicio 'Hola Router'
router.get('/', helloRoute , (_req,res, next) => {
    console.log('Hello From Handler');
    res.send('Hola Router');
});

export default router; // exporto el router para que pueda ser usado en otros routers o en un app