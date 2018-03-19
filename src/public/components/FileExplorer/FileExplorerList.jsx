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
      <ul className={FileExplorerList.CLASS_NAME}>
        { files }
      </ul>
    );
    return ele;
  }
}

FileExplorerList.CLASS_NAME = 'file-explorer__list';

FileExplorerList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })),
};

FileExplorerList.defaultProps = {
  files: [],
};

export default FileExplorerList;
