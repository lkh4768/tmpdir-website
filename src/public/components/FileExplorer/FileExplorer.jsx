import React from 'react';
import BodyRow from '../Body/BodyRow';
import FileExplorerList from '../../containers/FileExplorer/FileExplorerList';
import FileExplorerResult from '../../containers/FileExplorer/FileExplorerResult';

const CLASS_NAME = {
  fileExplorer: 'file-explorer',
};

function FileExplorer() {
  return (
    <BodyRow>
      <ul className={CLASS_NAME.fileExplorer}>
        <li>
          <FileExplorerList />
        </li>
        <li>
          <FileExplorerResult />
        </li>
      </ul>
    </BodyRow>
  );
}

export default FileExplorer;
