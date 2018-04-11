import React from 'react';
import C from '../../utils/constants';

class UploadGuide extends React.Component {
  render() {
    const ele = (
      <li className={UploadGuide.CLASS_NAME.uploadGuide}>
        {C.GUIDE_TEXT}
      </li>
    );
    return ele;
  }
}

UploadGuide.CLASS_NAME = {
  uploadGuide: 'file-explorer__upload-guide',
};

export default UploadGuide;
