/**
 * 1- Hello World. Crear un objeto que tenga un propiedad de tipo number.
 *    Imprimir solo la propiedad por pantalla
 *    Imprimir todo el objeto por pantalla
 *    Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects
 *
 * 2- Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, velocidad actual y algo que me indique si está encendido o apagado
 *
 * 3- Crear un array de objetos coche
 *
 * 4- Imprimir por pantalla la velocidad del 4º coche
 *
 * 5- Hacer una funcion que devuelva un array con los coches de una marca que se le pasa por parametro
 *
 * 6- Hacer una funcion que me indque si hay algun coche encendido
 *
 * 7- Hacer una funcion que me devuelva la velocidad media de todos los coches (hint: read about reduce function of arrays)
 *
 */

/*
1- Escribe una función que dado un string con una hora (EJ: 14:36:57) devuelva un objeto con las propiedades de hora, minutos y segundos del string (Hint: use the split function of strings)
2- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, devuelva el valor de esa propiedad
3- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, elimine esa propiedad del objeto
4- Escribe una función que imprima por pantalla el `nombre:valor` de cada propiedad de un objeto encapsulando cada propiedad por ()
5- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), devuelva el precio total de todos los productos
6- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), devuelva cuantos tipos de producto existen
7- A la definición de coche de esta mañana añadiremos 4 operaciones que podamos hacer con ellos (arrancar, apagar, acelerar, frenar). Cada una de ellas es una propiedad función del objeto. Tanto aceleración como frenado sumarian/restarian 10 a la velocidad actual
*/

// console.log(this);

// function demoThis(){ // Generan su propio contexto, es decir su propio this
//     console.log(this);
// }

// const demoArroyThis = () => console.log(this); 
// las arrow functions, heredan el contexto del padre

// demoThis();
// demoArroyThis();


this.name = 'Hola';
console.log(this);

let obj = {
    name: 'Alex',
    nameToUpper: function(){
        return this.name.toUpperCase(); // ALEX +2
    },
    nameToUpperArrow: () => this.name.toUpperCase(), // Error, HOLA +2, 
    otherObj: {
        myName: 'Alex_2',
        nameToUpper: function(){
            return this.myName.toUpperCase();
        },
        nameToUpperArrow: () => this.name.toUpperCase(), // undefined, HOLA +3, ALEX +1
    }
}

let objOtherContext = {
    name: 'Veka'
}

// let functionWithThisChanged = obj.nameToUpper.bind(objOtherContext);
// console.log(obj.nameToUpper());
// console.log(functionWithThisChanged());


//console.log(obj.nameToUpper());
// console.log(obj.nameToUpperArrow.call(objOtherContext));


// Object.keys(obj).forEach(element => {
//     console.log(obj[element]);
// });

// let functionSufix = 'Arrow';

// console.log(obj['nameToUpper'+functionSufix]());


/**
 * Write a function which prints every properties of an input object line by line with the next pattern (key-value)
 * If the property to be printed is an object, it must prints its properties line by line with a tab.
 * this must be repeated for objects of objects
 * EJ: 
 * INPUT => {
 *          key:'value',
 *          childObj: {
 *              keyChild:'ValueChild',
 *              childOfChild: {
 *                  keyChildOfChild: 'valueChildOfChild'
 *              }
 *          }
 *      }
 * 
 * OUTPUT
 * key-value
 * childObj-object
 *      keyChild-ValueChild
 *      childOfChild-object
 *          keyChildOfChild-valueChildOfChild
 *          
 */

function printObject(obj, level){

}

