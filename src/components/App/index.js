// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';

import SearchBar from 'src/components/SearchBar';
import Main from 'src/components/Main';
import Results from 'src/components/Results';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  // state pour récupérer les repos de ma requête
  const [repos, setRepos] = useState([]);
  // state pour récupérer l'entrée de mon input
  const [inputSearch, setInputSearch] = useState('');

  const [load, setLoad] = useState(false);

  const [loading, setLoading] = useState(false);

  const loadRepos = () => {
    setLoading(true);
    // https://api.github.com/search/repositories?q=REPOACHERCHER
    axios.get(`https://api.github.com/search/repositories?q=${inputSearch}`)
      .then((response) => {
        console.log(response.data.items);
        setRepos(response.data.items);
        setLoad(true);
      })
      .catch((error) => {
        setLoad(false);
        // todo afficher un message d erreur pour l'utilisateur
      })
      .finally(() => {
        setLoad(false);
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    console.log('submit ok');
    event.preventDefault();
    loadRepos();
  };

  return (
    <div className="app">
      <SearchBar
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        handleSubmit={handleSubmit}
      />
      {loading && (
        <Dimmer active>
          <Loader>Récupération des résultats</Loader>
        </Dimmer>
      )}
      {load && (<Main count={repos.length} />)}
      <Results repos={repos} />
    </div>
  );
};

// == Export
export default App;
