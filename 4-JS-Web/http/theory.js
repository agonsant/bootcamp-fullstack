/**

    ** Protocolo HTTP

        - HyperText Transfer Protocol (Secure)
        - Request === Peticion que yo le hago a quien le pido la info
            * URL -> Representa A quien le pido la información y que información le pido
                - Estructura: (http(s)://<address>:<port>/<path>?<queryParams>#<hashName>)
                    ** Ejemplo:  https://pokeapi.co/api/v2/pokemon?limit=150
                    ** <address> => Dirección del destino (La máquina). Puede ser un dominio DNS o una IP
                    ** <port> => Es la "Darsena" donde está la aplicación a la que quiero acceder
                                 en el destino. Es un número que puede ir desde el 1-65635.
                                 Por defecto (y lo más habitual en "Producción")
                                    - http -> 80
                                    - https -> 443
                                    ** El navegador nos introduce automáticamente el puerto estandar del protocolo
                                * Si yo quiero una aplicación en un puerto <1024 necesito permisos de administrador
                                * Otros protocolos tambien tiene puerto por defecto: SSH -> 22
                    ** <path> => Originalmente, era el directorio/ruta donde se encontraba el archivo 
                                 que yo quería recuperar 
                                 Cada nivel de directorio se ponía con un /
                                 Hoy en día representa la información que yo quiero y no tiene porqué ser un archivo
                                 ** Mejor no poner espacios (%20) y separar con guiones medios
                                 ** Son importantes para el SEO
                    ** <QueryParams> => Se utiliza para mandar información el servidor destino
                            - pares <clave>=<valor>
                            - Entre parametros se separa con un &
                            - Acotan la información que yo quiero, pero el tipo de info es el mismo
                            -ej: <url>?demo=pruebaValor&otherParam=otherValue
                    ** <hashName> => Se utiliza para posicionarme dentro de una misma página web
                            - Cargar la página Web en un punto concreto de la misma (id del elemento === hash)
                                ej: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP_session
                                    <span class="mw-headline" id="HTTP_session">HTTP session</span>
                            - Enrutado en cliente (diferentes páginas web solo yendo al servidor una vez)
                                ** Esto se conoce como SPA (Single Page Application) (ReactJS)
            
            * Methods (Métodos): Indican al servidor web el tipo de operación que yo quiero hacer con la información
                    - GET -> representa la obtencion/lectura de la información
                        ** Cuando ponemos una url en el navegador, ES UN GET
                    - POST -> Representa la creación de la información
                    - PUT -> Representa la actualización del contenido, sustituyendo el valor anterior
                    - PATCH -> Representa la actualización del contenido, solo actualizando las propiedades de la info que yo quier
                            ** Partial Update
                    - DELETE -> Representa la eliminación del contenido

            * HEADERS (Cabeceras): Representan información extra de la petición
                    - <clave>:<valor>
                    - Cabeceras básicas que van en todas las peticiones:
                        - origin: Es la dirección de quien está haciendo la peticion
                        - content-type: Indica el formato en el que va la peticion
                    - Cookies: Se mandan solas por el navegador
                    - Cabeceras de autenticación: (Veremos mas tarde)

            * BODY (Cuerpo): Datos de la petición
                    - Hay varios formatos. El más típico actualmente es JSON

        - Response === Respuesta del que le pedi la informacion
            * Codigo/status de respuesta: Código numérico
                -100-199: Es una respuesta informativa
                -200-299: OK. La petició se ha realizado correctamente
                -300-399: Redirección o cache
                -400-499: Error "del usuario (cliente)"
                -500-599: Error "del servidor"
            * Cabeceras: Idem a las de petición pero para la respuesta
            * Cuerpo de la respuesta: Informacion del recurso que estoy solicitando
                    ** Es decir los datos. 


    ** ¿Como puedo hacer operaciones con los datos en mi web?
        - Realizar una Llamada HTTP(s)

    ** ¿Como realizo una llamada HTTP en la web?
        - utilizando el método "fetch"
        - Existe otra forma (antigua) que es "XMLHttpRequest"
        - Una peticion HTTP en un navegador es ASINCRONA
            - fecth soluciona la asincronía utilizando "promesas"
            - XMLHttpRequest soluciona la asincronía utilizando "callbacks"

    ** fetch - método para realizar peticiones HTTP y solicitudes de operaciones
               sobre información.
        - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        - Es una función. typeOf de fetch === 'function'
        - ¿Que puedo hacer con una funcion?. "Cosas de funciones"
            - Invocarla/Llamarla -> Todos sabríamos hacer esto
            - Enviar SUS parámetros de entrada
            - Recuperar su parámetro de salida
        - ¿Cuales son sus parámetros de entrada (fetch)?
            - URL: String o Request(https://developer.mozilla.org/en-US/docs/Web/API/Request)
            - Options: Object
                - Metodo HTTP : String
                - Cabeceras : Object de tipo Headers (https://developer.mozilla.org/en-US/docs/Web/API/Headers)
                - Body: JSON.stringify(Object). Suele ir solo en POST, PUT o PATCH
        - ¿Que respuesta devuelve la función (fetch)?
            - Devuelve una Promesa, que cuando se resuelve tenemos la respuesta del servidor
            - .then() nos ayuda a gestionar esa promesa
                - callbackOK y callbackKO
            - .catch() nos ayuda a gestionar excepciones
            - Si yo tengo alguna acción que depende de la respuesta del servidor,
            Como es asíncrono, debo meterlo dentro de las funciones del then
            - En el primer then TENEMOS la respuesta pero NO tenemos los datos.
                * Tenemos que ejecutar el método para procesar el formato
                        ** res.json() // formatea la respuesta en JSON
                        ** res.text() // formatea la respuesta en texto plano
                * Este método de formato devuelve una PROMESA.
                    ** Por este motivo para tener los datos en un fetch hay que hacer 
                        2 then encadenados


        ** CORS y method OPTIONS

 */

