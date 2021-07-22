// == Import npm
import React from 'react';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Results from 'src/components/Results';
// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <SearchBar />
    <Message />
    <Results />
  </div>
);

// == Export
export default App;
