import { Country } from '../components/types/country.types';

function search(text: string, list: Country[]): Country[] {
  const filtered = list.filter((country: Country) => {
    let countryName = country.name.toLowerCase();
    if (countryName.includes(text)) {
      return country;
    }
  });

  return filtered;
}

export default search;
