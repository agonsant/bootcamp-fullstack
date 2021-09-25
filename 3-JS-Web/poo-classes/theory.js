/**
 *  - Introducción a POO: Tipo/forma de programación. 
 *                        Se basa en la definicion de entidades/conceptos
 *                        Se acerca mucho a la definición de elementos en la vida reales
 *      * Principios
 *          * Encapsulación: Crear una envoltura y dentro de esa envoltura metemos
 *                           la definición de un concepto bajo un nombre
 *          * Abstracción: Ocultar la forma en la que algo está desarrollado
 *          * Herencia: Obtener/recibir propiedades y metodos de otras entidades de POO
 *          * Polimorfismo: Habilidad que tiene la entidad en tomar multiples formas.
 * 
 *  - Clases vs Objetos
 *      let a = {
 *          name: 'Alex', // Atributos/propiedades con el valor que representa => variables que representan una caracteristica de mi entidad/individuo
 *          surname: 'Gonzalez,
 *          walk: function(){ // Metodos o acciones que puede realizar esa entidad
 *              // Walk Stuff for person
 *          }
 *      }// Representa a Alex dentro del mundo/entidad de las personas
 * 
 *      let b = {
 *          name: 'Matias', // Atributos/propiedades con el valor que representa => variables que representan una caracteristica de mi entidad/individuo
 *          surname: 'Lallave,
 *          walk: function(){ // Metodos o acciones que puede realizar esa entidad
 *              // Walk Stuff for person
 *          }
 *      }
 * 
 *     ** Clase => Es una definición de una entidad/concepto
 * 
 *            Coche: -> Esto es una clase
 *              ** Propiedades/atributos
    *              - numero de ruedas
    *              - matrícula
    *              - color
    *              - numero de puertas
    *              - marca
    *              - combustible
    *              - kilometros
    *              - potencia
    *              - modelo
 *             ** Acciones puedo hacer con un coche?
 *                 - arrancar
 *                 - frenar
 *                 - acelerar
 *                 - colisionar
 *                 - girar
 *                 - derrapar
 *                 - matricular
 *                 - cambiarRuedas
 *                 - estacionar 
 * 
 *      ** Objeto: Un individuo concreto de una clase (Instancia)
 *          
 *          let ferrari testarrosa 5472HHZ: // Esto ya es un ferrari real unico 
 *               -numRuedas: 4,
 *               -color: rojo,
 *               -modelo: testarrosa,
 *               -matrícula: 5472HHZ
 *             
 *             ferrari.arrancar();
 * 
 *          let ferrari_2 f40 5473HHZ: // Esto ya es un ferrari real unico 
 *               -numRuedas: 4,
 *               -color: verde,
 *               -modelo: f40,
 *               -matrícula: 5473HHZ
 *             
 *             ferrari_2.arrancar();
 * 
 * 
 *   ¿COMO LO CODIFICO?
 * 
 * 
 *      - Clases:
 * 
 *          class <nombreClase> {
 * 
 * 
 *          }
 * 
 * 
 *          
 *          class Coche { // Esto es una definición de todos los coches
 *              // CREAR UNA CLASE ES ENCAPSULAR SU FUNCIONALIDAD
 *              
 *              //------ DEFINICION PROPIEDAS --------//
 * 
 *              constructor(modelo,color){
 *                  // Esta es una funcion que se ejecuta cada vez que cree un objeto
 *                  // de esta clase
 *                  // SIRVE PARA INICIALIZAR LAS PROPIEDADES/ATRIBUTOS
 *                  // this.<nombreProp> = <valor>;
 *                  this.numRuedas = 4;
 *                  this.color = color;
 *                  this.modelo= modelo;
 *                  this.matricula = null;
 * 
 *              }
 * 
 * 
 *              //------ DEFINICION METODOS/ACCIONES -----//
 * 
 *              getNumRuedas(){
 *                  return this.numRuedas;
 *              }
 * 
 *              calcularCapacidadCarga(){
 *                  return this.numRuedas* this.peso/ INTEL
 *              }
 * 
 *              arrancar(){
 *                  // CODIGO DE ARRANCAR
 *              }
 * 
 *              matricular(matricula){ // Guardar el valor de la matricula
 *                  this.matricula = matricula;
 *              }
 *              
 *          }
 * 
 *  
 *     - Objeto: Crear una instancia de la clase (un individuo real)
 * 
 *          let/const ferrariTestarrosa = new Coche('Testarrosa', 'rojo'); // Crea un ferrari testarrosa rojo
 *          
 *          ferrariTestarrosa.matricular('5453HHZ'); // ABSTRACCION
 * 
 *          // YA TENGO UN  FERRARI TESTARROSA ROJO CON MATRICULA 5453HHZ
 *          ferrariTestarrosa.getNumRuedas() // Me devuelve un number con el numero de ruedas
 * 
 * 
 *  **Herencia: Rebicir propiedades o acciones de un Padre/Madre
 *      
 *     clase Moto {
 *         
 *          - numRuedas:2
 *          - color:
 *          - matricula
 *          - 
 *          
 *     }
 * 
 * 
 *     clase Vehiculo{ // DEFINICION DE VEHICULO
 *          constructor(color, modelo, numRuedas){
 *             this.color=color;
 *             this.modelo=modelo;
 *             this.numRuedas = numRuedas;
 *          }
 * 
 *          arrancar(){
 *              console.log('brum brum');
 *          }
 *     }
 * 
 *  
 *     let myVehiculo = new Vehiculo('verde','testarrosa', 4);
 *     myVehiculo.arrancar();
 *     myVehiculo.encenderAireAcondicionado(); // ERROR, no es de vehiculo
 * 
 *     clase Coche extends Vehiculo{
 *          
 *          constructor(color, modelo){
 *              // invocamos al constructor de la clase que heredamos
 *              // super tiene que ser la primera instruccion del constructor hijo
 *              // le tenemos que pasar al constructor padre los parámetros que nos pida
 *              super(color, modelo, 4); 
 *          }
 * 
 *          encenderAireAcondicionado(){
 *              // COSAS DE ENCENDER AIRES
 *          }
 *     }
 * 
 *     let ferrariTest = new Coche('verde','testarrosa');
 *      ferrariTest.arrancar();
 *      ferraiTest.encenderAireAcondicionado();
 * 
 *     clase Moto extends Vehiculo{
 *          
 *          constructor(color, modelo){
 *              // invocamos al constructor de la clase que heredamos
 *              // super tiene que ser la primera instruccion del constructor hijo
 *              // le tenemos que pasar al constructor padre los parámetros que nos pida
 *              super(color, modelo, 2); 
 *              this.tamañoDelManillar = 32;// definicion de propiedades customizada
 *          }
 *          
 *          hacerCaballito(){
 *              // COSAS DE CABALLITOS
 *              this.numRuedas=1;
 *              // pueda acceder a todas las propiedades y metodos del padre
 *              // OJO: solo las que son public o protected (no afecta a JS)
 *          }
 * 
 *          arrancar(){ // Overrride de una metodo
 *          }
 *     }
 * 
 *     let hondaMoto = new Moto('azul','hr');
 *      hondaMoto.arrancar();
 *      hondaMoto.encenderAireAcondicionado();// ERROR. no existe ni en moto ni en vehiculo
 *      hondaMoto.hacerCaballito();
 * 
 * 
 */