import React from 'react';
import PropTypes from 'prop-types';
import BodyRow from '../Body/BodyRow';
import FileExplorerList from '../../containers/FileExplorer/FileExplorerList';
import FileExplorerResult from './FileExplorerResult';
import FileInput from '../../containers/FileExplorer/FileInput';

class FileExplorer extends React.Component {
  render() {
    const ele = (
      <BodyRow>
        <ul className={FileExplorer.className}>
          <li>
            <FileInput files={this.props.files} />
          </li>
          <li>
            <FileExplorerList />
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
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })),
};

FileExplorer.defaultProps = {
  files: [],
};

export default FileExplorer;
