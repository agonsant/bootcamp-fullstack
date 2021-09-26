/**
 * ASINCRONIA
 *
 * Una instrucción de programación se ejecuta en lo que se conoce como
 * hilo o thread.
 * En un thread SOLO se puede ejecutar una instrucción
 * Los procesadores actuales tienen mas de un thread y permiten la ejecucion
 * de mas de una instruccion en paralelo.
 *
 * JavaScript es lo que se conoce como Single Thread, es decir,
 * (apriori) no hay posibilidad de ejecutar dos instrucciones a la vez (en paralelo)
 *
 * Desde hace unos años se crearon unas utilidades de JavaScript que se llamaron Workers
 * (ServiceWorker, Web Worker, SharedWorker, ...). Estos workers permiten crear un nuevo
 * hilo en JS y ejecutar instrucciones en paralelo. NO LO VAMOS A VER
 * (https://developer.mozilla.org/es/docs/Web/API/Web_Workers_API/Using_web_workers)
 *
 *
 * 1- Callbacks: Función que se pasa como parámetro de otra función que genera asincronia
 *              Cuando la tarea asincrona termina, se llama a mi funcion callback
 *    Pasos tenemos:
 *          1- Necesitamos una tarea que se ejecute fuera del hilo principal
 *                  ** Tarea que no bloquee JavaScript
 *                  EJ: Esperar a cada click de un usuario
 *                  EJ: Esperar 5 segundos para ejecutar algo
 *                  EJ: Solicitar recursos a un servidor
 *          2- Utilizamos una funcion que nos manda esa tarea a segundo plano
 *                  EJ: addEventListener()
 *                  EJ: setTimeout()
 *                  EJ: fetch() // descarga recursos de un servidor
 *
 *          3- Necesito una forma de que me avisen cuando esas en segundo plano
 *             hayan terminado. Es una funcion y se le llama CALLBACK
 * 
 * 2- Promises: Son un objeto JS que nos permite gestionar la asincronía y nos promete que va a devolver un valor que ya existe 
 *              o que se está generando para el futuro.
 * 
 *              La promesas tienen 3 posibles estados:
 *                  - pending (pendiente): estado inicial o que la promesa no ha terminado (La tarea asíncrona sigue en ejecución)
 *                  - fulfilled (cumplida): la promesa ha terminado de ejecutarse satisfactoriamente
 *                  - rejected (rechazada): la promesa ha terminado con error (rechazandose)
 * 
 *          - ¿Como se crea una promesa desde cero? (Esto es crear/definir no es utilizar):
 *              * const myPromise = new Promise(function(resolve, reject){ 
 *                  // resolve y reject son funcinoes que nos pasa la promesa y que nosotros tenemos que ejecutar para cambiar el estado
 *                  // de la promesa
 *                  // Codigo asíncrono que quiero ejecutar
 *                   resolve(3); -> La promesa pasa a estado fulfilled, esta terminada OK y el valor que devuelve es un 3
                     reject('ERROR'); -> La promesa pasa a estado rejected, esta terminada KO y el valor que devuelve es 'ERROR'
 *                });

            - ¿Como espero a que la promesa termine y obtenga su valor?
                // Los callbacks son dos funciones que reciben un parámetro con el valor en cada caso
                 myPromise.then(callbackSuccess,callbackError)
                 myPromise.then(callbackSuccess).catch(callbackError); 
                 // La unica diferencia es que este tambien se ejecuta con los errores de JS
 * 
 * 
 * 3- Async/Await: Es u cambio de sintaxis con respecto a las promesas, pero por debajo significan lo mismo
 *       
 *      VERSION PROMESAS
 * 
 *       function hazCosasAsincronas(){
 *              myPromise.then(cbOK, cbKO); 
 *       }
 *      
 *      VERSION ASYNC/AWAIT
 *       //especifico en una funcion que es o que llama a codigo asíncrono
 *       async function hazCosasAsincronas(){
 *         const valueFulfilled = await myPromise; 
 *       }
 *
 * */