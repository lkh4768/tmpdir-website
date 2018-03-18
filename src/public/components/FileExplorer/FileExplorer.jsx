import React from 'react';
import PropTypes from 'prop-types';
import BodyRow from '../Body/BodyRow';
import FileExplorerList from './FileExplorerList';
import FileExplorerResult from './FileExplorerResult';

class FileExplorer extends React.Component {
  render() {
    const ele = (
      <BodyRow>
        <button onClick={this.props.onClick}>
          {'add'}
        </button>
        <ul className={FileExplorer.className}>
          <li>
            <FileExplorerList files={this.props.files} />
          </li>
          <li>
            <FileExplorerResult files={this.props.files} />
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
  onClick: PropTypes.func.isRequired,
};

FileExplorer.defaultProps = {
  files: [],
};

export default FileExplorer;
