import React from 'react';
import BodyRow from '../Body/BodyRow';
import FileExplorerList from './FileExplorerList';
import FileExplorerResult from './FileExplorerResult';

import FileEntity from '../../entities/File';

class FileExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
    this.addFile = this.addFile.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.addFile();
    }
  }
  handleClick() {
    this.addFile();
  }
  addFile() {
    const timestamp = (new Date()).getTime();
    this.setState({
      files: this.state.files.concat([new FileEntity(['path/to/', timestamp].join(''), 1)]),
    });
  }
  render() {
    const ele = (
      <BodyRow>
        <button onClick={this.addFile} onKeyDown={this.handleKeyDown}>
          {'add'}
        </button>
        <ul className={FileExplorer.className}>
          <li>
            <FileExplorerList files={this.state.files} />
          </li>
          <li>
            <FileExplorerResult
              files={this.state.files}
            />
          </li>
        </ul>
      </BodyRow>
    );
    return ele;
  }
}

FileExplorer.className = 'file-explorer';

export default FileExplorer;
