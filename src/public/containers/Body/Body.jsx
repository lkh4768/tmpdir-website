import React from 'react';
import { Container } from 'reactstrap';

class Body extends React.Component {
  render() {
    const node = (
      <div className="body">
        <Container fluid />
      </div>
    );
    return node;
  }
}

export default Body;
