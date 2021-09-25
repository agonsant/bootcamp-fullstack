import React from "react";

/**
 * Página de login
 */
function Login() {

  const handleSubmit = (e) => { // gestiono el submit del formulario
    e.preventDefault();
    if(e.target.checkValidity()){ // compruebo que todos los campos del formulario son validos
        // genero el objeto options para llamar al login
        const options = {
            method: 'POST',
            headers:{
                'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
            },
            body: JSON.stringify({ // Genero el body como string
                email: e.target.email.value, // obtengo el value de un input por su name
                password: e.target.pass.value
            })
        }
        // llamo al login
        fetch('http://localhost:4567/auth/login', options)
        .then(r => r.json())
        .then(d => console.log(d)) // aqui tendríamos el access token
    }else{
        // mostrar error al usuario con el campo que no es válido
    }
   
  }

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input required name="email" type="email" placeholder="Correo electrónico"></input>
        <input required name="pass" type="password" placeholder="Password"></input>
        <input type="submit" ></input>
      </form>
    </React.Fragment>
  );
}

export default Login;
