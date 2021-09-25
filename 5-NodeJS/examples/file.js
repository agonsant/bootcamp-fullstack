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

fs.appendFile('first-file.txt', `${new Date()}`, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

// DELETE


fs.unlink('first-file', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });