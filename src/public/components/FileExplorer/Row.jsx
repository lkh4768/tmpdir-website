import PropTypes from 'prop-types';
import React from 'react';

import FaClose from '../../../../node_modules/react-icons/lib/fa/close';

const CLASS_NAME = {
  row: 'file-explorer__row',
  rightItem: 'file-explorer__row__right-item',
  leftItem: 'file-explorer__row__left-item',
  name: 'file-explorer__row__left-item__text',
  size: 'file-explorer__row__right-item__text',
  delete: 'file-explorer__row__right-item__delete',
};

function Row({
  xClickHandler,
  xKeyPressHandler,
  leftItemText,
  rightItemText,
}) {
  return (
    <li className={CLASS_NAME.row}>
      <div className={CLASS_NAME.leftItem}>
        <div className={CLASS_NAME.name}>{leftItemText}</div>
      </div>
      <div className={CLASS_NAME.rightItem}>
        <div className={CLASS_NAME.size}>{rightItemText}</div>
        <div
          role="button"
          tabIndex="0"
          className={CLASS_NAME.delete}
          onClick={xClickHandler}
          onKeyPress={xKeyPressHandler}
        >
          <FaClose />
        </div>
      </div>
    </li>
  );
}

Row.propTypes = {
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

Row.defaultProps = {
  xClickHandler: f => f,
  xKeyPressHandler: f => f,
};

export default Row;
