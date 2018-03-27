import React from 'react';
import PropTypes from 'prop-types';
import File from './File';

class FileExplorerList extends React.Component {
  makeFiles() {
    if (this.props.files.length > 0) {
      return this.props.files.map(file =>
        <File key={file.name} name={file.name} size={file.size} />);
    }
    return [];
  }
  render() {
    const files = this.makeFiles();
    const ele = (
      <ul
        onClick={() => { this.props.showLocalFileExplorer(true); }}
        role="presentation"
        files={this.props.files}
        className={FileExplorerList.className}
      >
        { files }
      </ul>
    );
    return ele;
  }
}

FileExplorerList.className = 'file-explorer__list';

FileExplorerList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })),
  showLocalFileExplorer: PropTypes.func.isRequired,
};

FileExplorerList.defaultProps = {
  files: [],
};

export default FileExplorerList;
