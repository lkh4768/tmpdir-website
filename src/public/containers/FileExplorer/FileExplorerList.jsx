import React from 'react';
import PropTypes from 'prop-types';
import File from '../../components/FileExplorer/File';

class FileExplorerList extends React.Component {
  makeFiles() {
    return this.props.files.map(file => <File key={file.path} path={file.path} size={file.size} />);
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
    path: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })),
};

FileExplorerList.defaultProps = {
  files: null,
};

export default FileExplorerList;
