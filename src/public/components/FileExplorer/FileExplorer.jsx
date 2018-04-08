import React from 'react';
import BodyRow from '../Body/BodyRow';
import FileExplorerList from '../../containers/FileExplorer/FileExplorerList';
import FileExplorerResult from '../../containers/FileExplorer/FileExplorerResult';

class FileExplorer extends React.Component {
  render() {
    const ele = (
      <BodyRow>
        <ul className={FileExplorer.className}>
          <li>
            <FileExplorerList />
          </li>
          <li>
            <FileExplorerResult />
          </li>
        </ul>
      </BodyRow>
    );
    return ele;
  }
}

FileExplorer.className = 'file-explorer';

export default FileExplorer;
