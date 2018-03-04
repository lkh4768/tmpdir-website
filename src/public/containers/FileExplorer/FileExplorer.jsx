import PropTypes from 'prop-types';
import React from 'react';
import BodyRow from '../Body/BodyRow';
import File from '../../components/File/File';

class FileExplorer extends React.Component {
  makeFiles() {
    return this.props.files.map(file => <File key={file.path} path={file.path} size={file.size} />);
  }
  render() {
    const files = this.makeFiles();
    const ele = (
      <BodyRow className={FileExplorer.CLASS_NAME}>
        <ul>
          { files }
        </ul>
      </BodyRow>
    );
    return ele;
  }
}

FileExplorer.CLASS_NAME = 'file-explorer';

FileExplorer.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  })),
};

FileExplorer.defaultProps = {
  files: null,
};

export default FileExplorer;
