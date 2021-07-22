// == Import npm
import React from 'react';
import SearchBar from 'src/components/SearchBar';
import Main from 'src/components/Main';
import Results from 'src/components/Results';
// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <SearchBar />
    <Main />
    <Results />
  </div>
);

// == Export
export default App;
