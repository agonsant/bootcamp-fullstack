import React from "react";
import { Link } from "react-router-dom";
import PokemonListCard from "../../components/pokemon-list-card";
import "./style.css";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    const query = new URLSearchParams(this.props.location.search)
    this.limits = query.get('limits');
    this.offset = query.get('offset');
    this.originalArray = [];
    this.state = {
      pokemonList: [],
    };
  }

  requestPokemon(url) {
    return fetch(url).then((res) => res.json());
  }

  // Sin Promise.allSettled
  //addPokemon(pokemon){
  //     this.setState((state) => {
  //         return {
  //             // sintaxis equivalentes state.pokemonList.concat([pokemon])
  //             pokemonList: [...state.pokemonList, pokemon].sort((a,b) => a.id-b.id)
  //         };
  //     });
  //   }

  addPokemonList(pokemonListPromiseResult) {
    // [{status: string, value: Objeto(Pokemon)}]
    this.originalArray = pokemonListPromiseResult.map((plr) => plr.value);
    this.setState({
      // sintaxis equivalentes state.pokemonList.concat([pokemon])
      pokemonList: [...this.originalArray],
    });
  }

  onSearchChange(e) {
    // Cuando el usuario escriba, filtrar el array de pokemons
    // para que solo aparezcan los que contienen en el nombre lo
    // que haya puesto el usuario
    const userInput = e.target.value;
    if (userInput.length > 0) {
      this.setState({
        pokemonList: this.originalArray.filter((p) => {
          return (
            p.name.toLowerCase().includes(userInput.toLowerCase()) ||
            p.types.some((e) =>
              e.type.name.toLowerCase().includes(userInput.toLowerCase())
            ) ||
            `${p.id}`.includes(userInput)
          );
        }),
      });
    } else {
      this.setState({
        pokemonList: [...this.originalArray],
      });
    }
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.limits}&offset=${this.offset}`) // llamada HTTP
      .then((res) => res.json()) // respuesta que tengo que dar formato
      .then((data) => {
        const requestPromisesList = data.results.map((p) =>
          this.requestPokemon(p.url)
        );
        Promise.allSettled(requestPromisesList).then(
          this.addPokemonList.bind(this)
        );
      }); // los datos

    // Promise.allSettled([...promesas]).then((v) => typeOf v === array<ResultadosPromesas>)
  }

  render() {
    return (
      <div className="pokemon-list__container">
        <section className="pokemon-list__search-container">
          <input
            className="pokemon-list__search-input"
            type="text"
            onChange={(e) => this.onSearchChange(e)}
            placeholder="Escribe para buscar Pokemon..."
          ></input>
        </section>
        <ul className="card-list__container">
          {this.state.pokemonList.map((v) => (
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
}

export default PokemonList;
