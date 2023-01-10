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
import search from './modules/searchList';

// Types
import { Country } from './components/types/country.types';
import { initialState } from './components/types/status.types';

function App() {
  const [state, dispatch] = useReducer(statusReducer, initialState);
  const [countries, setCountries] = useState<Country[]>([]);

  const [searchText, setSearchText] = useState('');
  const [matchedCountries, setMatchedCountries] = useState<Country[]>([]);

  // Fetch the Country info
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all?fields=region,name,flag,capital')
      .then((res) => {
        const countries = filterData(res.data);
        setCountries(countries);
        setMatchedCountries(countries);
        dispatch('success');
      })
      .catch((err) => {
        dispatch('error');
      });
  }, []);

  useEffect(() => {
    if (searchText.trim() == '') {
      setMatchedCountries(countries);
      return;
    }

    const matches = search(searchText, countries);
    setMatchedCountries(matches);

    // Executes when user is inputting value to search bar
  }, [searchText]);

  // Functions
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <main>
      <Header />

      {state.loading && <Loader />}
      {!state.loading && state.error}

      {!state.loading && !state.error && (
        <div className="main-container">
          <SearchBar value={searchText} searchHandler={handleSearch} />
          <Flags list={matchedCountries} />
        </div>
      )}

      <Footer />
    </main>
  );
}

export default App;
