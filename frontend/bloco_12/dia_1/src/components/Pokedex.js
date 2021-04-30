import React, { Component } from 'react';

import Pokemon from './Pokemon';
import Button from './Button';
import data from '../data';
import './styles/pokedex.css';

class Pokedex extends Component {
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

  renderButton() {
    if (this.state.pokemons) {
      if (this.state.pokemons.length === 1) {
        return (
          <Button onClick={this.nextPokemon} color="blue" disable>
            Next
          </Button>
        );
      }
    }

    return (
      <Button onClick={this.nextPokemon} color="blue">
        Next
      </Button>
    );
  }

  render() {
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>

        <div className="pokemons">{this.renderPokemon()}</div>
        <div className="buttons-container">
          <Button onClick={this.resetPokemons} color="cyan">
            All
          </Button>
          <Button
            onClick={() => this.renderFilteredPokemons('Fire')}
            color="red"
          >
            Fire
          </Button>
          <Button
            onClick={() => this.renderFilteredPokemons('Psychic')}
            color="yellow"
          >
            Psychic
          </Button>

          <Button
            onClick={() => this.renderFilteredPokemons('Poison')}
            color="green"
          >
            Poison
          </Button>
        </div>
        {this.renderButton()}
      </div>
    );
  }
}

export default Pokedex;
