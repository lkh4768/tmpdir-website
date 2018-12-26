import React from 'react';

import Const from '_common/Const';

const LOGO_ALT = 'logo';

function Logo() {
  return (
    <div>
      <img src={Const.APP_INFO.logo} alt={LOGO_ALT} />
    </div>
  );
}

export default Logo;
