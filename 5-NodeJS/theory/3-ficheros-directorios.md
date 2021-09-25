# Ficheros y Directorios

## ¿Que es un fichero?

Un fichero a nivel de SO, es la forma que tengo de almacenar información dentro de un ordenador o un servidor.

Basicamente son datos encapsulados en una "bolsa" o estructura llamada fichero y que presenta las siguientes características:

- **Nombre**: identifica al fichero en una misma ruta
- **Extensión**: indica el tipo de archivo o el formato en el que se ha construido el archivo. (js, md, css, html, json, png, jpg, jsx, mjs, svg, pdf, docx).
- **Datos**: La información del archivo. Dos tipos: Binario o Texto Plano.
- **Ruta (path)**: Donde encontrarlo en el SO (C:/)
- **File Size**: El tamaño del archivo
- **Permisos**: Indican quien puede y quien no puede realizar acciones con el archivo.
  - 3 tipos de acciones:
    - Lectura (r) => Obtener los datos
    - Escritura (w) => Escribir o modificar los datos
    - Ejecución (x) => Ser ejecutado por un programa
  - 3 tipos de usuario, para el parámetro ¿Quien Puede?:
    - El usuario al que le pertenece el archivo (yo)
    - Los usuario pertenecientes a mis grupos
    - El usuario administrado (root)

\*\* 0 significa que ese usuario no tiene permiso para la acción que representa.

\*\* 1 significa que ese usuario SI tiene permiso para esa acción

USR GRP ROOT
rwx rwx rwx
010 100 111 my-file.js --> Representación Octal (base 8) 247

0 -> 0
1 -> 1
10 -> 2
11 -> 3
100 -> 4
101 -> 5
110 -> 6
111 -> 7
1000 -> 10 en octal -> 8 en decimal
1001 -> 11 en octal -> 9 en decimal

## ¿Que es un directorio?

Un directorio es un contenedor de ficheros u otro directorios.

Características:

- **Nombre**: Lo identifica dentro de su directorio.
- **Ruta**: Donde se encuentra el directorio.
- **Size**: Tamaño del directorio.
- **Lista de archivos/directorios que tiene dentro**
- **Permisos**:
- 3 tipos de acciones:
  - Lectura (r) => Leer la lista de elementos del directorio
  - Escritura (w) => Crear/borrar un archivo o un directorio dentro del mismo
  - Ejecución (x) => Cambiar de directorio (cd)

\*\* Hay un directorio especial, que se llama `directorio raíz` o `root directory`, que representa la raíz dentro de un arbol de directorios.

- C: (Windows)
- / (Linux o Mac)

Todo archivo o directorio tiene una ruta dentro de su arbol de directorios.

## ¿Que es una ruta?

Es el lugar donde se encuentra ese archivo o directorio dentro de su arbol.

Para formar la ruta empezamos por el directorio raíz y vamos separando por barras (/) cada directorio padre del de nuestro objetivo:

EJ:

(Windows) -> C:/Users/34665/Desktop/demo-redux/redux-hello-world/src

(Linux/MAC) -> /home/34665/desktop/demo-redux/redux-hello-world/src

A esta ruta se le llama `ruta absoluta` porque parte del directorio raíz.

Existe la posibilidad de establecer rutas entre dos elementos (ficheros o directorios).
Para que un fichero/directorio A referencie a un fichero/directorio B tiene dos posibilidades:

- **Su ruta absoluta en el SO**. (esto presenta problemas ya que solo funcionaría para ese usuario)
- **Su ruta relativa**: Ese camino desde A hasta B dentro del arbol de directorios. Para poder definir ese camino tendré que subir o bajar niveles en el arbol.
  - **../** : Sube un nivel en el arbol.
  - **./**: Me quedo en ese mismo nivel.
  - **/\<name\>**: Bajo un nivel al directorio /\<name\>.

.././hola === ../hola
./hola === accedo a un hermano mio.

## ¿Como puedo hacer apliaciones en NodeJS que usen ficheros/directorios?

Para ello nodeJS nos expone un módulo que se llama `fs` (file system)

### CRUD

- [API Original](https://nodejs.org/api/fs.html)
- [Ejemplos NodeJS](https://nodejs.dev/learn/the-nodejs-fs-module)
- [Ejemplos W3School](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)

```js
import fs from "fs"; // importo el módulo para gestionar archivos

// CREATE
/** Creamos un archivo de manera asíncrona, por eso necesitamos
 * un callback cuando la operación haya acabado */
fs.writeFile("first-file", "Hello First File!", function (err) {
  if (err) throw err;
  console.log("Saved local!");
});

// /** Creamos un archivo en otra ruta */
// fs.writeFile("../../first-file.txt", "Hello First from other directory File!", function (err) {
//   if (err) throw err;
//   console.log("Saved en otro directorio!");
// });
// READ

fs.readFile('first-file.txt', function(err, data) {
    if (err) throw err; // Lanzo mi error si hay error
    console.log(data.toString()); // data es un buffer como el stdin
  });

// UPDATE

fs.appendFile('first-file.txt', ' This is my new text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

// DELETE


fs.unlink('first-file', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

// RENAME (Se puede utilizar para mover archivos o simular el 'cortar y pegar')

fs.rename('first-file','new-file-name', function (err) {
    if (err) throw err;
    console.log('File renamed!');
  });

```

### Sync vs Async

Estos metodos anteriores son Asíncronos, por eso necesitan un callback como último parámetro, que nodejs ejecutará cuando la operación haya terminado, con la información necesaria y además un objeto por si han habido errores.

Si tengo algo como esto:

```js
console,log('Antes');
fs.rename('first-file','new-file-name', function (err) {
  if (err) throw err;
  console.log('File renamed!');
});
console,log('Despues');
```

¿En que orden se ejecutan los console.log?
1- Antes
2- Despues
3- File Renamed

Existen las versiones Síncronas de cada una de las operaciones con archivos.

```js
console,log('Antes');
try{
  fs.renameSync('first-file','new-file-name'); // ejecución sincrona del rename
}catch(err){
  console,log(err);
}
console,log('Despues');

```

### Directorios

Con los directorios puedo hacer las siguientes operaciones:

- Obtener su lista de elementos
- Crear un directorio
- Borrar un directorio
- Renombrar o mover un directorio

```js
/** CREATE DIRECTORY */


fs.opendir('demo', (err,dir) => { // Leemos el directorio para comprobar si existe o no
    if(!dir){ // si no existe el directorio lo creamos
        fs.mkdir('demo',err => console.log('Todo ok?:',err));
    }else{
        console.log('El directorio estaba ya creado')
    }
});


/** BORRAR un Directorio */

fs.rmdir('demo', console.log);

/** LEER Un directorio */

fs.readdir('theory' ,(err, files) => {
    console.log(files); // files es un array de strings
})

fs.readdir('theory', {withFileTypes:true} ,(err, files) => {
    console.log(files.map(f => f.isFile())); // files es un array de dirents
    const index = files.findIndex(f => f.name==='images');
    fs.readdir('theory/'+files[index].name, (err, files) => {
        console.log(err);
        console.log(files);
    })
});

/** Rename */

fs.rename('demo', 'demo-modified', console.log);
```

### Gestión de Permisos

Para porder cambiar los permisos de un archivo o directorio tenemos la funcion `chmod`

```js
import { chmod } from 'fs';
/**
 * USR  GRP   ROOT
 * rwx  rwx   rwx
 * 111  111   101 -> 0o775
 * 100  000   000 -> 0o400
 * 010  000   000 -> 0o200
 */
chmod('my_file.txt', 0o775, (err) => { // numero en base octal que se escribe 0o<number>
  if (err) throw err;
  console.log('The permissions for file "my_file.txt" have been changed!');
});

```
