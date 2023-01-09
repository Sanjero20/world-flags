import { Country } from '../types/country.types';

function filterData(list: Country[]) {
  return list.map(({ independent, ...data }: Country) => data);
}

export { filterData };
