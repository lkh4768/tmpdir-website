import React from 'react';
import C from '_utils/constants';
import Body from '_components/Body';
import Footer from '_components/Footer';
import Title from './components/Title';
import Sns from './components/Sns';
import FileExplorer from './components/FileExplorer';
import UploadContainer from './containers/Upload';
import UploadedPanelContainer from './containers/UploadedPanel';

function Upload() {
  return (
    <React.Fragment>
      <Body>
        <Title />
        <Sns />
        <FileExplorer />
        <UploadContainer />
      </Body>
      <Footer labels={C.LABELS} links={C.LINKS} />
      <UploadedPanelContainer />
    </React.Fragment>
  );
}

export default Upload;
