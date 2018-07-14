import React from 'react';
import Const from '_common/Const';

const CLASS_NAME = {
  name: 'title__name',
};

function Name() {
  return (
    <div className={CLASS_NAME.name} href={Const.APP_INFO.url}>
      {Const.APP_INFO.name}
    </div>
  );
}

export default Name;
