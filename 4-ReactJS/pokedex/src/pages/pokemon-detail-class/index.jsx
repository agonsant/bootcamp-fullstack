import React from "react";
import "./style.css";

class PokemonDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`)
      .then((res) => res.json())
      .then((data) => this.setState({ pokemon: data }));
  }

  render() {
    return (
        <div>
            <h1>{this.state.pokemon.name}</h1>;
            <img alt='' src={this.state.pokemon.sprites?.front_default}/>;
            <img alt='' src={this.state.pokemon.sprites?.back_default}/>;
            {this.state.pokemon.moves?.map( (m,i) => <p key={i}>{m.move.name}</p>)}
        </div>
    )
  }
}

export default PokemonDetail;
