/**
 *  NPM: Repositorio de librerías JavaScript, es decir, 
 *      Un sitio donde están publicadas las librerias que consumimos
 *      en proyectos que usen JavaScript
 * 
 *      - Los paquetes pueden ser instalables en un proyecto y así
 *        Los puedo consumir de forma local al proyecto
 *        sin tener que descargármelos desde una CDN (ej de CDN:https://unpkg.com/react@17/umd/react.development.js )
 * 
 * 
 *      - Además NPM me da un programa que puedo ejecutar y que viene
 *        instalado cuando instalamos NodeJS
 * 
 *          * Esta aplicación nos permite trabajar con los paquetes npm
 * 
 * 
 *      - Para poder trabajar en un proyecto con npm, tenemos que iniciar
 *        e indicar que es un proyecto NPM.
 * 
 *      - Para crear un proyecto npm, debemos ejecutar el comando
 *          ** npm init
 *          ** Esto nos hará una serie de preguntas relacionadas con el proyecto,
 *             que debemos contestar
 *                - ej: nombre del proyecto
 *          ** Tras las preguntas, se nos habrá creado un archivo especial
 *              - package.json (archivo de definicion de un proyecto npm)
 *                  * Aqui va el nombre del proyecto y la version
 *                  * Los autores del proyecto
 *                  * La licencia del proyecto
 *                  * Keywords que sirven para entender de que va el proyecto
 *                  * Las librerías de las que depende el proyecto
 *                  * Scripts del proyecto
 *                      - Construcción del proyecto
 *                      - Testing automatico de mi proyecto
 * 
 * 
 *      - Para añadir una librería hay que ejecutar el siguiente comando:
 *          * npm install <nombre_libreria_npm>
 *               ej: npm install react
 * 
 *      - Para quitar una librería hay que ejecutar:
 *          * npm uninstall <nombre_libreria_npm>
 * 
 *      - *** Los comandos npm solo se pueden ejecutar en un directorio
 *            donde haya un package.json
 *      - Cuando hagamos un install o un uninstall, se nos va a crear una nueva carpeta
 *         llamada node_modules -> En esta carpeta están nuestras librerías y 
 *          NO hay que subirla a github (git)
 * 
 *          
 * 
 * 
 * 
 * 
 * 
 */