import { Country } from '../components/types/country.types';

function search(text: string, list: Country[]): Country[] {
  let keyword = text.toLowerCase();
  const filtered = list.filter((country: Country) => {
    let countryName = country.name.toLowerCase();
    if (countryName.includes(keyword)) {
      return country;
    }
  });

  return filtered;
}

export default search;
