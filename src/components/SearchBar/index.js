import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

const SearchBar = () => (
  <div>
    <Icon name="github" size="large" />
    <h1 className="title">Github</h1>
    <form>
      <Input
        size="large"
        placeholder="Search..."
        type="text"
        className="header-input"
      />
    </form>
  </div>
);

export default SearchBar;
