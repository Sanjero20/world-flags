import React from 'react';
import { Country, CountryProps } from '../types/country.types';
import Card from './Card';

// Render the list of countries
function Flags({ list }: CountryProps) {
  return (
    <div className="container">
      {list.map((country: Country) => (
        <React.Fragment key={country.name}>
          <Card data={country} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Flags;
