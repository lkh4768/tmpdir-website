import PropTypes from 'prop-types';
import React from 'react';
import Result from '../../containers/FileExplorer/Result';

class FileExplorerResult extends React.Component {
  getFileTotalSize() {
    let totalSize = 0;
    if (this.props.files.size && this.props.files.size > 0) {
      this.props.files.forEach((file) => {
        totalSize += file.size;
        return true;
      });
    }
    return totalSize;
  }
  render() {
    const fileCount = (this.props.files.size > 0) ? this.props.files.size : 0;
    const ele = (
      <ul className={FileExplorerResult.CLASS_NAME}>
        <Result fileCount={fileCount} totalSize={this.getFileTotalSize()} />
      </ul>
    );
    return ele;
  }
}

FileExplorerResult.CLASS_NAME = 'file-explorer__result';

FileExplorerResult.propTypes = {
  files: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
};

export default FileExplorerResult;
