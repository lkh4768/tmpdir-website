import PropTypes from 'prop-types';
import React from 'react';
import ResultContainer from '../../containers/FileExplorer/ResultContainer';

const CLASS_NAME = {
  result: 'file-explorer__result',
};

const propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
};

class FileExplorerResult extends React.Component {
  getFileTotalSize() {
    if (this.props.files && this.props.files.length > 0) {
      return this.props.files.reduce((sum, file) => sum + file.size, 0);
    }
    return 0;
  }
  render() {
    return (
      <ul className={CLASS_NAME.result}>
        <ResultContainer fileCount={this.props.files.length} totalSize={this.getFileTotalSize()} />
      </ul>
    );
  }
}

FileExplorerResult.propTypes = propTypes;

export default FileExplorerResult;
