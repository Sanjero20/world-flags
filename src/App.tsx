import axios from 'axios';
import { useEffect, useState } from 'react';

// External functions
import { filterData } from './modules/filterList';

// Types
import { Country } from './types/country.types';

function App() {
  const [countries, setCountries] = useState<Country[]>();

  // Fetch the Country info
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all?fields=region,name,flag,capital')
      .then((res) => {
        const countries = filterData(res.data);
        setCountries(countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>World flags</div>;
}

export default App;
