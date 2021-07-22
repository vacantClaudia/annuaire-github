import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ inputSearch, setInputSearch, handleSubmit }) => (
  <div>
    <Icon name="github" size="large" />
    <h1 className="title">Github</h1>
    <form onSubmit={handleSubmit}>
      <Input
        size="large"
        placeholder="Search..."
        type="text"
        className="header-input"
        onChange={(event) => {
          setInputSearch(event.currentTarget.value);
        }}
        value={inputSearch}
      />
    </form>
  </div>
);
SearchBar.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
