import PropTypes from 'prop-types';
import React from 'react';
import Result from '../../components/FileExplorer/Result';

class FileExplorerResult extends React.Component {
  render() {
    const ele = (
      <ul className={FileExplorerResult.CLASS_NAME}>
        <Result fileCount={this.props.fileCount} totalSize={this.props.totalSize} />
      </ul>
    );
    return ele;
  }
}

FileExplorerResult.CLASS_NAME = 'file-explorer__result';

FileExplorerResult.propTypes = {
  fileCount: PropTypes.number,
  totalSize: PropTypes.number,
};

FileExplorerResult.defaultProps = {
  fileCount: 0,
  totalSize: 0,
};

export default FileExplorerResult;
