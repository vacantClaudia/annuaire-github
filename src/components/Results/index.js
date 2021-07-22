import React from 'react';
import Cards from 'src/components/Cards';
import { Card } from 'semantic-ui-react';

const Results = () => (
  <div>
    <Card.Group itemsPerRow={3}>
      <Cards />
      <Cards />
      <Cards />
    </Card.Group>
  </div>
);

export default Results;
