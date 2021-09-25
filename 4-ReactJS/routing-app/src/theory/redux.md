# React Redux

Es una librería que se utiliza para la gestión global de la aplicación. A este término se le conoce como State-Management.

Gestionar el estado global de la aplicación nos ayuda a comunicarnos en todos los componentes de la misma (padres, hijos, hermanos, cuñados)

## La palabra React la conocemos pero, ¿Qué es Redux?

Redux es un patrón de diseño de software. No tiene que ver directamente con react. Como es un patrón de diseño sirve para todos los lenguajes de programación.

`react-redux` es la librería que implementa las "directrices" de redux dentro de una aplicación reactJS.

`ngrx` es la librería que implementa Redux en Angular.

### ¿Que es un patrón de diseño de software?

Son una serie de herramientas que ayudan a solucionar un problema común dentro del mundo del desarrollo.

Pero entonces. ¿Que problema intenta resolver Redux? *La gestión del estado de una aplicación*

## Ya se lo que es Redux, ¿Pero que es Redux?

Redux define un flujo de gestión del estado dentro de una página. Además define varios actores:

- **Vista** => Es la interfaz de usuario. Lo que el usuario ve. El DOM
- **Store/state** => Es el almacen del estado. Un cajon donde se guarda un objeto con toda la información del estado global de mi aplicación. Su tipo de datos es Object. Es el equivalente a un Context de React.
- **Reducers** => Son las funciones que nos permiten actualizar el Store. Su tipo de datos es function. Vienen a ser los callbacks del Context de React.
A estas funciones tienen como parámetros de entrada el `state anterior` y `la acción` a realizar. Devuelve el `nuevo valor del state`.
    ** Los reducers son funciones `Puras`.
       > "Las funciones puras son functiones que para los mismos valores de sus parámetros de entrada, siempre devuelve el mismo valor de salida"

    ** Tip General. Si una función tiene una llamada a un backend => NO es pura

```js

 const myReducerFn = (state, action) => newState

 const store = {
     state: {},
     reducers: {
         myReducerFn
     }
 }

 const dispatcher = {
     actions: {
         myAction
     }
 }

 store.state = store.reducers.myReducerFn(store.state, dispatcher.actions.myAction)

```

- **Acciones** => Son funciones que nos permiten definir comportamientos dentro de nuestra aplicación. Suelen acaban actualizando el Store usando uno o varios reducers. Para poder lanzar las acciones, lo que realizo es un `dispatch`

- **Selectores** => Son funciones que nos permiten seleccionar/obtener partes del store y además se subscriben a los cambios, es decir. Cuando el valor de datos al que ese selector pertenece, ejecuta mi código (refresca el componente de react).

### Conociendo ya a los actores. ¿Como funciona Redux?

![Ejemplo de Redux](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)

Pasos:

1. El usuario interactura con la vista (componente react) y lanza un evento (onClick).
2. La vista lanza una acción cuando el usuario hace click (**useDispatch**)
3. Esa acción (prefiamente definida por el desarrollador) acaba ejecutando un `reducer` (previamente definido por el desarrollador), que a su vez acaba actualizando el `state` (previamente definido por el desarrollador).
4. El reducer actualiza el state.
5. La vista está escuchando los cambios de esa parte del state (**useSelector**)
6. Cada vez que se cambie esa parte del state, la vista se refresca (**Component Update**) pintando los valores actualizados.

## React-Redux

Es la librería que nos permite usar Redux en una aplicación reactJS. Nos presenta hooks y otras funciones para poder definir y utilizar los `actores` de redux

[Referencia](https://react-redux.js.org/)

1. Crear una aplicación con template de react-redux
    `npx create-react-app my-app --template redux`

2. Crear un store con la función `configureStore` de la librería `@reduxjs/toolkit` === React.createContext()
3. En el index.js, crear el `Provider` de react-redux, pasándole una instancia de un `store`.
4. Como un store es un almacen muy grande del state + sus reducers, lo que se hace es definir las partes de ese almacen en archivos independientes, creando un subStore con su `state` + `reducers`. a esto se le llama Slice y se pueden crear utilizando la función `createSlice` de la librería `@reduxjs/toolkit`.

    - La función createSlice acepta como parámetro un objeto
    - Ese objeto tiene la siguiente información:
        - nombre de la porción (Esto acabará siendo el nombre de la propiedad del state completo).
        - un objeto con los reducers, <nombre_reducer>:<funcion_reducer>
        - initialState :  el valor inicial de esa porción de state.

5. Exportar las `actions` generadas por la función `createSlice` (línea 57 del archivo `src\features\counter\counterSlice.js` ejemplo del create-app)
6. Definir y exportar los selectores que vaya a necesitar en mi vista. No tiene que estar todos de inicia, se pueden crar poco a poco. (línea 62 del archivo `src\features\counter\counterSlice.js` ejemplo del create-app)
7. Exportar el `reducer` e importarlo en el store. (línea 73 del archivo `src\features\counter\counterSlice.js` ejemplo del create-app)

------ Hasta aqui es la parte de definición. Ahora viene su uso en la vista ------

8. En el componente utilizar `useSelector` pasándole el selector creado en el punto 6
9. En el componente utilizar `useDispatch` para poder lanzar acciones en los eventos de la interfaz de usuario.
10. En los eventos, hacer `dispatch` de la acción que queramos, que es la que se exportó en el punto 5.
