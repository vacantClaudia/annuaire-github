import React from 'react';
import Cards from 'src/components/Cards';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Results = ({ repos }) => (
  <div>
    <Card.Group itemsPerRow={3}>
      {repos.map((item) => (
        <Cards
          {...item}
          key={item.id}
        />
      ))}
    </Card.Group>
  </div>
);
Results.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Results;
