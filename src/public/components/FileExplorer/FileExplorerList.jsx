import React from 'react';
import PropTypes from 'prop-types';
import File from '../../containers/FileExplorer/File';
import UploadGuide from './UploadGuide';
import F from '../../utils/func';

const CLASS_NAME = {
  wrapper: 'file-explorer__list-wrapper',
  list: 'file-explorer__list-wrapper__contents',
  inputFile: 'file-explorer__list-wrapper__input-file',
};

class FileExplorerList extends React.Component {
  constructor(props) {
    super(props);
    this.inputFileElement = null;
    this.showLocalFileExplorer = this.showLocalFileExplorer.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  makeFiles() {
    if (this.props.files && this.props.files.length > 0) {
      return this.props.files.map(file =>
        <File key={file.name} name={file.name} size={file.size} />);
    }
    return [<UploadGuide key="uploadGuide" />];
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
    return (
      <div
        role="button"
        tabIndex="0"
        className={CLASS_NAME.wrapper}
        onClick={this.showLocalFileExplorer}
        onDragEnter={F.removeEvent}
        onDragOver={F.removeEvent}
        onDragLeave={F.removeEvent}
        onDrop={this.dropHandler}
        onKeyPress={F.emptyFunc}
      >
        <ul className={CLASS_NAME.list}>
          { this.makeFiles() }
        </ul>
        <input
          className={CLASS_NAME.inputFile}
          ref={(component) => { this.inputFileElement = component; }}
          type="file"
          onChange={this.inputChangeHandler}
          multiple
        />
      </div>
    );
  }
}


FileExplorerList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
  addFile: PropTypes.func.isRequired,
};

export default FileExplorerList;
