import React, { useState } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';
import '../styles/app.css';
import logoNoBg from '../images/nasa-worm-logo-no-bg.png';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="app">
      <img src={logoNoBg}
      alt="NASA Logo" 
      className="nasa-logo"></img>
      <Search
      setSearchResults={setSearchResults} />
      <SearchResults results={searchResults}/>
    </div>
  );
}

export default App;
