import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Cards = ({ id, name, full_name, description }) => (
  <Card>
    <Image src="" wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        {full_name}
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>

);
Cards.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Cards;
