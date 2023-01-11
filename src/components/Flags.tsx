import React from 'react';
import { Country, CountryProps } from './types/country.types';
import Card from './Card';

import world from '../assets/world.svg';

// Render the list of countries
function Flags({ list }: CountryProps) {
  if (list.length <= 0) {
    return (
      <div className="search-error">
        <img className="world" src={world} alt="" />
        <p>THIS COUNTRY DOES NOT EXIST</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flags">
        {list.map((country: Country) => (
          <React.Fragment key={country.name}>
            <Card data={country} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Flags;
