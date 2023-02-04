import React from 'react';
import Search from './Search';
import '../styles/app.css';

const App = () => {
  return (
    <div className="app">
      <img src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
      alt="NASA Logo" className="nasa-logo"></img>
      <Search />
    </div>
  );
}

export default App;
