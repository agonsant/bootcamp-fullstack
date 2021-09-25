import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [params.name]);

    return (
        <div>
            <h1>{pokemon.name}</h1>;
            <img alt='' src={pokemon.sprites?.front_default}/>;
            <img alt='' src={pokemon.sprites?.back_default}/>;
            {pokemon.moves?.map( (m,i) => <p key={i}>{m.move.name}</p>)}
        </div>
    )
}

export default PokemonDetail;
