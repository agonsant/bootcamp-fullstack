import React, { useEffect, useState } from "react";

function DemoCityFetch(prop) {
//   let countries = [];
  let [countries, updateCountries] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/5db18906-a9c2-4f4a-ad94-a14c40611157")
      .then((r) => r.json())
      .then((d) => updateCountries(d.countries));
  }, []);
  /**
   * Vacio: Solo se va a ejecutar la primera vez que pinte el componente (Mount)
   * Con variables(deps): Se va a ejecutar la primera vez (Mount) 
   *                    y cada vez que cambie alguna de esas variables (Update)
   */

  return (
    <React.Fragment>
      <p>Hola Componente {countries[15]?.dial_code}</p>
    </React.Fragment>
  );
}

export default DemoCityFetch;
