

const helloRoute = (_req,_res, next) => {
    console.log("Hola mundo Route Middleware: Before Next");
    next();
    console.log("Hola mundo Route Middleware: After Next");
}

export default helloRoute;