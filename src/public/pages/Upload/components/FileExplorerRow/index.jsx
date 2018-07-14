import PropTypes from 'prop-types';
import React from 'react';
import { FaClose } from 'react-icons/lib/fa';

import Utils from '_common/Utils';

import styles from './style.scss';

const propTypes = {
  leftItemText: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  rightItemText: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  xClickHandler: PropTypes.func,
  xKeyPressHandler: PropTypes.func,
};

const defaultProps = {
  xClickHandler: Utils.emptyFunc,
  xKeyPressHandler: Utils.emptyFunc,
};

function Row({
  xClickHandler,
  xKeyPressHandler,
  leftItemText,
  rightItemText,
}) {
  return (
    <li className={styles.file_explorer_row}>
      <div>
        <div className={styles.file_explorer_row__left_item__text}>{leftItemText}</div>
      </div>
      <div>
        <div className={styles.file_explorer_row__right_item__text}>{rightItemText}</div>
        <div
          role="button"
          tabIndex="0"
          className={styles.file_explorer_row__right_item__delete}
          onClick={xClickHandler}
          onKeyPress={xKeyPressHandler}
        >
          <FaClose />
        </div>
      </div>
    </li>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
