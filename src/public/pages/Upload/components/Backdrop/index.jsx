import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
};

const defaultProps = {
  text: '',
  width: 100,
};

function Backdrop({ text, width }) {
  const rightPosition = 100 - width;
  return (
    <div
      className={styles.backdrop}
      style={{ right: [rightPosition, '%'].join('') }}
    >
      {text}
    </div>
  );
}


Backdrop.propTypes = propTypes;
Backdrop.defaultProps = defaultProps;

export default Backdrop;
