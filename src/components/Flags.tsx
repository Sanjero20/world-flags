import React from 'react';
import { Country, CountryProps } from './types/country.types';
import Card from './Card';

// Render the list of countries
function Flags({ list }: CountryProps) {
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
