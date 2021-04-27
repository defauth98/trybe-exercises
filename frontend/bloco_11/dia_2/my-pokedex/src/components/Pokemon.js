import React from 'react';

import './styles/pokemon.css';

const Pokemon = ({ name, type, value, measurementUnit, image, moreInfo }) => {
  return (
    <div className="pokemon">
      <h2>{name}</h2>
      <span>{type}</span>
      <span>
        {value}
        {measurementUnit}
      </span>
      <img src={image} alt={name} />
      <a href={moreInfo}>More Info</a>
    </div>
  );
};

export default Pokemon;
