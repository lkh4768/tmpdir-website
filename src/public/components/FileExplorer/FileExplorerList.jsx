import React from 'react';
import PropTypes from 'prop-types';
import File from '../../containers/FileExplorer/File';

class FileExplorerList extends React.Component {
  constructor(props) {
    super(props);
    this.showLocalFileExplorer = this.showLocalFileExplorer.bind(this);
  }
  makeFiles() {
    const fileElements = [];
    if (this.props.files.size && this.props.files.size > 0) {
      this.props.files.forEach((file) => {
        fileElements.push(<File key={file.name} {...file} />);
      });
    }
    return fileElements;
  }
  showLocalFileExplorer() {
    if (this.inputFileElement) {
      this.inputFileElement.click();
    }
  }
  render() {
    const files = this.makeFiles();
    const ele = (
      <div
        role="button"
        tabIndex="0"
        className={FileExplorerList.CLASS_NAME.wrapper}
        onClick={this.showLocalFileExplorer}
        onKeyPress={f => f}
      >
        <ul className={FileExplorerList.CLASS_NAME.list}>
          { files }
          <input
            className={FileExplorerList.CLASS_NAME.inputFile}
            ref={(component) => { this.inputFileElement = component; }}
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                return this.props.addFile(e.target.files);
              }
              return null;
            }}
            multiple
          />
        </ul>
      </div>
    );
    return ele;
  }
}

FileExplorerList.CLASS_NAME = {
  wrapper: 'file-explorer__list-wrapper',
  list: 'file-explorer__list',
  inputFile: 'file-explorer__list__input-file',
};

FileExplorerList.propTypes = {
  files: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
  addFile: PropTypes.func.isRequired,
};

export default FileExplorerList;
