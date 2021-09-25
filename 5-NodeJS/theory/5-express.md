# ExpressJS

Es una librería de nodejs, que nos facilita la creación de servidores http. Por debajo, esta librería utiliza el módulo `http` de nodejs, pero nos facilita la gestión de las respuestas, de registrar rutas (urls), registrar métodos, etc.

Como es una librería lo primero que hace es instalarla.

[Referencia API v4](https://expressjs.com/es/4x/api.html)

## Instalación

[Referencia](https://expressjs.com/es/starter/installing.html)

1. Crear un directorio y abrirlo con VSCode
2. Crear un proyecto npm (añadir type module al package.json si queremos ESM)

    > npm init

3. Instalar express guardándolo en el package.json como dependencia

    > npm i express --save

4. Crear el archivo js de entrada de nuestra aplicación.

## Primer Servidor Http con express

[Referencia](https://expressjs.com/es/starter/hello-world.html)

1. Importar express para poder usarlo
2. Llamar a la función express, para generar un objeto de tipo application
3. Defino el puerto, de la misma manera que lo hacía con el módulo http
4. Luego viene la fase de definición de rutas (cada una de las URL's y Metodos HTTP que voy a utilizar en mi aplicación).

    Para definir una ruta puedo utilizar las funciones del `app` de express con cada de los métodos HTTP con el siguiente patrón:

    ```js
    app.<HTTP_METHOD>('path', handler)
    ```

    Donde el path es el string con la ruta y el handler es la función que gestiona esa ruta, que recibe un `req` y un `res`

    <HTTP_METHOD> es cada uno de los métodos http en minuscula

5. Levantar el servidor utilizando el método `listen` del app. Igual que hacíamos con el módulo `http`

EJ:

```js
app.get('path', handler) // cuando el usuario hace una petición a la ruta `path` por el método GET, se ejecuta ese `handler`
```

Ejemplo completo:

```js
import express from 'express'; // paso 1
const app = express(); // paso 2
const port = 3001; // paso 3

/** PASO 4: Definición de rutas **/
app.get('/', (req, res) => {
  // función que gestiona la peticion GET en el path /
  res.send('Hello World!'); // método de la respuesta para enviar la info al cliente que realizó la solicitud
});

/** PASO 5 **/
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

```

## Rutas y metodos básicos

[Referencia](https://expressjs.com/es/starter/basic-routing.html)

```js

app.get('/', (req, res) => {
    // cosas cuando haga GET en el path /
});

app.post('/', (req, res) => {
    // cosas cuando haga POST en el path /
});

app.put('/', (req, res) => {
    // cosas cuando haga PUT en el path /
});

app.delete('/', (req, res) => {
    // cosas cuando haga DELETE en el path /
});

```

Ademas se pueden definir `path params` a la hora de establecer la ruta, definiendose igual que en el Router de react, con el caracter `:`

ej:

```js

// Cuando haga un GET a cualquier url que sea del estilo
/* 
  - /pokemons/pikachu/hola/raichu
  - /pokemons/bulbasaur/hola/venusaur
  - /pokemons/evee/hola/mew
*/
// se va a ejecutar este manejador
app.get('/pokemons/:name/hola/:other', (req, res) => {

})

/** CASO TIPICO **/
app.get('/pokemons', (req, res) => {
    // devuelve el listado de todos los pokemon
})

app.get('/pokemons/:name', (req, res) => {
    // devuelve la información del pokemon que se introduce en :name
})

```

## Gestionando la response

[API Referencia](https://expressjs.com/es/api.html#res)

- Poniendo el estado de la respuesta [API](https://expressjs.com/es/api.html#res.status)
- Devolviendo una respuesta [API Generico](https://expressjs.com/es/api.html#res.send) or [API solo JSON](https://expressjs.com/es/api.html#res.json)

## Gestionando la request

[API Referencia](https://expressjs.com/es/api.html#req)

- Obtención de los query params [API](https://expressjs.com/es/api.html#req.query)
- Obtención de los path params [API](https://expressjs.com/es/api.html#req.params)
- Obtención del body en diferentes formatos [API](https://expressjs.com/es/api.html#req.body)
    ** Cuidado que si queremos dar la posibilidad de que nos manden bodys en json hay que usar `app.use(express.json())`
- Obtención de las cookies [API](https://expressjs.com/es/api.html#req.cookies)

## Sirviendo archivos estáticos

[Referencia](https://expressjs.com/es/starter/static-files.html)

## Direccionamiento y Router

[Referencia](https://expressjs.com/es/guide/routing.html)

```js
// Forma antigua 
app.get()
app.post()
app.METHOD()
```

- app.all(path, handler) => Es un handler que se ejecuta para cada método HTTP de el `path` declarado.

Existe otras formas de registrar las rutas generan patrones.

- El caracter `?` representa opcionalidad, es decir una ruta en la que esté el caracter y otra en la que no ej: `ho?la` => coincide con las rutas `hla`y `hola`.

- El caracter `+` indica que debe existir al menos un caracter o más. ej: `ho+la` => coincide con las rutas (infinitas) `hola`, `hoola`, `hooola`, `hoooola` y así infinitamente. No coincide con la ruta `hla`.

- El caracter `*` indica cero o más ocurrencias de cualquier caracter donde esté el `*`. ej: `ho*la` => coincide con las infinitas rutas: `hola`, `hooola`, `hoalexla`, `hofullstackla`, etc. Podemos decir en este caso que coincide con cualquier ruta que empiece por `ho` y termine por `la`.
Otro ejemplo podría ser la ruta `/ca*`, que en este caso sería cualquier ruta que empiece por `ca`
Otro ejemplo `/*la`, cualquier ruta que termina en `la`

- Se pueden agrupar un pack de caracteres utilizando los  `()` con los otros 3 símbolos:
  ejemplo: `/ha(ho)?l` => `/hal` o `/hahol`
           `/ha(ho)+l` => infinitas: `/hahol`, `/hahohol`, `/hahohohol`

### Pila de manejadores de una misma ruta

¿Que pasa si defino dos app.get, con la misma ruta?

```js

app.get(`/hola`, handler_1);

app.get(`/hola`, handler_2);

```

Se pueden registrar mas de un manejador para una misma ruta. Los manejadores de ruta se ejecutan en el orden en el que fueron registrados en la app de manera *síncrona*, es decir, **el primero que se registra es el primero que se ejecuta y también el último**.

Para poder llamar al siguiente manejador, existe **un tercer parámetro de tipo función** que al llamarse hace ejecutar el siguiente manejador.

Por convención se le llama `next`.

Solo hay que tener en cuenta una cosa, no hace `next` si se ha hecho `send` o cualquier otro método de respuesta de la petición previamente.

```js
import express from 'express';

// creo una app de express
const app = express();

const port = 3002;

/**
 * Primera definición del handler, este será el primer
 * manejador en ejecutarse y el ultimo en terminar
 */
app.get('/demo-equals', (req, res, next) => { 
    // el handler de una ruta tiene un tercer parámeto 
    // que es una función que invoca al siguiente handler
    // de manera `sincrona`
    console.log('Primera definición');
    if(req.query.type === 'primera') {
        res.send('hola primera');
    }else{
        next(); // Llamamos al siguiente manejador registrado para esa ruta
        console.log('despues del next')
    }

});

/**
 * Al estar definido segundo este manejador se ejecutará
 * el segundo, siempre y cuando el primero haya hecho next()
 */
app.get('/demo-equals', (req, res) => {
    console.log('Segunda definición');
    res.send('hola segunda');
});


app.listen(port, () => console.log(`Servidor listo para escuchar peticiones en el puerto ${port}`));
```

### app.route()

`route` es una funcion dentro del app que acepta un path como parámetro y devuelve un objeto al que le podemos definir cada uno de los métodos http que queramos ejecutar. Es una nueva sintaxis para la definición de rutas.

Hasta ahora teníamos

```js

app.get('/book', getBooksHandler);
app.post('/book', createBookHandler);
app.put('/book', updateBookHandler);
app.delete('/book', deleteBookHandler);

```

Ahora podemos asociar todos los manejadors a una sola ruta

```js

app.route('/book')
    .get(getBooksHandler)
    .post(createBookHandler)
    .put(updateBookHandler)
    .delete(deleteBookHandler);

```

### Router

Para aplicaciones pequeñas, está muy bien esta forma ya que es rápida, pero cuando una aplciación crece (Escalabilidad), debemos encontrar otras formas de organizar nuestro código.

Por eso express crea un elemento que se llama `Router`.

El Router es una `clase` de expressJS que nos permite de manera asilada a la aplicación de expressjs, definir rutas (parecido al app.route pero sin depender de la aplicación).

Nos permite de manera asilada generar como "mini aplicaciones expressjs".

Esto implica que en el app tengo que registrar lo definido por el router de alguna manera.

Para poder registrar rutas en un `Router`, se hace exactamente igual que se hacía con el `app`.

En un archivo declaramos las **SUBRUTAS** empezando por **/**

```js (birds.js)

import express from 'express';
// devuelve el objeto del router para pode registrar mis subrutas
const router = express.Router(); 

// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/:name', function(req, res) {
  res.send('About birds');
});

// module.exports = router; EXPORTAR EN CJS
export router;

```

En el archivo del app

```js
// Aqui irían los imports de express
import birds from './birds';

// aqui irían la creación de la app y el puerto

app.use('/birds', birds);

```

Despues de este ejemplo que rutas(paths) tendría mi aplicación

- /birds/
- /birds/colibri
- /birds/loro
- /birds/cuervo

## Middleware

Es una función handler (es decir acepta req,res,next) y se ejecuta como parte de la cadena de handlers de una ruta, pudiendo asi hacer las siguientes funcionalidades:

- Validar la peticion devolviendo error sin tener que llegar al handler real de la ruta (autenticación, validación del body, etc)

- Añadir elementos a la request para que le lleguen al handler principal. ejemplo (parsear el body a JSON).

- Añadir elementos a la response para que se le devuelvan al usuario. ej: creación de cookies/header en el servidor.

Se pueden usar en diferentes sitios:

- A nivel de aplicación => middleware que afecta a todas las rutas
- A nivel de Router (mini-aplicación) => middleware que afecta solo a las subrutas de ese router
- A nivel de ruta => middleware que solo afecta a ese path en ese método http.

### ¿Como creo un middleware?

[Referencia y Ejemplos](https://expressjs.com/en/guide/writing-middleware.html)

### ¿Como registro un middleware?

[Referencias y Ejemplos](https://expressjs.com/en/guide/using-middleware.html)
