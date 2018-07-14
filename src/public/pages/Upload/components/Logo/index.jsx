import React from 'react';
import Const from '_common/Const';

const CLASS_NAME = {
  logo: 'title__logo',
};

const LOGO_ALT = 'logo';

function Logo() {
  return (
    <div className={CLASS_NAME.logo}>
      <img src={Const.APP_INFO.logo} alt={LOGO_ALT} />
    </div>
  );
}

export default Logo;
