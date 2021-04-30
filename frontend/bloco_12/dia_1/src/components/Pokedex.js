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

    this.nextPokemon = this.nextPokemon.bind(this);
    this.renderFilteredPokemons = this.renderFilteredPokemons.bind(this);
    this.resetPokemons = this.resetPokemons.bind(this);
  }

  renderPokemon() {
    const pokemon = this.state.pokemons[this.state.currentIndex];

    return <Pokemon pokemon={pokemon} />;
  }

  nextPokemon() {
    if (this.state.currentIndex + 1 === this.state.pokemons.length) {
      this.setState({
        currentIndex: 0,
      });

      return;
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
  }

  renderFilteredPokemons(pokemonType) {
    const filteredPokemons = data.filter((item) => item.type === pokemonType);

    this.setState({
      pokemons: filteredPokemons,
    });
  }

  resetPokemons() {
    this.setState({
      pokemons: data,
    });
  }

  render() {
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>

        <div className="pokemons">{this.renderPokemon()}</div>
        <div className="buttons-container">
          <button onClick={this.resetPokemons}>All</button>
          <button id="fire" onClick={() => this.renderFilteredPokemons('Fire')}>
            Fire
          </button>
          <button
            id="psychic"
            onClick={() => this.renderFilteredPokemons('Psychic')}
          >
            Psychic
          </button>
        </div>

        <button onClick={this.nextPokemon}>Next</button>
      </div>
    );
  }
}

export default Pokedex;
