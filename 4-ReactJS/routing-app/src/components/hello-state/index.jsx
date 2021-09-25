import React, { useState } from "react";



function HelloState(){
    // let contador =1;
    /*
    * Lo que hace => Me genera una nueva variable de estado 
    * Lo que devuelve => un ARRAY de dos elementos
    *       - El primer elemento es el valor actual de esa variable del estado
    *       - El segundo elemento es una función que me permite actualizar esa
    *         variable en el estado y así avisar a React que repinte
    * Lo que le entra (parametros de entrada) => 
    *       - 1 parametro
    *       - del tipo de datos de la variable que quiero
    *       - Representa el valor inicial de esa variable en el estado 
    *           ** Es decir la que tendrá en la fase de montado del componente
    * */
    const [contador, cambiarContador] =  useState(1); // creo el contador en el estado 
    const [cardList, añadirCard] =  useState([]);
    return (
      <React.Fragment>
          <img style={{width:'50px'}} src='http://openweathermap.org/img/wn/09d@2x.png'></img>
        <p>Hola Estado</p>
        <p>{contador} veces</p>
        <p>{JSON.stringify(cardList)}</p>
        <button onClick={(e) => {
            cambiarContador(contador+1);
            añadirCard([...cardList, { title: e.target.textContent} ]);
        }}>Pulsa para añadir {contador}</button>
      </React.Fragment>
    )
}

export default HelloState;