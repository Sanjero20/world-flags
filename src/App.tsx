import axios from 'axios';
import { useEffect, useState } from 'react';

type countryData = {
  name: string;
  capital: string;
  region: string;
  flag: string;
  independent: boolean;
};

function App() {
  const [countries, setCountries] = useState();

  // Fetch the DATAs
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all?fields=region,name,flag,capital')
      .then((res) => {
        const responseData = res.data;
        const countries = responseData.map(
          ({ independent, ...data }: countryData) => data
        );

        setCountries(countries);
      })
      .catch((err) => {
        console.clear();
        console.log(err);
      });
  }, []);

  return <div>World flags</div>;
}

export default App;
