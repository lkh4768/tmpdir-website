import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
};

const defaultProps = {
  text: '',
  width: 100,
};

const className = {
  backdrop: 'backdrop',
};

function Backdrop({ text, width }) {
  const rightPosition = 100 - width;
  return (
    <div
      className={className.backdrop}
      style={{ right: [rightPosition, '%'].join('') }}
    >
      {text}
    </div>
  );
}


Backdrop.propTypes = propTypes;
Backdrop.defaultProps = defaultProps;

export default Backdrop;
