import React from 'react';
import C from '_utils/constants';

const CLASS_NAME = {
  version: 'title__version',
};

function Version() {
  return (
    <div className={CLASS_NAME.version}>
      {C.APP_INFO.version}
    </div>
  );
}

export default Version;
