import React from 'react';
import { Container } from 'reactstrap';
import Title from '../Title/Title';
import Sns from '../Sns/Sns';
import FileExplorer from '../FileExplorer/FileExplorer';
import Upload from '../Upload/Upload';

class Body extends React.Component {
  render() {
    const node = (
      <div className="body">
        <Container fluid>
          <Title />
          <Sns />
          <FileExplorer />
          <Upload />
        </Container>
      </div>
    );
    return node;
  }
}

export default Body;
