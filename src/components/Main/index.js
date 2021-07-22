import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Main = ({ count }) => (
  <Message className="count">
    <p>
      La recherche a donné {count} résultats
    </p>
  </Message>
);
Main.propTypes = {
  count: PropTypes.number.isRequired
};
export default Main;
