import React from 'react';
import { Container } from 'reactstrap';
import Title from '../Title/Title';
import Sns from '../Sns/Sns';
import FileExplorer from '../FileExplorer/FileExplorer';
import Upload from '../../containers/Upload/Upload';

const CLASS_NAME = {
  body: 'body',
};

function Body() {
  return (
    <div className={CLASS_NAME.body}>
      <Container fluid>
        <Title />
        <Sns />
        <FileExplorer />
        <Upload />
      </Container>
    </div>
  );
}

export default Body;
