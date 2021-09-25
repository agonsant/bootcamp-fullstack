import fs from 'fs';


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