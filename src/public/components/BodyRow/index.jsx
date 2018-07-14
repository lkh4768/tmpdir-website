import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'reactstrap';

import styles from './style.scss';

const ALIGN = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
  BETWEEN: 'between',
};

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  align: PropTypes.oneOf([...Object.keys(ALIGN).map(key => ALIGN[key])]),
};

const defaultProps = {
  className: '',
  align: 'left',
};

function BodyRow({ children, className, align }) {
  return (
    <Row>
      <Col
        xs="12"
        md={{ size: 8, offset: 2 }}
        className={`${styles.body_row__col} ${styles[`body_row__col--${align}`]} ${className}`}
      >
        {children}
      </Col>
    </Row>
  );
}

BodyRow.ALIGN = ALIGN;
BodyRow.propTypes = propTypes;
BodyRow.defaultProps = defaultProps;

export default BodyRow;
