import React from 'react';

export const HelloContext = React.createContext(() => 'devuelvo la funcion por defecto');

export const HelloContextProvider = (props) => {

    return ( 
    <HelloContext.Provider value={() => 'Hello World Provider Cambiado desde arrow function'}>
        {props.children}
    </HelloContext.Provider>
    )
}