import React from 'react';
import C from '_utils/constants';

const CLASS_NAME = {
  uploadGuide: 'file-explorer__upload-guide',
};

function UploadGuide() {
  return (
    <li className={CLASS_NAME.uploadGuide}>
      {C.TEXT.GUIDE}
    </li>
  );
}

export default UploadGuide;
