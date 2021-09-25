import express from 'express';

// creo una app de express
const app = express();

const port = 3002;

/**
 * Primera definición del handler, este será el primer
 * manejador en ejecutarse y el ultimo en terminar
 */
app.get('/demo-equals', (req, res, next) => { 
    // el handler de una ruta tiene un tercer parámeto 
    // que es una función que invoca al siguiente handler
    // de manera `sincrona`
    console.log('Primera definición');
    if(req.query.type === 'primera') {
        res.send('hola primera');
    }else{
        next(); // Llamamos al siguiente manejador registrado para esa ruta
        console.log('despues del next')
    }

});

/**
 * Al estar definido segundo este manejador se ejecutará
 * el segundo, siempre y cuando el primero haya hecho next()
 */
app.get('/demo-equals', (req, res) => {
    console.log('Segunda definición');
    res.send('hola segunda');
});


app.listen(port, () => console.log(`Servidor listo para escuchar peticiones en el puerto ${port}`));