import React from 'react';
import { Container } from 'reactstrap';
import Title from '../Title/Title';
import Sns from '../Sns/Sns';
import FileExplorer from '../FileExplorer/FileExplorer';
import Upload from '../../containers/Upload/Upload';

class Body extends React.Component {
  render() {
    const ele = (
      <div className="body">
        <Container fluid>
          <Title />
          <Sns />
          <FileExplorer />
          <Upload />
        </Container>
      </div>
    );
    return ele;
  }
}

export default Body;
