/*****************************************
 * Exercises about arrays.
 * You are only allowed to resolve them using:
 *  - let and const
 *  - numbers, boolean, strings, null and undefined
 *  - Arithmetical and logical operators
 *  - Conditional Sentences
 *  - Loops
 *  - Math
 *  - functions (no arrow-functions)
 *  - Arrays
 *  - Array Functions
 ********************************************/

/**
 * 1- (Easy) Function that sorts an array of number asc
 */
 console.log('******** EXERCISE 1 **********');

 function compareNumbers(a,b){
   return a-b;
}

function sortNumbersAsc(arr){
   return arr.sort(compareNumbers);
}

/**
 * 2
 * - (Easy) Function that sorts an array of number asc
 */
 console.log('******** EXERCISE 1 **********');

/**
 * 2- Escribir una funcion de comparacion para ordenar un array de booleanos poniendo primero los false y luego los true
 * 3- Escribir una funcion de comparacion para ordenar un array de strings por su longitud de caracteres de menor a mayor
 * 4- Escribir una funcion para filtrar un array de numeros dejando solo los numeros pares
 * 5- Escribir una funcion para filtrar un array de numeros dejando solo los mayores de 30
 * 6- Escribir una funcion para filtrar un array de booleanos dejando solo los valores true
 * 7- Escribir una funcion para filtrar un array de strings dejando los que su longitud sea impar
 *
 * */

/**
 * 1- (Easy) Crear una funcion que dado un array numeros me diga si todos los numeros son mayores que 10
 * 2- (Easy) Crear una funcion que dado un array numeros me diga si hay alguno mayor que 10
 * 3- (Easy) Crear una funcion que dado un array de strings, devuelva un array sin modificar el array de entrada, con todos los strings en mayúsculas
 * 4- (Easy) Crear una funcion que dado un array de strings, modifique el array con todos los strings en mayúsculas
 * 5- (Easy) Crear una función que dado un array elimine el elemento que se encuentra en la mitad (redondeada hacia abajo)
 * 6- (Medium) Crear una funcion que dado un array de strings, me devuelva los strings de la posicion de la mitad del array, los dos anteriores y los dos siguientes, en un mismo string separados por espacios
 * 7- (Medium) Crear una funcion que dado un array bidimensional de strings, lo convierta a un array unidimensional con todos los strings consegutivos.
 *    EJ: [['a','b'], ['c','d']] => ['a','b','c','d']
 *    function flat
 * 8- (Hard)Cuando vamos a urgencias, nos atienden en recepción y nos asignan un orden para ser atendido.
 * Este orden va en funcion de dos factores:
 *    1.- Orden de llegada a urgencias
 *    2.- Criticidad de la urgencia
 *
 * Construir una función "siguientePaciente" que dados dos arrays de la misma longitud
 *  - EL primer array es el de los nombres de los pacientes en orden de llegada
 *  - El segundo array representa la criticidad asociada a cada paciente
 * El array de criticidad está asociado con el array de nombres por su posicion de forma que:
 * El paciente en la primera posicion del array de nombres tiene la criticidad de la primera
 * posicion del array de criticidades.
 *
 * La función "siguientePaciente" debe eliminar y devolver el nombre del siguiente paciente
 * que hay que atender en urgencias.
 *
 *
 */

const patientsNames = ['Diego', 'Alex', 'Yohe', 'Matias'];
const severityNames = [1, 2, 4, 4]; // 0-Muy baja y 4-Muy Urgente

// -> 'Alex'
// pat ==> ['Diego', 'Yohe'], sev ==> ['Baja', 'Urgente']
   // 1. Buscar la posicion del siguiente paciente más critico
   // 2. Una vez tengo la posición, eliminar el paciente de los dos arrays ==> splice
   // 3. Devolver el nombre

function getNextMaxSeverityPosition(severities){
   let currentMaxPosition=0;
   severities.forEach((severity,i,arr) => {
      if(severity > arr[currentMaxPosition]) {
         currentMaxPosition=i;
      }
   });
   return currentMaxPosition;
}

function removePatient(patientsNames, patientsSeverity, position){
   patientsNames.splice(position,1);
   patientsSeverity.splice(position,1);
}

function nextPatient(patientsNames, patientsSeverity){
   let positionNextPatient =getNextMaxSeverityPosition(patientsSeverity);
   let name = patientsNames[positionNextPatient];
   removePatient(patientsNames, patientsSeverity, positionNextPatient);
   return name;

}

console.log(nextPatient(patientsNames, severityNames));
console.log(nextPatient(patientsNames, severityNames));
console.log(nextPatient(patientsNames, severityNames));
console.log(nextPatient(patientsNames, severityNames));





