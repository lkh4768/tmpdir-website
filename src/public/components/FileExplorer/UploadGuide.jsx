import React from 'react';
import C from '../../utils/constants';

const CLASS_NAME = {
  uploadGuide: 'file-explorer__upload-guide',
};

function UploadGuide() {
  return (
    <li className={CLASS_NAME.uploadGuide}>
      {C.GUIDE_TEXT}
    </li>
  );
}

export default UploadGuide;
