import React from 'react';

import Const from '_common/Const';
import Body from '_components/Body';
import Footer from '_components/Footer';

import Title from './components/Title';
import Sns from './components/Sns';
import FileExplorer from './components/FileExplorer';
import UploadContainer from './containers/Upload';
import UploadedPanelContainer from './containers/UploadedPanel';
import '../style.scss';

function Upload() {
  return (
    <React.Fragment>
      <Body>
        <Title />
        <Sns />
        <FileExplorer />
        <UploadContainer />
      </Body>
      <Footer labels={Const.LABELS} links={Const.LINKS} />
      <UploadedPanelContainer />
    </React.Fragment>
  );
}

export default Upload;
