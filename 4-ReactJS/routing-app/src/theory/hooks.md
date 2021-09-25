# Hooks

## Introducción

Lo primero que tenemos que saber es que los hooks son FUNCIONES.
Por nomenclatura, el nombre de un hook siempre empieza por `use`

Los hooks nos proporcionan utilidades para poder realizar acciones
en un **componente de función**.

Ejemplos funcionalidades:

- Recuperar los parametros de un path => `useParams`
- Recuperar la url actual => `useRouteMatch`
- Recuperar el location de la ruta actual => `useLocation`

## Reglas de los Hooks

Los hooks solo tienen dos reglas:

- Solo se pueden llamar en componentes de función, en su cuerpo.
  > Tambien se podría llamar desde otras funciones que sean hooks
- Solo llamar a los hooks al principio del componente de funcion.

  > - No llamar dentro del HTML del JSX

      - No llamar dentro de un bucle antes del return
      - No llamar dentro de condiciones
      - No llamar dentro de funciones anidadas (funciones definidas en el cuerpo del componente de función)

## ¿Que hooks me da React?

Hay muchos, pero vamos a aprender 3 de momento:

- `useState`: para poder tener una actualizacion de estado en un componente de función. (this.state, this.setState --> Esto era en clases)
- `useRef`: para obtener una referencia a un elemento HTML dentro de un componente función. (React.createRef(), ref -> atributo del HTML --> Esto en Clases).
- `useEffect`: para poder ejecutar código asíncrono en un componente de función que genere un cambio.

### useState

Lo quiero cuando vaya a modificar datos que se vean en el DOM y quiero que la interfaz de usuario (el HTML del componente) se vuelva a pintar.

¿Como lo uso?

    ```js
    import React, { useState } from "react";

    function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
    }
    ```

### useEffect

Se utiliza para meter código que produzca effectos colaterales

¿Como se usa?

useEffect es una función que como parámetro de entrada acepta
**OTRA FUNCION**. dentro de esta función va el código que produce
el efecto colateral. Por ejemplo un Fetch o un Interval o
una actualización del document.

useEffect acepta un segundo parámetro que es un **ARRAY**.

- Si el array es vacío es como poner tu código en un `componentDidMount`, es decir tu código solo se ejecuta en la primer renderización del component y no depende de ninguna variable más.

- El array puede contener las props o las variables de estado de las que depende su código y así forzar que se ejecute ese useEffect cada vez que cambie esa variable. Esto sería similar al `componentDidUpdate`

- Se pueden/deben usar más de un useEffect en un function component

  ```js
  import React, { useState, useEffect } from "react";

  function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
      // las llamadas al fetch
      fetch("....")
        .then((r) => r.json())
        .then((data) => setCount(data)); // asincrono
    }, []);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  ```

## Hooks customizados

Hasta ahora, alguien había escrito los hooks por nosotros y lo había exportado para que nosotros lo importásemos como función que es y lo llamásemos.

Como los hooks son funciones, yo puedo crear mis propios hooks implementado la logica de ese hook en una función y usándola donde yo quiera dentro de mi web.

Como los hooks customizados son hooks, por convención el nombre de la función tiene que empezar por `use`.

Como los hooks son funciones, aceptan parámetros de entrada y devuelven 1 parámetro de salida

### ¿Que diferencia un hook de simplemente una función?

La única diferencia es que en los hooks puedo usar otros hooks y los hooks personalizados están destinados a usar otros hooks

### ¿Para que sirven los hooks customizados?

Imaginemos el siguiente caso:

 Tengo dos componentes contador, que muestran su contador de manera visual de forma diferente, pero la lógica del contador es la misma para ambos.

 ```js
    function Contador_1() {
        const [count,setCount] = useCount(0);
        return (
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>add</button>
        )
    }
 ```

  ```js
    function Contador_2() {
        const [count,setCount] = useCount(0);
        return (
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>add</button>
        )
    }
 ```

```js
 function useCount(initialValue){
     const [count,setCount] = useState(initialValue);
     return [count,setCount];
 }
 ```
