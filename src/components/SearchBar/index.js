import React, { useEffect, useRef } from 'react';
import { Input, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ inputSearch, setInputSearch, handleSubmit }) => { 

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return( 
    <div>
      <h1 className="title"><Icon name="github" size="large" />Github</h1>
      <form onSubmit={handleSubmit}>
        <Input icon placeholder="Search..." iconPosition="left" className="header-input">
          <input
            size="large"
            type="text"
            className="header-input"
            onChange={(event) => {
              setInputSearch(event.currentTarget.value);
            }}
            value={inputSearch}
            ref={textInput}
          />
          <Icon name="search" />
        </Input>
      </form>

    </div>
  )
};
SearchBar.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
