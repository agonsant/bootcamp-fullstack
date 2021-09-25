# Parámetros de rutas

Hasta ahora habíamos aprendido como cambiar de una ruta `/a` a otra `/b`.

- **¿Como le puedo pasar información de una ruta a otra?**
  - A través del App.js (como padre de todas las rutas) que tenga props de todas sus rutas y subrutas. -> PROBLEMA: Si tengo 1000 paginas. ¿Cuantos tendré que meter en el app.js?.... muchisimos.
  - Usando un estado global, común a toda la app. (Correcta) -> Lo veremos más adelante
  - Usando `path params`
  - Usando `query params`
- **¿Cuando necesito pasar información de una ruta a otra?**

  - Cuando la composición de la siguiente ruta necesite información de la anterior
  - Cuando necesite información aunque sea aislada, para poder motarse o configurarse

- **¿Como puedo yo pasar parámetros usando react?**

Dos formas:

1. Definir un `path param` en la ruta:

    - Podemos indicar a la hora de definir una ruta, que partes del path deben ser variables.
    - Una vez definida, podemos obtener su valor dentro de una variable accesible en el componente
    - Recordatorio => un ejemplo de path `/contactos/telefono/publicar/`
    - En la prop `path` del componente `Route` puedo indicar que una parte del path es variable poniendo `/:<nombre_var>` si es la ultima o `/:<nombre_var>/` si está entre medias de la URL
    - EJ: Supongamos que tenemos una pokedex y nuestra lista de pokemons se encuentra en el path `/pokemons` (pagina que muestra el listado de los pokemons).
    cuando hago click a un pokemon tengo que ir a la página que muestra la información detallada del pokemon:

    - `/pokemons/pikachu`
    - `/pokemons/raichu`
    - etc
    - ¿Tengo que crear 150 páginas o 1000 paginas si quiero todos los pokemon?

        - No tiene sentido que definamos una ruta con un path param
        - EJ:

        ```HTML
            <Route path='/pokemon/:name'>
                <PokemonDetail/>
            </Route>
        ```

    - Caso de uso: Cuando tenemos una página con lista de elementos y queremos una página de detalle por cada elemento, esa página de detalle la definimos con un path param. (tiendas online, pokedex, algo estilo netflix, algo estilo spotyfy )
    - Para usar un path param tenemos dos partes:
    1. Definir la variable del path en una Ruta (Route) (ver ejemplo)
    2. En el componente que pinta la ruta, utilizar el hook del `react-router-dom` llamado `useParams()`, que es una función que me devuelve un objeto con el valor de cada variable definida en el paso 1, para que la pueda usar

2. Definir `query params` en la ruta:

    - pares `<clave>=<valor>` separados por `&` en la URL.
    - Para empezar la definición de los query params, se usa el signo `?` despues del `path`
    - ej: `http(s)://<ip>:<puerto>/<path>?<query_params>` (name=alex&surname=Gon&limit=100).
    - el tipo de datos de un valor cuando lo recupero es un `string`.
    - ¿Donde se definen?
        - Se definen al poner la url en un enlace. van en la propiedad `to` del componente `Link` del `react-router-dom`, es decir en la URL de navegación.
    - ¿Como se reciben en la página/componente destino?
        - utilizando el hook `useLocation` del `react-router-dom` envolviéndolo en un hook customizado que llamaremos `useQuery`
        - el código de `useQuery` es el siguiente:

```js

// hook customizado. Se define:
// a. encima del componente
// b. en un archivo .js(x) aparte que exporta la funcion y luego se importa en el component
function useQuery() {
  // generates an object with the query params 
  return new URLSearchParams(useLocation().search); 
}

// uso en un componente
function QueryParamsDemo() {
  let query = useQuery(); // esto obtendrá un objeto con todos los query params

  query.get(`<nombre_param>`) // esto me devuelve un string con el valor de ese parametro
  ...
}
```
