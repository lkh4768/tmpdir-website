import React from 'react';
import PropTypes from 'prop-types';
import Utils from '_common/Utils';
import FileContainer from '../../containers/File';
import UploadGuide from '../UploadGuide';

const CLASS_NAME = {
  wrapper: 'file_explorer__list_wrapper',
  list: 'file_explorer__list_wrapper__contents',
  inputFile: 'file_explorer__list_wrapper__input_file',
};

const propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })).isRequired,
  addFile: PropTypes.func.isRequired,
};

class FileExplorerList extends React.Component {
  constructor(props) {
    super(props);
    this.inputFileElement = null;
    this.showLocalFileExplorer = this.showLocalFileExplorer.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  componentDidUpdate() {
    if (this.props.files.length === 0 && this.inputFileElement) {
      this.inputFileElement.value = null;
    }
  }
  makeFiles() {
    if (this.props.files && this.props.files.length > 0) {
      return this.props.files.map(file =>
        <FileContainer key={file.name} name={file.name} size={file.size} />);
    }
    return [<UploadGuide key="uploadGuide" />];
  }
  showLocalFileExplorer() {
    if (this.inputFileElement) {
      this.inputFileElement.click();
    }
  }
  dropHandler(e) {
    Utils.removeEvent(e);
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
        onDragEnter={Utils.removeEvent}
        onDragOver={Utils.removeEvent}
        onDragLeave={Utils.removeEvent}
        onDrop={this.dropHandler}
        onKeyPress={Utils.emptyFunc}
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

FileExplorerList.propTypes = propTypes;

export default FileExplorerList;
