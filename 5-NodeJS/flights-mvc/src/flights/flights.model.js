import fs from 'fs';
import fetch from 'node-fetch';

const AIRPORTS_URL = 'https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json';
const FLIGHTS_DATA_FILE_PATH = './data/fligths.json';

export const retrieveAllFlights = () =>{
    return JSON.parse(fs.readFileSync(FLIGHTS_DATA_FILE_PATH).toString());
}

export const retrieveFlightsByOrigin = (origin) => {
    return retrieveAllFlights().filter(f => f.origin === origin);
}

export const retrieveFlightsByIdInterval = (initialId, endId) => {
    return retrieveAllFlights().filter(f => f.id >= initialId && f.id <= endId);
}

export const retrieveFlightById = (id) => {
    return retrieveAllFlights().find(f => f.id === id);
}

export const removeFlightById = (id) => {
    /**
     * 1- Obtener todos los vuelos
     * 2- Encontrar el vuelo a borrar
     * 3- Si existe el vuelo, lo elimino del array y actualizo mi archivo
     */
    const flights = retrieveAllFlights();
    const dFLightIndex = flights.findIndex(f => f.id===id);
    if(dFLightIndex>=0){
        // existe el vuelo
        flights.splice(dFLightIndex,1);
        fs.writeFileSync(FLIGHTS_DATA_FILE_PATH, JSON.stringify(flights));
    }
}


export const createFlight = (flight) => {
    /**
     * 1- Generar un ID
     *  1.1 - Recuperar la lista de vuelos
     *  1.2 - Obtener el id del último vuelo
     *  1.3 - Si existe entonces el nuevo id será ese id+1
     *  1.4 - Si no existe el nuevo id será 1
     * 2- añadir ese id al objeto del vuelo
     * 3- añadir a la lista de vuelos el nuevo vuelo (al final)
     * 4- actualizar el archivo de datos
     */
    const flights = retrieveAllFlights();
    flight.id = flights.length > 0 ? flights[flights.length-1].id+1 : 1;
    flights.push(flight);
    fs.writeFileSync(FLIGHTS_DATA_FILE_PATH, JSON.stringify(flights));
}



export const retrieveAirports = () => {
    return fetch(AIRPORTS_URL)
            .then(r => r.json())
            .then(a => a);
}