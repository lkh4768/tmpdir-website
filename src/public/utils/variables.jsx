import React from 'react';
import FooterLabelEntity from '../entities/Label';
import FooterLinkEntity from '../entities/Link';
import ShareEntity from '../entities/Share';
import AppInfoEntity from '../entities/AppInfo';
import FileEntity from '../entities/File';

import LogoImg from '../static/images/logo_72w.png';

import FaCopyright from '../../../node_modules/react-icons/lib/fa/copyright';

const tmpdir = {
  name: 'tmpdir',
  url: 'https://tmpdir.sw-warehouse.xyz',
  logo: LogoImg,
  version: 'Beta',
};

const owner = {
  email: 'lkh5510@gmail.com',
  blog: 'http://sw-warehouse.xyz',
};

const Variables = {
  APP_INFO: new AppInfoEntity(tmpdir.name, tmpdir.url, tmpdir.logo, tmpdir.version),
  SHARE_LIST: [
    new ShareEntity(
      ShareEntity.VENDER.facebook,
      tmpdir.name,
      tmpdir.url,
    ),
    new ShareEntity(
      ShareEntity.VENDER.twitter,
      tmpdir.url,
      tmpdir.name,
    ),
    new ShareEntity(
      ShareEntity.VENDER.googleplus,
      tmpdir.url,
      tmpdir.name,
    ),
    new ShareEntity(
      ShareEntity.VENDER.whatsapp,
      tmpdir.url,
      tmpdir.name,
    ),
    new ShareEntity(
      ShareEntity.VENDER.reddit,
      tmpdir.url,
      tmpdir.name,
    ),
  ],
  LABELS: [
    new FooterLabelEntity('2017 Kihyeon Lee.', <FaCopyright size="16" />),
  ],
  LINKS: [
    new FooterLinkEntity('Mail: ', owner.email, ['mailto:', owner.email].join('')),
    new FooterLinkEntity('Blog: ', owner.blog, owner.blog),
  ],
  FACK_FILES: [
    new FileEntity('path/to/one', 1),
    new FileEntity('path/to/two', 2),
  ],
};

export default Variables;
