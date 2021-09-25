/**
 * Define el router de auth y asocia a cada una de las rutas un 
 * controller
 */
import express from 'express';
// importo el controller para gestionar el login
import { loginJWTController } from './auth.controller.js'

const router = express.Router();

router.route('/')
    .post(loginJWTController); // es un post porque creo un token para esa sesión

export default router;