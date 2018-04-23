import PropTypes from 'prop-types';
import React from 'react';
import Result from '../../containers/FileExplorer/Result';

const CLASS_NAME = {
  result: 'file-explorer__result',
};

class FileExplorerResult extends React.Component {
  getFileTotalSize() {
    return this.props.files.reduce((sum, file) => sum + file.size);
  }
  render() {
    return (
      <ul className={CLASS_NAME.result}>
        <Result fileCount={this.props.files.length} totalSize={this.getFileTotalSize()} />
      </ul>
    );
  }
}

FileExplorerResult.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
};

export default FileExplorerResult;
