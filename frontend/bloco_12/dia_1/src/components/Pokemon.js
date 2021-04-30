import React from 'react';
import PropTypes from 'prop-types';

import './styles/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {
      name,
      type,
      value,
      measurementUnit,
      image,
      moreInfo,
    } = this.props.pokemon;

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
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }),
};

export default Pokemon;
