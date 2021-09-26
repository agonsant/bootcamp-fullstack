import React from "react";
import "./index.css";

// DEVELOPERS
function MyComponent(props) {
  return (
      <React.Fragment>
        <h1 className="title">Esto es un componente de funcion</h1>
        <p>Esto es una prop: {props.ejemploDeProp}</p>
        <a href='https://www.google.com' target='_blank'>{props.children}</a>
      </React.Fragment>
  );
}

// REACT
// const props = generarReactPRop() //function de react
// MyComponent(props); -> Lo que se devuelva es loq ue se renderiza

export default MyComponent;
