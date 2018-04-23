import React from 'react';
import C from '../../utils/constants';

const CLASS_NAME = {
  name: 'title__name',
};

function Name() {
  return (
    <div className={CLASS_NAME.name} href={C.APP_INFO.url}>
      {C.APP_INFO.name}
    </div>
  );
}

export default Name;
