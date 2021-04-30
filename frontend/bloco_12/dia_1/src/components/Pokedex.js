import React from 'react';

import Pokemon from './Pokemon';
import data from '../data';
import './styles/pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: data,
      currentIndex: 0,
    };
  }

  renderPokemon() {
    const pokemon = this.state.pokemons[this.state.currentIndex];

    return <Pokemon pokemon={pokemon} />;
  }

  render() {
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>

        <div className="pokemons">{this.renderPokemon()}</div>
      </div>
    );
  }
}

export default Pokedex;
