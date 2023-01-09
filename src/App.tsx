import { useEffect, useState } from 'react';

// Components
import Header from './components/Header';
import Flags from './components/Flags';

// External functions
import axios from 'axios';
import { filterData } from './modules/filterList';

// Types
import { Country } from './types/country.types';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

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

  return (
    <main>
      <Header />
      <Flags list={countries} />
    </main>
  );
}

export default App;
