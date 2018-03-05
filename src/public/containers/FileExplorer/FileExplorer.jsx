import PropTypes from 'prop-types';
import React from 'react';
import BodyRow from '../Body/BodyRow';
import FileExplorerList from './FileExplorerList';
import FileExplorerResult from './FileExplorerResult';

class FileExplorer extends React.Component {
  getFileTotalSize() {
    return this.props.files.reduce((file, totalSize) => file.size + totalSize, 0);
  }
  render() {
    const ele = (
      <BodyRow>
        <ul className={FileExplorer.className}>
          <li>
            <FileExplorerList files={this.props.files} />
          </li>
          <li>
            <FileExplorerResult
              fileCount={this.props.files.length}
              fileSize={this.getFileTotalSize()}
            />
          </li>
        </ul>
      </BodyRow>
    );
    return ele;
  }
}

FileExplorer.className = 'file-explorer';

FileExplorer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })),
};

FileExplorer.defaultProps = {
  files: null,
};

export default FileExplorer;
