import React from 'react';
import PropTypes from 'prop-types';
import File from '../../containers/FileExplorer/File';
import F from '../../utils/func';

class FileExplorerList extends React.Component {
  constructor(props) {
    super(props);
    this.inputFileElement = null;
    this.showLocalFileExplorer = this.showLocalFileExplorer.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
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
  dropHandler(e) {
    F.removeEvent(e);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.addFile(e.dataTransfer.files);
    }
  }
  inputChangeHandler(e) {
    if (e.target.files && e.target.files.length > 0) {
      this.props.addFile(e.target.files);
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
        onDragEnter={F.removeEvent}
        onDragOver={F.removeEvent}
        onDragLeave={F.removeEvent}
        onDrop={this.dropHandler}
        onKeyPress={F.emptyFunc}
      >
        <ul className={FileExplorerList.CLASS_NAME.list}>
          { files }
          <input
            className={FileExplorerList.CLASS_NAME.inputFile}
            ref={(component) => { this.inputFileElement = component; }}
            type="file"
            onChange={this.inputChangeHandler}
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
