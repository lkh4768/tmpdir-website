import React from 'react';
import PropTypes from 'prop-types';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputFileElement = null;
  }
  showLocalFileExplorer() {
    if (this.props.is) {
      this.inputFileElement.click();
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
  is: PropTypes.bool.isRequired,
};

export default FileInput;
