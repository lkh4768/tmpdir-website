import React from 'react';
import BodyRow from '../Body/BodyRow';
import FileExplorerListContainer from '../../containers/FileExplorer/FileExplorerListContainer';
import FileExplorerResultContainer from '../../containers/FileExplorer/FileExplorerResultContainer';

const CLASS_NAME = {
  fileExplorer: 'file-explorer',
};

function FileExplorer() {
  return (
    <BodyRow>
      <ul className={CLASS_NAME.fileExplorer}>
        <li>
          <FileExplorerListContainer />
        </li>
        <li>
          <FileExplorerResultContainer />
        </li>
      </ul>
    </BodyRow>
  );
}

export default FileExplorer;
