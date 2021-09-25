

/**
 * Un middleware es un funcion que recibe la request del usuario, la respuesta a esa request
 * y la función pra pasar al siguiente manejador
 */
function appHello(_req,_res,next){
    console.log("Hola mundo App Middleware: Before Next");
    // tras hacer lo que estamos destinados a hacer pasamos el testigo 
    // al siguiente middleware o al último handler
    next(); 
    console.log("Hola mundo App Middleware: After Next");
}


export default appHello;