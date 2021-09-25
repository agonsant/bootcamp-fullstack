

const routerHello = (_req,_res, next) => {
    console.log("Hola mundo Router Middleware: Before Next");
    next();
    console.log("Hola mundo Router Middleware: After Next");
}

export default routerHello;