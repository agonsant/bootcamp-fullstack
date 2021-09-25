# Procesos

## ¿Qué es un proceso de un Sistema Operativo?

Cada vez que una aplicación se abre el sistema operativo le proporciona un "hueco" para que pueda ejecutarse.

Ese "hueco" es el que tiene la aplicación para ejecutar cada una de sus instrucciones, y solo puede ejecutar una instrucción a la vez en ese "hueco".

A ese "hueco" se le llama *Proceso*.

Cada vez que yo lanzo o abro una aplicación nodeJS, por defecto el SO me crea un proceso para esa aplicación.

### ¿Como abro/lanzo una aplicación nodeJS?

> node \<filename\>.js

Si lanzo dos veces la misma aplicación en terminales diferentes (o en el mismo terminal) el SO genera dos procesos diferentes => **Que el proceso es la aplicación en ejecución** o cada ejecución de una aplicación.

El SO cada vez que genera un proceso, le asigna un ID que es conocido como **PID**

Un SO cuando asigna un proceso a una aplicación uqe va a ejecutarse, se le llama **Proceso Padre**.

Este Proceso Padre, puede crear más procesos y se les llama procesos Hijo. Este es el principio de la programación concurrente (que no vamos a ver)

## ¿Como puedo acceder al proceso en NodeJS?

Con la variable global `process` que es de tipo `object`. Este objeto sirve para controlar el proceso de ejecución de la aplicación actual.

Cada vez que ejecuto la aplicación el valor de `process` cambia.

- [Artículo Process](https://desarrolloweb.com/articulos/proceso-ejecucion-nodejs.html)
- [Documentación del process](https://nodejs.org/api/process.html)

## ¿Como puedo parar el proceso desde dentro de la aplición?

```js
process.exit(); // función del process que para el programa. Si no le paso parámetro de entrada es una salida exitosa

// Si le paso un número mayor que cero es que la aplicación ha finalizado con error, avisando al SO de ello. https://nodejs.org/api/process.html#process_exit_codes 
process.exit(<number > 0 >); 

```

## ¿Que pasa cuando un agente externo cierra mi aplicación?

Desde node puedo escuchar el evento de salida y ejecutar una función cuando ocurra ese evento.

```js

process.on('exit', () => {
    //Una regla. Solo se puede ejecutar código síncrono.
}); // Esto es como un addEventListener que teníamos en el front

```

## I/O en NodeJS

### ¿Que es la I/O?

La I/O es la entrada y salida de datos (Input/Output).
        - Ficheros
        - Pantalla y altavoces (Salida)
        - Recoger lo que un usuario escribe en el teclado, ratón, micrófono (Entrada)
        - Recibir y enviar peticiones externas utilizando protocolos de red (HTTP, SMTP, SSH, etc...).

### ¿Qué es un Stream?. Readable and Writable

Un flujo de información a través de un canal o "tubería" o buffer (Nombre técnico) o bus.

** Un Streamer es la persona que hacer Streamming. Hacer Streamming es abrir un canal (tubería, buffer, bus) de comunicación entre el Streamer y el que ve al Streamer, compartiendo un Stream de datos, es decir, un flujo de datos.

Tenemos dos roles:

- El que consume la información
- El que publica la información

Stream Readable => Es un flujo de información que permite la lectura
Stream Writable => Es un flujo de información que permite la escritura

Todos los sistemas operaivos tienen por defecto 3 Streams:

- **Salida estándar** : Writable Stream que todas las aplicaciónes pueden escribir. La información se guarda en un fichero especial. (Linux: /dev/stdout).

- **Entrada estándar**: Readable Stream que representa la entrada de teclado de un ordenador. Las aplicaciones pueden leer la información de este Stream. Es otro fichero especial (Linux: /dev/stdin).

- **Salida error**: Fichero que representan los errores de las aplicaciones de un SO. En nodeJS es un Writable Stream. (Linux: /dev/stderr)

### Salida estandar (process.stdout)

NodeJS nos crea un Stream de escritura para el archivo de la salida estandar del SO

```js

process.stdout.write('Mi String'); // escribo en la salida estandar.

// console.log(), no es mas que una función que llama al stdout, pero con formato

```

### Entrada estandar (process.stdin)

NodeJS nos crea un Stream de lectura para que podamos obtener la información que el usuario introduce por teclado.

```js

process.stdin.on('data', (datos) => {} ); // Estos datos son de un tipo especial Buffer, para pasarlos a String, hay que hacer .toString(), es decir datos.toString()

```

### Salida de error (process.stderr)

NodeJS nos crea un Stream de escritura para poder lanzar errores al SO desde nuestra app

```js
process.stderr.write('Datos para la salida de error en String');
```

## Argumentos de un programa en NodeJS

### ¿Qué son los argumentos de un programa?

Son los parámetros de entrada de un programa cuando lanzo la ejecución del mismo.

Se pueden pasar muchos parámetros. Cada parámetro va separado pro un espacio.

EJ:

> node index.js param_1_value param_2_value
> node index.js 3 hola

El ultimo ejemplo pasa dos parámetros al programa `index.js` con valores 3 y hola.

### ¿Como los recojo en NodeJS?

`process.argv` es un array con los parámetros de entrada de nuestro programa.
Las dos primeras posiciones del array están ocupadas con:
    0: La ruta de node
    1: La ruta del programa (index.js)

A partir de la tercera posición se encuentran nuestros parámetros.

Demo: [Procesar parámetros de entrada a un programa](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)

```js
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
case 'insult':
    console.log(myArgs[1], 'smells quite badly.');
    break;
case 'compliment':
    console.log(myArgs[1], 'is really cool.');
    break;
default:
    console.log('Sorry, that is not something I know how to do.');
}
```
