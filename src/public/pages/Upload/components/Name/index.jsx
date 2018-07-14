import React from 'react';

import Const from '_common/Const';

function Name() {
  return (
    <div href={Const.APP_INFO.url}>
      {Const.APP_INFO.name}
    </div>
  );
}

export default Name;
