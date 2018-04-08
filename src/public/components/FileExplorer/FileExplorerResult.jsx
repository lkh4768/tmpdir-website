import PropTypes from 'prop-types';
import React from 'react';
import Result from '../../containers/FileExplorer/Result';

class FileExplorerResult extends React.Component {
  getFileTotalSize() {
    return this.props.files.reduce((totalSize, file) => file.size + totalSize, 0);
  }
  render() {
    const fileCount = (this.props.files.length > 0) ? this.props.files.length : 0;
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
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
};

export default FileExplorerResult;
