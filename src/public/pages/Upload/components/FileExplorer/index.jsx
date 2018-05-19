import React from 'react';
import BodyRow from '_components/BodyRow';
import FileExplorerListContainer from '../../containers/FileExplorerList';
import FileExplorerResultContainer from '../../containers/FileExplorerResult';

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
