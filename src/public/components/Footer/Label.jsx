import PropTypes from 'prop-types';
import React from 'react';

const CLASS_NAME = {
  label: 'footer__label',
};

function Label({ icon, text }) {
  return (
    <span className={CLASS_NAME.label}>
      {icon}
      <span>
        {text}
      </span>
    </span>
  );
}

Label.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default Label;
