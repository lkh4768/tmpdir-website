import React from 'react';
import PropTypes from 'prop-types';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputFileElement = null;
    this.subscribeIsShowLocalFileExplorer();
  }
  subscribeIsShowLocalFileExplorer() {
    store.subscribe(() => {
      console.log(store.getState());
    });
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
};

export default FileInput;
