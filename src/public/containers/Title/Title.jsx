import React from 'react';
import { Row, Col } from 'reactstrap';
import Logo from '../../components/Title/Logo';
import Name from '../../components/Title/Name';
import Version from '../../components/Title/Version';

class Title extends React.Component {
  render() {
    const ele = (
      <Row className="title">
        <Col>
          <a href="/">
            <Logo />
            <Name />
            <Version />
          </a>
        </Col>
      </Row>
    );

    return ele;
  }
}

export default Title;
