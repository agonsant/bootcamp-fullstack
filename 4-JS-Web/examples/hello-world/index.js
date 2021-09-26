// Storage (Almacenamiento) en el navegador

// Cuando refrescamos la página -> Perdemos nuestro progreso
// Necesito un sitio donde guardar la informacion cuando cierre el navegador

/** 
 * 1- Cookies -> Son unos archivos pequeños que guardan informacion de 
 *      mi dominio web. <clave>:<valor> 
 *          - clave: Nombre de la cookie
 *          - valor: String con la informacion que queremos almacenar
 *     
 *      Para interaccionar/usar las cookies se utiliza:
 *          document.cookie (Es un string)
 * 
 *      Además las cookies tienen una serie de atributos/caracteristicas
 * 
 *          - A que dominio pertenecen (domain)
 *          - A que path pertenecen (Lo que va despues de la primera /)
 *          - Fecha de expiracion (expire)
 *          - secure (true o false)
 *          - httpOnly (true o false). 
 *                  Si true solo un servidor HTTP puede leerlos, 
 *                  no se podrían leer desde JS
 * 
 *     ¿Cuando se usan?
 *          - Session del Login (identificar al usuario)
 *                  * Tip: Esta cookie httpOnly
 *          - Cuando necesito que el servidor conozca una informacion
 *            sobre la navegacion del usuario
 * 
 * 
 */

/**
 * 2- SessionStorage -> 
 *          - Asociado a dominio
 *          - <clave>:<valor> => de tipo string
 *          - Cuando se cierra la pestaña se elimina
 *          - No se comparte entre pestañas
 *          - Casos de uso
 *                 - Compartir informacion entre páginas 
 *                   dentro de la misma pestaña
 *                 - Cuando quiero refrescar la misma pestaña y
 *                   mantener la informacion guardada
 * 
 *          - Como se usa
 *              window.sessionStorage o sessionStorage
 *              * sessionStorage.getItem('<clave>') -> Recupera el valor (string) de esa clave
 *              * sessionStorage.setItem('<clave>',<valor>) -> Inserta este dato en el storage
 *                  - Si el valor es un number (ej: 3) "3"
 *                  - Si el valor es un boolean (ej: true) "true"
 *                  - Si el valor es un objeto (ej: {a:3}) "[object Object]"
 *                  - Si el valor es un array (ej: [2,3,4]) "2,3,4"
 *                  - Si el valor es un function (ej: () =>{}) "function"
 *                 ** Para funcione, no se guardan
 *                 ** Para objetos y arrays hay una utilidad en window
 *                      JSON.stringify(<obj> o <arr>) => String 
 *                      JSON.parse(<string>) => Object o el Array
 *              * sessionStorage.removeItem('<clave>') -> Elimina la fila con su valor
 *              * sessionStorage.clear() -> Elimina todo el session
 */

/**
 * 3- Local Storage.
 *      - Igual que session, pero toda la vida o hasta que el usuario lo elimine
 *      - en vez de utilizar el objeto sessionStorage, 
 *        utilizaremos el objeto localStorage
 *      - se comparte entre pestañas
 *      - no se elimina al cerrar el navegador
 *      - Casos de uso:
 *          - Informacion que NO es sensible
 *          - Compartir informacion entre pestañas y 
 *            al cerrar y abrir el browser
 *          - Datos que casi nunca cambian (EJ: codigos postales, ciudades, paises, )
 * 
 */

/**
 * Otros: IndexedBD, cacheStorage
 */