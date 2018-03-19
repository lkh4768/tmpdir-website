import React from 'react';
import PropTypes from 'prop-types';
import BodyRow from '../Body/BodyRow';
import FileExplorerList from './FileExplorerList';
import FileExplorerResult from './FileExplorerResult';

class FileExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.inputFile = null;
    this.showLocalFileExplorer = this.showLocalFileExplorer.bind(this);
    console.log(props);
  }
  showLocalFileExplorer() {
    this.inputFile.click();
  }
  render() {
    const ele = (
      <BodyRow>
        <ul className={FileExplorer.className.root}>
          <li
            onClick={this.showLocalFileExplorer}
            role="presentation"
          >
            <FileExplorerList files={this.props.files} />
          </li>
          <li>
            <FileExplorerResult files={this.props.files} />
          </li>
          <input
            className={FileExplorer.className.inputFile}
            ref={(component) => { this.inputFile = component; }}
            type="file"
            onChange={(e) => { this.props.addFile(e.target.files[0]); }}
          />
        </ul>
      </BodyRow>
    );
    return ele;
  }
}

FileExplorer.className = {
  root: 'file-explorer',
  inputFile: 'file-explorer__input-file',
};

FileExplorer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })),
  addFile: PropTypes.func.isRequired,
};

FileExplorer.defaultProps = {
  files: [],
};

export default FileExplorer;
