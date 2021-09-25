import React from "react";

function Register() {
  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      if (e.target.pass.value === e.target.repeated_pass.value) {
        // solo ejecuto el registro si las passwords son iguales
        // genero el objeto options para llamar al login
        const options = {
          method: "POST",
          headers: {
            "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
          },
          body: JSON.stringify({
            // Genero el body como string
            email: e.target.email.value, // obtengo el value de un input por su name
            password: e.target.pass.value,
          }),
        };
        // llamo al registro
        fetch("http://localhost:4567/auth/register", options)
          .then((r) => r.json())
          .then((d) => console.log(d)); 
      } else {
        // Muestro al usuario el error de que las passwords no coinciden
      }
    } else {
      // mostrar error al usuario con el campo que no es válido
    }
  };

  return (
    <React.Fragment>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
        ></input>
        <input type="password" name="pass" placeholder="Password"></input>
        <input
          type="password"
          name="repeated_pass"
          placeholder="Repeat Password"
        ></input>
        <input type="submit"></input>
      </form>
    </React.Fragment>
  );
}

export default Register;
