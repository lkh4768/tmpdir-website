import React from 'react';
import C from '../../utils/constants';

const CLASS_NAME = {
  logo: 'title__logo',
};

const LOGO_ALT = 'logo';

function Logo() {
  return (
    <div className={CLASS_NAME.logo}>
      <img src={C.APP_INFO.logo} alt={LOGO_ALT} />
    </div>
  );
}

export default Logo;
