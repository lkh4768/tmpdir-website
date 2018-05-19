import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'reactstrap';

const CLASS_NAME = {
  body: 'body',
};

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

function Body({ children }) {
  return (
    <div className={CLASS_NAME.body}>
      <Container fluid>
        {children}
      </Container>
    </div>
  );
}

Body.propTypes = propTypes;

export default Body;
