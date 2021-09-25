/**
 * 5- Crear un programa que cree un archivo con los primeros 100 números pares. Modificar el programa para que le entre un numero y el path donde se tiene que generar el archivo como argumentos del programa (node app.js 1000 C:/users/aaa/Desktop), e escribirá en el archivo los primeros `numero` pares. La ruta puede ser relativa y entonces se creará de manera relativa al programa. Además si en la ruta hay directorios que no existen, habrá que crearlos.
    Hint: Para realizar esta aplicación vamos a tener que pensar mucho en como ir viendo y creando los directorios que no existen. Podrían ser utiles los siguientes métodos:
    Modulo fs
        access: me ayuda a saber si un directorio existe o no
    Modulo path
        isAbsolute: me indica si una ruta es absoluta o no
        resolve: me devuelve la ruta absoluta dada una ruta relativa
        normalize: me genera una ruta limpia. EJ: C:/users/alex/demo/../ === C:/users/alex/
 */

import fs from "fs";
import path from "path";

const args = process.argv.slice(2); // eliminamos los dos primeros argumentso ya que son node y la ruta del archivo

function printFirstEvenNumbers(n, destination) { // pinta los primeros n numeros pares
  const arr = [];
  generatePathInSO(destination);
  for (let i = 0; i < 2*n; i++) { // es 2n porque necesito el doble de elementos para coger los primeros n pares
    // Si i es par, lo añado a un array.
    if (i % 2 === 0) arr.push(i);
  }

  // escribo todos los datos
  fs.writeFile(path.join(destination,'numbers.txt'), arr.join("\n"), (err) => {
    if (err) throw err;
  });
}

/**
 * Esta función recibe una ruta y tiene que generara todo el arbol de directorios de 
 * esa ruta. La ruta puede ser absoluta o relativa
 * 
 * C:/users/alex/demo/clase/ejercicios
 * ../users/alex/demo/clase/ejercicios
 * 
 * 1- Comprobar si es una ruta o un archivo
 * 2- Compruebo que users exite y sino lo creo
 * 3- compruebo que alex existe y sino lo creo
 * 4- Compruebo que demo existe y sino lo creo
 * 5- Compruebo que clase existe y sino lo creo
 * 
 * 2- Recorro cada nivel desde el más bajo hasta que encuentre una ruta que exita
 *      ** añado cada nivel que no exista a un array
 * 3- Recorro el array de niveles que no eisten creando el directorio de cada nivel
 */

function absolutePathExists(currentPath){
    try{
        fs.accessSync(currentPath,fs.F_OK);
        return true;
    }catch(err){
        return false;
    }
}

function generatePathInSO(currentPath){
    let auxPath = currentPath;
    let auxArr = [], found=false;
    // Si la ruta es relativa genero su ruta absoluta
    if(!path.isAbsolute(auxPath)) auxPath = path.resolve(auxPath);
    // Solo tengo un caso, que es teniendo una ruta absoluta
    // 2- Recorro cada nivel desde el más bajo hasta que encuentre una ruta que exita
    //     ** añado cada nivel que no exista a un array
    while(!found){
        if(!absolutePathExists(auxPath)) {
            const p = path.parse(auxPath);
            auxArr.unshift(p.base) // añadimos al principio del array el nombre actual del diretorio
            auxPath = p.dir; // la nueva ruta a procesar es la padre
        }else{
            found = true;
        }
    }

    // 3- Recorro el array de niveles que no existen creando el directorio de cada nivel
    auxArr.forEach(e => {
        // actualizo el path base para crear el directorio y para la siguiente iteración
        auxPath = path.join(auxPath,e); // concatena las rutas
        // creo el directorio e
        fs.mkdirSync(auxPath); 
    });
}

printFirstEvenNumbers(parseInt(args[0]), args[1]); // improme los primeros pares indicados como argumento
