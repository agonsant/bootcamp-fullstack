import {
    retrieveAllFlights,
    retrieveFlightsByOrigin,
    retrieveFlightsByIdInterval,
    retrieveFlightById,
    removeFlightById,
    createFlight
} from "./flights.model.js";

/**
 * Handler de la rutas GET para el path / de flights.
 * Esto es el controller de esa ruta
 */
export const getFlightsController = (req, res) => {
    if (req.query.origin !== undefined) {
        res.send(retrieveFlightsByOrigin(req.query.origin));
    } if (req.query.initial !== undefined && req.query.end !== undefined) {
        res.send(retrieveFlightsByIdInterval(req.query.initial, req.query.end));
    } else {
        res.send(retrieveAllFlights()); // le pido al modelo mis datos de negocio
    }
};

export const getFlightByIdController = (req, res) => {
    const flight = retrieveFlightById(parseInt(req.params.id));
    if (flight !== undefined) {
        res.send(flight); // le pido al modelo mis datos de negocio
    } else {
        res.status(404).send(`No se ha encontar el vuelo ${req.params.id}`);
    }
};

export const deleteFlightByIdController = (req, res) => {
    removeFlightById(parseInt(req.params.id)); // le tengo que pasar el path param
    res.end(); // respondemos al usuario con la respuesta vacia
};


export const createFlightController = (req, res) => {
    /**
     * 1- Coger la información del vuelo a crear del body, suponiendo que es válida
     * 2- Llamar al modelo para crear un vuelo con la información del body
     * 3- Devolver al usuario un código 201
     */
    createFlight(req.body);
    res.status(201).end();
}
