// importo del modelo la función que quiero utilizar para obtener la
// información del usuario
import { getUserInfoById } from "../user/user.model.js";
// importo la librería JWT para generar un token JWT
import jwt from 'jsonwebtoken';
// importo el secret para cifrar el JWT
import {secret} from './auth.secret.js';

/**
 * Este controller se encarga de validar el user y el password de un usuario
 * y si está todo OK genera un JWT que se lo devuelve al usuario
 */
export const loginJWTController = (req, res) => {
    // deconstrucción del objeto body para quedarme con sus atributos
    // email, password
    const { email, password } = req.body;
    // obtengo la información de mi modelo del usuario por email
    const userInfo = getUserInfoById(email);
    // compruebo que exista el usuario y que las password coincidan 
    if (userInfo !== undefined && password === userInfo.password) {
        // generar un token JWT 
        const token = jwt.sign({user: email}, secret);
        //devolverselo al usuario en una propiedad llamada access_token
        res.send({
            access_token: token
        });
    } else {
        res.status(404).send('Usuario/Contraseña erróneos');
    }

}