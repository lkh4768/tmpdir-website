import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'reactstrap';

class BodyRow extends React.Component {
  getClassName() {
    return [this.props.className, this.props.align].join(' ');
  }

  render() {
    const className = this.getClassName();
    const ele = (
      <Row>
        <Col xs="12" md={{ size: 8, offset: 2 }} className={className}>
          {this.props.children}
        </Col>
      </Row>
    );

    return ele;
  }
}

BodyRow.ALIGN = {
  left: 'body__row__col',
  right: 'body__row__col--right',
  center: 'body__row__col--center',
  between: 'body__row__col--between',
};

BodyRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  align: PropTypes.string,
};

BodyRow.defaultProps = {
  className: '',
  align: BodyRow.ALIGN.left,
};

export default BodyRow;
