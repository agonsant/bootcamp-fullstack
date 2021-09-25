/**
 * 1- crear una funcion que reciba dos numeros y devuelva la suma de ellos
 * 2- crear una funcion que reciba un string y devuelva el string en mayusculaç
 * 3- crear una funcion que reciba un string y devuelva los 3 primeros caracteres
 * 4- crear una funcion que reciba un array de numeros y devuelva un array con los que son mayores que 10
 * 5- crear una funcion que reciba un array de strings y devuelva un array con los strings capitalized
 *      ej-> ['gato', 'perro'] -> ['Gato', 'Perro]
 *          ['Gato', 'perro'] -> ['Gato', 'Perro]
 *          ['gAto', 'peRRo'] -> ['Gato', 'Perro]
 */


let arr = [1,3,4];

arr.push(1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,2);

// arr -> [1,3,4,1,2,3]

function test(){
    for(let i=0;i<arguments.length; i++){
        console.log('NºArgs ' + arguments.length + ': ' + arguments[i]);
    }
}

function demoRestParameters(a,b,...ejemploRest){
   
}

(...ejemploRest) => {  }

function maxStringLength(...stringsList){
    // ['hello','adios a comer'] -> 'adios a comer'
    let result='';
    for(let i=0; i<stringsList.length; i++){
        if(stringsList[i].length >= result.length){
            result = stringsList[i];
        }
    }

    return result;
}

console.log(maxStringLength('hello','adios')); // 'adios': 3, '':1, 'hello':3 

// console.log(maxStringLength('hello','adios a comer'));
// console.log(maxStringLength('hello','adios', 'adioss'));
// console.log(maxStringLength('hello','adiosssss', 'adioss', 'adiosss'));


const demo=() => {
    console.log(arguments.length);
}

demo(2);
