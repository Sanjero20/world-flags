import React, { useEffect, useReducer, useState } from 'react';

// Components
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Flags from './components/Flags';
import Footer from './components/Footer';
import Loader from './components/Loader';

// External functions
import axios from 'axios';
import { filterData } from './modules/filterList';
import statusReducer from './modules/status';

// Types
import { Country } from './components/types/country.types';
import { initialState } from './components/types/status.types';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [state, dispatch] = useReducer(statusReducer, initialState);

  // Fetch the Country info
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all?fields=region,name,flag,capital')
      .then((res) => {
        const countries = filterData(res.data);
        setCountries(countries);
        dispatch('success');
      })
      .catch((err) => {
        dispatch('error');
      });
  }, []);

  return (
    <main>
      <Header />

      {state.loading && <Loader />}
      {!state.loading && state.error}

      {!state.loading && !state.error && (
        <React.Fragment>
          <SearchBar />
          <Flags list={countries} />
        </React.Fragment>
      )}

      <Footer />
    </main>
  );
}

export default App;
