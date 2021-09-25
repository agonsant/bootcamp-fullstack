# Autenticación y Autorización HTTP

La autenticación es el metodo por el cual compruebas que un usuario es quien dice ser.

La autorización es el proceso por el cual se permite o no a un usuario operar (CRUD) con un recurso o dato en función del tipo de usuario que es.

## Métodos de Autenticación

La web necesita para su parte privada, tener usuario autenticados (usuarios logados). Existen varios métodos para poder autenticar a un usuario en una web

### Autenticación Básica

Es la más básica de todas y tambien la menos recomendable por insegura.

Consiste en enviar al servidor en cada petición del cliente un string con el siguiente formato:

> _user_:_password_

Una de las formas de utilizar la autenticación Basic es en la URL, despues del protocolo y antes del host, separando estos por un `@`, como por ejemplo:

> https://_user_:_pass_@sub.example.com:8080/p/a/t/h?query=string#hash

Como esto es excesivamente inseguro ya que nuestro usuario y password viajan en texto plano a través de la red y cualquiera puede verlo

Vamos a meter esa autenticación en una cabecera llamada `Authorization`

Esa cabecera va a tener el siguiente valor para la autenticación basic:

`Autenticacion: Basic Base64(_user_:_password_)`

**¿Esto quien lo manda?**

Lo tiene que mandar el client al servidor

**¿Como puedo codificar en Base64 en un cliente y como decodifico en servidor?**

Con las funciones globales de JS `btoa` y `atob`

[Base64 JS](https://developer.mozilla.org/es/docs/Glossary/Base64)

**¿Cuando lo tengo que mandar?**

Cada vez que hago una petición HTTP que necesite autorización, no solo en el login (autenticación).

ClienteJS:

```js

// login
fetch('URL_LOGIN_DEFINIDA_EN_EXPRESSJS', {
    method: 'POST',
    body: JSON.stringify({
        user: 'XXXX',
        password: '*****'
    })
});

// Other API (GET example)

fetch('URL_OTRO_API_GET', {
    headers:{
        'Authorization': `Basic ${btoa(`${user}:${password}`)}`
    }
});

// Other API (POST, PUT o PATCH example)
fetch('URL_OTRO_API_GET', {
    method: 'PUT' // poner el tipo de metodo aqui
    headers:{
        'Authorization': `Basic ${btoa(`${user}:${password}`)}`
    },
    body: JSON.stringify(requestBody)
});

```

Servidor ExpressJS (Supongo que el login ya lo sabréis hacer):

API a Autorizar

```js
function apiToAuthorizeMiddleware(req, res) {
  const authHeaderValue = req.get("Authorization"); // recuperamos la header
  // separo en un array de dos elementos
  // [0] == Tipo de autenticación (`Basic`)
  // [1] === Codificación basic en base 64 _user_:_pass_
  const authInfo = authHeaderValue.split(" ");
  const decodeAuthInfo = atob(authInfo[1]); // decodificamos para tener el string _user_:_pass_
  const userInfo = decodeAuthInfo.split(":"); // separo para tener [0] === user, [1] === pass
  // esta función va al modelo y por tanto va a la BBDD y comprueba que existe tanto el usuario en la colección de usuarios y que su pass coincide con la que se manda en la peticion
  if (isValidUser(userInfo[0], userInfo[1])) {
    // estoy autenticado y el usuario está en la BBDD
    //HAgo mi lógica del API, sabiendo que el usuario es userInfo[0]
    req.user = userInfo[0]; // guardo el nombre de usuario para evitar tener que volver a obtener su nombre
    next(); // paso al siguiente handler
  } else {
    res.status(401).send("No se ha encontrado una sesión de usuario válida");
  }
}
```

### Autenticación API Key

Un API key es un string (token) que te identifica como usuario en un API, con los permisos asociados a ese usuario o la cuota vs plan que tenga ese usuario contratado.

El sistema es capaz de leer el API Key y asi identificar al usuario en cada una de las peticiones al API.

**¿Dónde envío el API Key cuando soy cliente?**

Donde nunca debería ir es en el **Query String** ya que es visible a cualquier sniffer de red pese a que vayamos por https.

Principalmente dos opciones muy parecidas:

- **Authorization Header**: `ApiKey apiKeyStringToken` (Esta es la que mas me gusta)
- **X-API-KEY (Custom Header)** : `apiKeyStringToken`

_Las cabeceras que empiezan por `X`, significa que no pertenecen a las cabeceras definidas por HTTP y son cabeceras propias de mi sistem_

**¿Donde un usuario genera su APIKey?**

En una página del perfil del usuario o de la administración de un cliente en la plataforma. A veces tambien el propio creador del API, envia a sus clientes un APIKey.

**¿Que pasa en mi backend?**

- Dentro de mi backend, en mi BBDD, tengo que tener una entidad/collection donde guarde la relación de un token APIKey con el usuario al que pertenece.

- Debo exponer un método POST para poder crear tokens y asociarlos al usuario.

- A nivel front, en una página como un perfil de usuario o algo parecido, debo dar la posibilidad al usuario de consultar y gestionar las APIKeys generadas.

- En mi API que necesite APIKey debo ser capaz de leer el APIKey de la Header (o el mecanismo que haya usado) dentrio de mi API y consultar en la BBDD a que usuario pertenece para saber si el acceso al recurso solicitado es correcto o no.

### Autenticación basada en tokens JWT

Esta autenticación se parece mucho a la autenticación Basic, y es la que más se usa en la web a día de hoy. (Realmente la que más se utiliza es oAuth 2.0)

**¿Como funciona?**

1. El usuario en el formulario de Login, introduce su `nombre` y `password`.
2. El sistema tras validar el nombre, la password y el resto de elementos necesarios (MFA o 2FA, como ej: sms la movil(OTP)) para asegurarnos que ese usuario es quien dice ser (Autenticación).
3. Genera un token con un formato JWT (`access_token`). (Esto se hace en nodeJS con una libreria)
4. Durante la sesion del usuario, el cliente enviará en una header ese token de acceso:
   `Authorization: Bearer jwtString`
5. El backend valida ese token JWT (lo hace con la misma librería). Si el token es válido (401), verifica el usuario que pertenece a ese token (la info información va dentro del token cifrada) y verfica que ese usuario tiene permisos para realizar la solicitud a ese recurso (403)

#### ¿Que es JWT?

Es un token (string) en formato JSON que es utilizado para la autorización en una web.

Este token tiene un formato específico:

`xxxxxx.yyyyyy.zzzzzz`

- Header(`xxxxxx`): Es la cabecera del JWT con una información que se pone ahi dentro
- Payload(`yyyyyy`): Es una información en formato JSON con características del usuario
- Firma(`zzzzzz`): Es la firma para validar ese JWT

[JWT](https://jwt.io/introduction)

[Paquete NPM para la generación de tokens](https://www.npmjs.com/package/jsonwebtoken)

[Tutorial](https://asfo.medium.com/autenticando-un-api-rest-con-nodejs-y-jwt-json-web-tokens-5f3674aba50e)

#### Flujo basado en JWT

[Auth Flow Diagram](https://miro.medium.com/max/700/1*0t7t3_pFzIaRXoYr1wTXIA.jpeg)

[JWT Flow Diagram](https://lh5.googleusercontent.com/2CaqGbcKjMRAYdtFSEATy7QLhCqV8VhFZtqEmmhAboPpzI88TRPakUa9D4LI1_wU_P2Dhd5PZRyEHQxKV-3w1G2Bf6vrysVgeG5KwW-3GRIFzJn-K4oEw6Ixetx7gEHkir06Gf9C)

### Autenticación oAuth 2.0

oAuth 2.0 es un flujo de autenticación basado en JWT, en el cual hay 3 actores:

- **Cliente**: El que quiere autenticarse para realizar operaciones con los datos en un API
- **Servidores API**: Son los backends que contiene las rutas con las operaciones de los datos
- **Servidor Autenticación**: Es un backend, en un servidor diferente al del API, que se encarga de autenticar a un usuario de un cliente, generando dos tokens JWT (que tienen expiración) y devolvieno un JSON con la siguiente información:

  - **access_token**: Token de acceso para ese usuario en ese cliente durante X milisegundos.
  - **refresh_token**: Token para poder refrescar el access_token cuando este expire y para ese usuario en ese cliente.
  - **access_expiration**: fecha de expiración del access token
  - **refresh_expiration**: fecha de expiración del refresh token

Ademas este servidor se encarga tambien de validar y refrescar los token JWT que le manden desde los backends que utilizan ese oAuth 2.0

**oAuth 2.0 es un flujo estandar y libre de autenticación que permite a cualquier backend del mundo autenticarse y autorizarse utilizando los usuarios de mi sistema**

Este es el ejemplo que utilizan Google, FB, Twitter, etc para el Login con RRSS.

[Flujo oAuth 2.0](https://docs.oracle.com/cd/B31315_01/190/JOS%20Implementation%20Guide/Output/img/oauth2-caseflow.png)

[Referencia](https://oauth.net/2/)

## Flujo de páginas de Login y Registro para User+Pass

[FLujo Login/Registro](http://www.iaccessworld.com/wp-content/uploads/edd/2016/02/login-diagram.png)

## Referencia

[Four Auth Methods for Rest API](https://blog.restcase.com/4-most-used-rest-api-authentication-methods/)
