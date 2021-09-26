import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PokemonListCard from "../../components/pokemon-list-card";
import "./style.css";

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function PokemonList () {
  const [pokemonList, setPokemonList] = useState([]);
  const [originalArray, setOriginalArray] = useState([]);
  const [userInput, setUserInput] = useState('');
  const query = useQuery();
  const limits = query.get('limits');
  const offset = query.get('offset');
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limits}&offset=${offset}`) // llamada HTTP
      .then((res) => res.json()) // respuesta que tengo que dar formato
      .then((data) => {
        const requestPromisesList = data.results.map((p) =>
          fetch(p.url).then((res) => res.json())
        );
        Promise.allSettled(requestPromisesList).then(
          (pokemonListPromiseResult) => {
            const finalList = pokemonListPromiseResult.map((plr) => plr.value);
            setOriginalArray(finalList);
            setPokemonList([...finalList]);
          }
        );
      });
  }, [limits, offset]);

  useEffect(() => {
      if (userInput.length > 0) {
        setPokemonList(originalArray.filter((p) => {
          return (
            p.name.toLowerCase().includes(userInput.toLowerCase()) ||
            p.types.some((e) =>
              e.type.name.toLowerCase().includes(userInput.toLowerCase())
            ) ||
            `${p.id}`.includes(userInput)
          );
        }))
    } else {
      setPokemonList([...originalArray])
    }
  }, [userInput, originalArray]);

    return (
      <div className="pokemon-list__container">
        <section className="pokemon-list__search-container">
          <input
            className="pokemon-list__search-input"
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Escribe para buscar Pokemon..."
          ></input>
        </section>
        <ul className="card-list__container">
          {pokemonList.map((v) => (
            <li key={v.id} className="card-list__item">
              <Link to={`/pokemon-list/${v.name}`}>
                <PokemonListCard pokemon={v}></PokemonListCard>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default PokemonList;
