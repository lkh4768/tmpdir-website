import React from 'react';
import PropTypes from 'prop-types';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputFileElement = null;
  }
  componentDidMount() {
    this.subscribeIsShowLocalFileExplorer();
  }
  subscribeIsShowLocalFileExplorer() {
    if (this.props.isShowLocalFileExplorer) {
      this.inputFileElement.click();
      this.props.hideLocalFileExplorer();
    }
  }
  render() {
    const ele = (
      <input
        className={FileInput.inputFile}
        ref={(component) => { this.inputFileElement = component; }}
        type="file"
        onChange={(e) => { this.props.addFile(e.target.files[0]); }}
      />
    );
    return ele;
  }
}

FileInput.className = 'input-file';

FileInput.propTypes = {
  addFile: PropTypes.func.isRequired,
  isShowLocalFileExplorer: PropTypes.bool.isRequired,
  hideLocalFileExplorer: PropTypes.func.isRequired,
};

export default FileInput;
