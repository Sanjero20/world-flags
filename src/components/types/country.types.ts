export type Country = {
  name: string;
  capital: string;
  region: string;
  flag: string;
  independent?: boolean;
};

export type CountryProps = {
  list: Country[];
};

export type CardProps = {
  data: Country;
};
