import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'reactstrap';

const align = {
  left: 'body__row__col',
  right: 'body__row__col--right',
  center: 'body__row__col--center',
  between: 'body__row__col--between',
};

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  align: PropTypes.string,
};

const defaultProps = {
  className: '',
  align: align.left,
};

class BodyRow extends React.Component {
  getClassName() {
    return `${this.props.className} ${this.props.align}`;
  }

  render() {
    return (
      <Row>
        <Col xs="12" md={{ size: 8, offset: 2 }} className={this.getClassName()}>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

BodyRow.ALIGN = align;
BodyRow.propTypes = propTypes;
BodyRow.defaultProps = defaultProps;

export default BodyRow;
