/**
 *  
 *  Props -> Son un objeto que se utiliza para pasar parámetros al componente.
 *      * Si el componente es de clase, se nos pasaran como parámetro del constructor
 *      * Si el componente es de funcion, se nos pasará como parámetro de la función
 *      * Si no defino ninguna propiedad, el objeto es vacio
 * 
 *      - Ejemplo:
 * 
 *          class GreetingComponent extends React.Component{
 *              
 *              constructor(props){
 *                // Se lo tengo que pasar al super para poder hacer
 *                // this.props en cualquier momento del componente
 *                  super(props);
 *              }
 * 
 *              printHello(){
 *                  console.log(this.props.name);
 *              }             
 * 
 *              render(){
 *                  return <h1>Hola {this.props.name}</h1>;
 *              }
 *          }
 *      
 *          export default GreetingComponent;
 * 
 *       - Para pasarle properties a un componente, tengo que llamar a mi componente.
 *         Despues de llamar a mi componente tengo dos opciones:
 * 
 *          * escribir un atributo `props` igualandolo al objeto que espera mi componente
 *          import GreetingComponent from '<path>';
 * 
 *          class GreetingConsumer extends React.Component {
 *              constructor(){
 *              }
 * 
 *              render(){
 *                  const greetingsProps = {
 *                      name: 'Alex'
 *                  }
 *                  return <GreetingComponent props={greetingsProps}></GreetingComponent>
 *              }
 *          }
 * 
 * 
 *          * escribir el nombre de cada prop como atributo del componente dándole un valor
 * 
 *          import GreetingComponent from '<path>';
 * 
 *          class GreetingConsumer extends React.Component {
 *              constructor(){
 *              }
 * 
 *              render(){
 *                  const matiasName = 'Matias';
 *                  return (
 *                      <div>
 *                          <GreetingComponent name="Alex"></GreetingComponent>
 *                          <GreetingComponent name="Paloma"></GreetingComponent>
 *                          <GreetingComponent name={matiasName}></GreetingComponent>
 *                      </div>
 *                     )
 *              }
 *          }
 * 
 * 
 * 
 */