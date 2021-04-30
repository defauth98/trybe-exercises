import React from 'react';

import Pokemon from './Pokemon';
import data from '../data';
import './styles/pokedex.css';

function Pokedex() {
  function renderPokedex() {
    const pokemons = data.map((item) => (
      <Pokemon
        name={item.name}
        type={item.type}
        value={item.value}
        measurementUnit={item.measurementUnit}
        image={item.image}
        moreInfo={item.moreInfo}
      />
    ));

    return pokemons;
  }

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>

      <div className="pokemons">{renderPokedex()}</div>
    </div>
  );
}

export default Pokedex;
