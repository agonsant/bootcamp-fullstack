import { retrieveAirports } from './flights.model.js';
// /**
//  * Funcion que dado un codigo iata y una lista de aeropuertos con su 
//  * codigo iata devuelve true o false si el código existe en la lista
//  */
// const isValidIATACode = (code, iataCodes) => {
//     return iataCodes.some(a => a.code === code);
// }

// /**
//  * Función que dadas dos fechas a y b me devuelva true y a<b
//  * Las fechas se pasan en timestamp
//  */
// const isMinorDate = (a, b) => {
//     return a < b;
// }

// export const flightValidation = (req, res, next) => {
//     /**
//      * 0- Obtener la lista de aeropuertos con sus códigos IATA
//      * 1- que el origin sea un IATA valido
//      * 2- que el destino sea un iata valido
//      * 3- que la fecha de salida sea superior al dia de hoy
//      * 4- que la fecha de llegada sea supèrior a la fecha de salida
//      */
//     fetch(AIRPORTS_URL)
//         .then(r => r.json())
//         .then(a => {
//             // ya tengo la lista de aeropuertos
//             if (isValidIATACode(req.body.origin, a)) {
//                 // el origin esta OK
//                 if (isValidIATACode(req.body.destination, a)) {
//                     // el destino esta OK
//                     if (isMinorDate(Date.now(), req.body.outboundDate)) {
//                         // fecha de salida está okey
//                         if (isMinorDate(req.body.outboundDate, req.body.inboundDate)) {
//                             // fecha de llegada está okey
//                             next(); // solo pasamos al siguiente handler si todo esta OK
//                         } else {
//                             res.status(400).send('La fecha de llegada tiene que ser superior a la fecha de salida');
//                         }
//                     } else {
//                         res.status(400).send('La fecha de salida tiene que ser superior al día de hoy');
//                     }
//                 } else {
//                     res.status(400).send('El atributo destination no es un código IATA válido');
//                 }
//             } else {
//                 res.status(400).send('El atributo origin no es un código IATA válido');
//             }

//         })

// }

const validateIATACode = (code, airports) => {
    // valido si hay o no un aeropuerto
    const isAirport = airports.some(a => a.code === code);
    if (!isAirport) throw `El aeropuerto ${code} no es un codigo IATA válido`;
}

const validateMinorDate = (a, b) => {
    if (a >= b) throw `La fecha ${b}(${new Date(b)}) no es válida`;
}


export const flightValidation = (req, res, next) => {
    retrieveAirports().then(a => {
        try {
            validateIATACode(req.body.origin, a);
            validateIATACode(req.body.destination, a);
            validateMinorDate(Date.now(), req.body.outboundDate);
            validateMinorDate(req.body.outboundDate, req.body.inboundDate);
            next();
        } catch (err) {
            res.status(400).send(err);
        }
    }).catch(err => res.status(500).send(err));
};

/********* VERSION ASYNC/AWAIT *********/
// export const flightValidation = async (req, res, next) => {
//     try {
//         const airports = await retrieveAirports();
//         validateIATACode(req.body.origin, airports);
//         validateIATACode(req.body.destination, airports);
//         validateMinorDate(Date.now(), req.body.outboundDate);
//         validateMinorDate(req.body.outboundDate, req.body.inboundDate);
//         next();
//     } catch (err) {
//         res.status(400).send(err);
//     }
// };
