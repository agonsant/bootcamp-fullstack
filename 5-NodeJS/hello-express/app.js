import express from 'express'; // paso 1
import cookieParser from 'cookie-parser';
const app = express(); // paso 2
const port = 3001; // paso 3

app.use(express.static('public'));
app.use(cookieParser())
/** PASO 4: Definición de rutas **/
app.get('/hola', (req, res) => {
  // función que gestiona la peticion GET en el path /
  console.log(req.cookies.name);
  res.json(null) // método de la respuesta para enviar la info al cliente que realizó la solicitud
});



/** PASO 5 **/
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});