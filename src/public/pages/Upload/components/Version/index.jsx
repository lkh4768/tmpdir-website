import React from 'react';
import Const from '_common/Const';

const CLASS_NAME = {
  version: 'title__version',
};

function Version() {
  return (
    <div className={CLASS_NAME.version}>
      {Const.APP_INFO.version}
    </div>
  );
}

export default Version;
