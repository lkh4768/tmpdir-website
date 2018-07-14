import PropTypes from 'prop-types';
import React from 'react';
import { FaClose } from 'react-icons/lib/fa';
import Utils from '_common/Utils';

const CLASS_NAME = {
  row: 'file-explorer__row',
  rightItem: 'file-explorer__row__right-item',
  leftItem: 'file-explorer__row__left-item',
  name: 'file-explorer__row__left-item__text',
  size: 'file-explorer__row__right-item__text',
  delete: 'file-explorer__row__right-item__delete',
};

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

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
