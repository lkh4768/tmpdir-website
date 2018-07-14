import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'reactstrap';

import styles from './style.scss';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

function Body({ children }) {
  return (
    <div className={styles.body}>
      <Container fluid>
        {children}
      </Container>
    </div>
  );
}

Body.propTypes = propTypes;

export default Body;
