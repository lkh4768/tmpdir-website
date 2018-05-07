import React from 'react';
import { Container } from 'reactstrap';
import Title from '_components/Title';
import Sns from '_components/Sns';
import FileExplorer from '_components/FileExplorer';
import UploadContainer from '_containers/Upload';

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
        <UploadContainer />
      </Container>
    </div>
  );
}

export default Body;
