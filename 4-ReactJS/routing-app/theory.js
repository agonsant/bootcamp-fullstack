/**
 *  --------------------Componentes de función.---------------------------
 * 
 *    - Hasta ahora, salvo algún aventajado, habíamos creado los componentes
 *      utilizando clases que extienden de React.Component y que implementan
 *      un método RENDER
 * 
 *    - React ofrece otra sintaxis para crear componentes y es utilizando
 *      una FUNCION en vez de una CLASE.
 * 
 *    - ¿Y donde pongo el construtor? 
 *          * Las funciones no tienen constructor, por lo que la lógica 
 *            que necesite de inicialización la ponemos al principio
 *            de la función.
 *    - ¿Donde pongo el render?
 *          * Es la propia función, el return de la función es el return
 *            del render
 *    - ¿Como accedo a mis props?
 *          * La funcion recibe como parámetro de entrada las props
 *    - ¿Como accedo a mi estado? -> Lo veremos con los hooks
 *    - ¿Que ciclo de vida tendrá este componente? -> No tiene
 *    - ¿Cuando tiene sentido usar la sintaxis de clase y cuando la de funciones?
 *          ** Cuando te interese algo del ciclo de vida de un componente.
 * 
 * 
 *    - Ejemplo 
 *          *Sintaxis con clases
 *              class MyComponent extends React.Component{
 *                  render(){
 *                      return <h1>Hello World {this.props.myProp}</h1>
 *                  }
 *              }
 * 
 *              <MyComponent><p>hola</p></MyComponent> --> props.children
 * 
 *          *Sintaxis con funciones
 * 
 *              // utilizando funciones de nombre
 *              function MyComponent(props){ //EL NOMBRE TIENE QUE EMPEZAR POR MAYUSCULA
 *                  return <h1>Hello World {props.myProp}</h1>
 *              }
 *              
 *              function MyComponent({myProp}){ // deconstrucción de un objeto
 *                  return <h1>Hello World {myProp}</h1>
 *              }
 *              
 *              // utilizando funciones anónimas
 * 
 *              const MyComponent = function(props){//EL NOMBRE TIENE QUE EMPEZAR POR MAYUSCULA
 *                  return <h1>Hello World {props.myProp}</h1>
 *              }
 *   
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * --------------- Creando un sitio web -> muchas páginas web ----------------------
 * 
 * 
 *  React-Routing
 * 
 *      - Hasta ahora solo habíamos creado aplicaciones que tenían una única
 *        página HTML
 *      - Necesito la forma de crear más de una Página web
 *      - Necesito la forma de navegar de una página web a otra página web
 *      - Como MPA navegaríamos usando un tag <a>, pero esto va al servidor a por la siguiente
 *        página
 *      - ReactJS funciona como SPA, necesito cambiar de página sin tener que ir al servidor
 * 
 *      - Necesito una URL y sobre todo necesito Páginas
 *      - Una página en react no es mas que un componente con el HTML de esa página
 *      
 * 
 *      - Para todas estas necesidades, tenemos una librería que se llama `react-router`
 * 
 *      1- Una vez instalado react router. En nuestra aplicación, añadimos el componente
 *         Router de react-router-dom
 *      2- Utilizar el componente Switch para definir un conjunto de rutas
 *      3- Utilizar el componete Route para asociar una ruta a un componente página dentro del
 *         <Switch>
 *      4- Utilizar el componente Link para crear un enlace a otra página dentro de nuestro sition 
 *         web. SOLO PARA ENLACES INTERNOS. los enlaces externos siguen siendo con <a>
 * 
 * 
 * 
 * 
 */