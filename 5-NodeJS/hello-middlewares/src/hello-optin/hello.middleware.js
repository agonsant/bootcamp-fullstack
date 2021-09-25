/**
 * Un middleware es un funcion que recibe la request del usuario, la respuesta a esa request
 * y la función pra pasar al siguiente manejador
 */
function appHelloOptin(type) {
  return (_req, _res, next) => {
    console.log(`Hola mundo ${type} Middleware Optin: Before Next`);
    // tras hacer lo que estamos destinados a hacer pasamos el testigo
    // al siguiente middleware o al último handler
    next();
    console.log(`Hola mundo ${type} Middleware Optin: After Next`);
  };
}

export default appHelloOptin;
