# Summary

Vamos a hacer un repaso de lo que llevamos de ReactJS

1. ¿Que es una SPA vs Que es una MPA?
2. ¿Que es ReactJS y ReactDOM? -> ayudan a crear interfacez de usuario y también SPA's
3. Como usar react utilizando scripts (a pelo en la pagina)
4. ¿Que es JSX? -> Nos ayuda a escribir en un mismo JS HTML, CSS, JS de un componente
5. Como JSX no es nativo del navegador, necesimaos la librería babel para su traducción
6. Como crear aplicaciones react utilizando la herramienta `create-react-app`
7. Estructura del `create-react-app` index.js y el app.js
8. NPM, package.json y .gitignore para que no se suba a git las carpetas que no queramos.
9. import y export de los archivos (JS, CSS, SVG's) para poder usarlos en otros archivos.
10. Como crear un componente de clase, extendiendo de React.Component y implementando su método render().
11. Consumir un componente en otro generando una relación Padre<->Hijo
12. Las props (Nos permiten pasar información del padre al hijo)
13. Las props para pasar información del hijo al padre
14. state & setState, para poder manejar el estado interno de un componente y forzar su renderización cuando una de esas variables cambie.
15. El ciclo de vida de un componente (Montado, actualización y desmontado)
16. Como usar la referncia a un elemento HTML en un componente de clase. React.createRef()
17. Como hacer una llamada http en un componente de clase utilizando el fetch. Como modifica el estado, se tiene que hacer despues de la fase de montado (EJ: dentro de la función `componentDidMount`)
18. Componentes de función y como transformar un componente de clase a uno de función
19. Como generar más páginas en una SPA de react utilizando el `react-router-dom`
    - Router -> define un router para la SPA. Se pone una vez en el app.js
    - Route -> define una ruta con su path y el componente de página que hay que renderizar.
    - Switch -> nos permite definir una serie de rutas. la primera que haga match es la que se pinta.
    - Link -> nos permite hacer una navegación a una ruta de react definida por Route.
    - `useRouteMatch` -> hook del router que nos permite obtener la información de la ruta actual en un componente. se usa para generar subrutas.