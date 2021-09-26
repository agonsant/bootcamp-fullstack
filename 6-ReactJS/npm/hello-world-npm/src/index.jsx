// MI CODIGO DE REACT
'use strict';

//Creamos un componente React de Clase. 
//Es de clase porque se utiliza una claseJS para crearlo
// Este componente represente un Boton de Like
class LikeButtonComponent extends React.Component { 
    // los componentes de clase siempre extienden de React.Component
  constructor() {
    super();
    this.url = 'https://www.google.com';
  }

  printHello(e){
      console.log('Hola Mundo Desde Componente de React');
      console.log(e);
  }

  render() {

    return (
        <div>
            <HelloChildComponent></HelloChildComponent>
            <p>Hola JSX</p>
            <a href={this.url} target='_blank'>Ir a Google</a>
        </div>
    )
    // The la otra manera sin JSX: NO LA RECOMIENDO
    // return React.createElement(
    //     'div',
    //     { },
    //     [React.createElement('p',{}, 'Hola JSX'),
    //     React.createElement('a',{
    //         href: this.url,
    //         target: '_blank'
    //     }, 'Ir a Google')]
    //   );
  }
}

// Cojo el contenedor que yo quiero utilizar para React
const domContainer = document.getElementById('MY_FIRST_REACT_APP');
// Llamo a la funcion Render de ReactDOM, 
// Necesito el nombre de la clase del componente a renderizar
// necesito el nodo del DOM contenedor donde lo quiero pintar
ReactDOM.render(React.createElement(LikeButtonComponent), domContainer);