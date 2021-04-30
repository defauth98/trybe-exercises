import React from 'react';
import PropTypes from 'prop-types';

import './styles/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div className="pokemon-info">
          <h2>{name}</h2>
          <h3>{type}</h3>
          <span>
            {averageWeight.value} {averageWeight.measurementUnit}
          </span>

          <a href={moreInfo}>More Info</a>
        </div>

        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.objectOf({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }),
};

export default Pokemon;
