// https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json
import https from 'https'; // paso 1
import fs from 'fs';

const options = { // paso 2
    hostname: 'gist.githubusercontent.com',
    port: 443,
    path: '/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json',
    method: 'GET'
};

const req = https.request(options, res => { // paso 3
    let data = '';
    // Gestionar la respuesta
    res.on('data', d => { 
        // Si la respuesta es muy grande se me va a llamar varias veces a este método
        // con esa porcíon de datos. Necesito almacenar los datos en una variable auxiliar
        data +=d; // d es un Buffer que se convierte a string cuando lo sumamos al data
    });

    res.on('end', () => { 
        // este método se llama cuando he terminado de recibir datos de la respuesta
        fs.writeFile('res.json', data, err => { // escribo la respuesta en un archivo
            if(err) throw err;
        });
        // proceso los datos de la respuesta para transformarlos a JSON
        const dataJSON = JSON.parse(data); 
        console.log(dataJSON.countries[0].name_es); // Pinto un dato de la respuesta
    })
});

req.end(); // paso 6