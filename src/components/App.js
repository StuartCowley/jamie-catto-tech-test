import React, { useState } from 'react';
import Search from './Search';
import '../styles/app.css';

const App = () => {
  const [searchResults, setSearchResults] = useState();
  
  return (
    <div className="app">
      <img src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
      alt="NASA Logo" className="nasa-logo"></img>
      <Search
      setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
