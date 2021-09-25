/**
 * Conectar mongodb en una app NodeJS sin usar express
 */

// const MongoClient = require('mongodb').MongoClient; // importación del cliente Mongo en CJS
import {MongoClient} from 'mongodb'; // importación del cliente mongo db usando ESM

/**
 * 1. Realizo la conexión a la BBDD que está en un servidor externo
 * - Necesito su URL completa
 */
const URL = 'mongodb+srv://demo_bootcamp:demo_bootcamp@learning.c7hty.mongodb.net';

console.log(new Date());
//  MongoClient.connect(URL, (err, client) => { // conectamos a la BBDD de manera asíncrona
//    if (err) { // si hay error de conexión lanzamos una excepción
//      throw err;
//    }
//    // a partir de aqui es que la conexión ha ido correctamente
//    console.log(new Date());
//    console.log('Se ha conectado correctamente');
//    client.db('demo')
//     .collection('flights')// Intenamos conectar con la collectión 'coches'
//     .find() // de esa collection hacemos una búsqueda de documentos de esa collection
//     .toArray((err, result) => { // la búsqueda la convertimos a una ArrayJS de manera asíncrona
//      if (err) {
//        throw err;
//      }
//      console.log(result);// en result obtenemos el array de documentos que coinciden con la búsqueda
//      client.close(); // cierro la conexión a BBDD
//    });
//  });


//  MongoClient.connect(URL, (err, client) => { // conectamos a la BBDD de manera asíncrona
//     if (err) { // si hay error de conexión lanzamos una excepción
//       throw err;
//     }
//     // a partir de aqui es que la conexión ha ido correctamente
//     console.log(new Date());
//     console.log('Se ha conectado correctamente');
//     const newFlight = { // creo mi documento con sus propiedades
//         origin: "MAD",
//         destination: "ZGZ",
//     }
//     client.db('demo')
//      .collection('flights')// Intenamos conectar con la collectión 'coches'
//      .insertOne(newFlight) // en esa collection insertamos un documento
//      .then(result => {
//         console.log(result);
//         client.close();
//      })
//   });



// MongoClient.connect(URL, (err, client) => { // conectamos a la BBDD de manera asíncrona
//     if (err) { // si hay error de conexión lanzamos una excepción
//       throw err;
//     }
//     // a partir de aqui es que la conexión ha ido correctamente
//     console.log(new Date());
//     console.log('Se ha conectado correctamente');
//     const query = { // creo mi query para borrar el/los documentos que tengan esas propiedades y valores
//         origin: "MAD",
//         destination: "BCN"
//     }
//     client.db('demo')
//      .collection('flights')// Intenamos conectar con la collectión 'coches'
//      .deleteOne(query) // borro el primer documento que cumplas esas condiciones (las de query)
//      .then(result => {
//         console.log(result);
//         client.close();
//      })
//   });


  MongoClient.connect(URL, (err, client) => { // conectamos a la BBDD de manera asíncrona
    if (err) { // si hay error de conexión lanzamos una excepción
      throw err;
    }
    // a partir de aqui es que la conexión ha ido correctamente
    console.log(new Date());
    console.log('Se ha conectado correctamente');
    const query = { // creo mi query para borrar el/los documentos que tengan esas propiedades y valores
        origin: "MAD"
    }
    const updateObject = { // indico las propiedades del documento que se encuentre que quiero cambiar
        $set:{
            destination: 'CAMBIADO',
            otherProperty: 'Other'
        }
    }
    client.db('demo')
     .collection('flights')// Intenamos conectar con la collectión 'coches'
     .updateOne(query, updateObject) // borro el primer documento que cumplas esas condiciones (las de query)
     .then(result => {
        console.log(result);
        client.close();
     })
  });