# React Context API

Referencia [React Context API](https://es.reactjs.org/docs/context.html)

Sirve para poder compartir información global en toooda la aplicación ReactJS.

EJ:
    - autenticación
    - theming
    - idioma

Un contexto puede ser de cualquier tipo de datos (string, number, boolean, Object, Array)

Un contexto afecta a todos los hijos que pertenezcan a ese contexto.
Se puede ver como un nodo HTML padre que no pinta HTML.

Un componente puede tener o recuperar varios contextos.

Un componente puede modificar el valor de un contexto, y eso fuerza un renderizado de todos los hijos de ese contexto.

## ¿Como creo un contexto?

Para crear un contexto, debo utilizar la función `createContext(<default_value>)` de React.

Ejemplo:

```js
  import React from 'react';

  const authContext = React.createContext({isLogged: true, userName: 'Alex' });

  export default authContext;
```

Una vez que he creado un contexto puedo utilizarlo en un componente.

## ¿Como uso un contexto en mi app?

Para utilizar un contexto necesito llamar a su propiedad `Provider` dentro del JSX, especificándole una prop que se llama `value` con el valor que tendrá en el contexto.

Ejemplo:

```js
    function HelloContextComponent(){

        return (
         <authContext.Provider value={{isLogged:false}}>
            <h1>hola</h1>
            <Card />
        </authContext.Provider>
        )
    }
```

Una vez tengo un Provider padre, como uso mi contexto en mi componente hijo?

## ¿Como uso un contexto en mi componente?

Para ello tenemos dos opciones:

- En un componente de clase: `this.context`;
- En un componente de función: hook `useContext` [API](https://es.reactjs.org/docs/hooks-reference.html#usecontext);

Ejemplo:

```js
import { authContext } from '<URL_DEL_ARCHIVO_QUE_EXPORTA_EL_CONTEXTO';

function ComponenteQueUsaElContext(){
    const auth = useContext(authContext);
    return <p>Está logado: {auth.isLogged}</p>
}

```

## ¿Como cambio el valor de mi contexto desde un componente?

Lo primero que tengo que hacer es definirme como consumidor de ese Context de React.

El concepto es parecido a la comunicación hijo<->padre, pero de 

1. Definir una función al crear el contexto
2. En el provider, pasar una función para que se pueda modificar el valor del contexto desde cualquier hijo en cualquier profundidad. se utiliza el `useState` en el componente que declara el `Provider`
3. importando el contexto y utilizando el componente `Consumer` y llamar a la función que actualiza el contexto

ejemplo:

```js

// COMPONENTE DE CLASE CONSUMIDOR DEL CONTEXTO
<authContext.Consumer>
    {({value, changeValue}) => {
        // invocar al changeValue(<nuevo_valor>) para que me cambie 
        // el valor del contexto a nivel global.
        // el resto de componentes que dependan de ese contexto se renderizarán
    }}
</authContext.Consumer>

// COMPONENTE DE FUNCION CONSUMIDOR DEL CONTEXTO

function MyComponent(){
    const contextValue = useContext(authContext) // importamos lo que devolvió el use context
    /* Previamente he declarado un provider como el siguiente
      <authContext.Provider value={{
          data: {} // datos de mi variable de contexto,
          updateContext: (newValue) => {} // función para actualizar el data
     }}>
         <CHILDRENS>
     <authContext> */
    return (
        <div>
            <p>{contextValue.data}</p>
            <button onClick={() => contextValue.updateContext(newData)}>Click para actualizar el context</button>
        </div>
    )
}

```
