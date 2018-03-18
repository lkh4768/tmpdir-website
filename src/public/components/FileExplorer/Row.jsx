import PropTypes from 'prop-types';
import React from 'react';

import FaClose from '../../../../node_modules/react-icons/lib/fa/close';

class Row extends React.Component {
  render() {
    const ele = (
      <li className={Row.CLASS_NAME.row}>
        <div className={Row.CLASS_NAME.leftItem}>
          <div className={Row.CLASS_NAME.path}>{this.props.leftItemText}</div>
        </div>
        <div className={Row.CLASS_NAME.rightItem}>
          <div className={Row.CLASS_NAME.size}>{this.props.rightItemText}</div>
          <a className={Row.CLASS_NAME.delete} href="/">
            <FaClose />
          </a>
        </div>
      </li>
    );
    return ele;
  }
}

Row.CLASS_NAME = {
  row: 'file-explorer__row',
  rightItem: 'file-explorer__row__right-item',
  leftItem: 'file-explorer__row__left-item',
  path: 'file-explorer__row__left-item__text',
  size: 'file-explorer__row__right-item__text',
  delete: 'file-explorer__row__right-item__delete',
};

Row.propTypes = {
  leftItemText: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  rightItemText: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default Row;
