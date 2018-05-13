import React from 'react';
import FaCopyright from 'react-icons/lib/fa/copyright';
import FooterLabelEntity from '_entities/Label';
import FooterLinkEntity from '_entities/Link';
import ShareEntity from '_entities/Share';
import AppInfoEntity from '_entities/AppInfo';
import LogoImg from '_static/images/logo_72w.png';

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

const C = {
  TMPDIR_URL: tmpdir.url,
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
  ACTION_TYPES: {
    ADD_FILES: 'ADD_FILES',
    DEL_FILE: 'DEL_FILE',
    DEL_ALL_FILE: 'DEL_ALL_FILE',
    UPLOAD_FILES: 'UPLOAD_FILES',
    EMPTY_ERROR: 'EMPTY_ERROR',
    EMPTY_REGI_ID: 'EMPTY_REGI_ID',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    TOGGLE_UPLOADED_PANEL: 'TOGGLE_UPLOADED_PANEL',
  },
  FILE: {
    SIZE: {
      MAX: 1000 * 1000 * 1000,
      WARTERMARK: 1000,
      UNITS: ['B', 'KB', 'MB', 'GB'],
    },
  },
  TEXT: {
    GUIDE: '파일을 드랍하거나 클릭하세요',
    ALL_DEL_HEAD: '파일 모두 삭제',
    ALL_DEL_BODY: '정말로 모두 삭제하시겠습니까?',
    YES: '예',
    NO: '아니오',
  },
  UPLOADED_FILE: {
    SHARE_ICON_SIZE: 50,
  },
};

export default C;
