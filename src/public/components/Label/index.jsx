import PropTypes from 'prop-types';
import React from 'react';

import styles from './style.scss';

function Label({ icon, text }) {
  return (
    <span className={styles.label}>
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
