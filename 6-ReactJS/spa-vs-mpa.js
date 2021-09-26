/**
 *  - Una página web es un documento HTML
 *  - Dos páginas web -> Sitio Web -> 2 documentos HTML (tradicionalmente)
 *  - Flujo de navegación de un usuario en un sitio web
 *      1. Solicito al servidor la página que quiero ver
 *      2. El servidor me devuelve su HTML
 *      3. El navegador me pinta ese HTML (+CSS, +JS)
 *      4. El usuario intenta navegar a otra página del sitio web
 *      5. EL NAVEGADOR SOLICITA LA NUEVA PAGINA AL SERVIDOR
 *      6. El servidor devuelve el HTML de la nueva página
 *      7. El navegador pinta la nueva pagina
 * 
 *  - A este flujo anterior se le llama MPA (multiple page application)
 *      ** CADA PAG. REQUIERE IR AL SERVIDOR A POR SU HTML
 * 
 *  - ¿Que problema tiene este flujo?
 *      1 Lento -> porque constantemente estamos yendo al servidor
 *      2 Cada HTML tiene que tener la información del contenido
 *      3 Tengo que crear un HTML para cada tipo de contenido
 *      * EJ: si tengo que pintar un listado de ciudades 
 *            El HTML tiene que tener las ciudades
 *      4 Los elementos comunes se tiene que duplicar en cada HTML
 * 
 *  - En si día salieron lenguajes en el servidor que solucionaban este problema
 *      * Montaban el HTML en cada peticion (en caliente) dentro del servidor
 *      * Esos lenguajes, tenían acceso a BBDD
 *      * Java (J2EE, servlets -> JSP y JSF), PHP 
 *      1- Eran aun mas lento que los estáticos, pero eran dinámicos
 *      2- El coste era muy muy muy superior
 * 
 *  - Alguien se dio cuenta que se podia usar el navegador para generar el HTML
 *  - Otro se dio cuenta que la visualización web es el contenido de mi negocio
 *    presentandolo en HTML y por tanto el contenido se podía reutilizar en 
 *    otros frontales.
 * 
 *  - Alguien se dio cuenta que una aplicación web o un sitio web
 *    podría ser un unico documento HTML (una unica página),
 *    al que le voy cambiando los datos y su estructura HTML
 * 
 *  - Single page application (SPA)
 * 
 *  - Flujo de la SPA
 *      1. Solicito al servidor la página que quiero ver
 *      2. El servidor me devuelve su HTML
 *      3. El navegador me pinta ese HTML (+CSS, +JS)
 *      4. Quiero navegar a otra página
 *      5. Pido al servidor LOS DATOS de la nueva pagina
 *      6. Elimino el DOM de la pagina actual
 *      7. Monto el nuevo DOM con LOS DATOS recibidos del servidor
 *      8. Añado el nuevo DOM a el "body" 
 * 
 * 
 * 
 * 
 * 
 * 
 */