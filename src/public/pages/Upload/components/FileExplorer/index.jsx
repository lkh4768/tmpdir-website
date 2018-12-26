import React from 'react';

import BodyRow from '_components/BodyRow';

import FileExplorerListContainer from '../../containers/FileExplorerList';
import FileExplorerResultContainer from '../../containers/FileExplorerResult';
import styles from './style.scss';

function FileExplorer() {
  return (
    <BodyRow>
      <ul className={styles.file_explorer}>
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
