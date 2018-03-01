import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'reactstrap';

class BodyRow extends React.Component {
  render() {
    const className = 'body__row__col';
    const ele = (
      <Row>
        <Col className={className}>
          {this.props.children}
        </Col>
      </Row>
    );

    return ele;
  }
}

BodyRow.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BodyRow;
