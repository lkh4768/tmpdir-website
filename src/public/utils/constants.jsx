import React from 'react';
import { FaCopyright } from 'react-icons/lib/fa';
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
    UPLOAD_FILES_PENDING: 'UPLOAD_FILES_PENDING',
    UPLOAD_FILES_FAILURE: 'UPLOAD_FILES_FAILURE',
    UPLOAD_FILES_SUCCESS: 'UPLOAD_FILES_SUCCESS',
    EMPTY_ERROR: 'EMPTY_ERROR',
    EMPTY_REGI_ID: 'EMPTY_REGI_ID',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    TOGGLE_UPLOADED_PANEL: 'TOGGLE_UPLOADED_PANEL',
    TOGGLE_TOOLTIP: 'TOGGLE_TOOLTIP',
    GET_FILE_INFO_FAILURE: 'GET_FILE_INFO_FAILURE',
    GET_FILE_INFO_PENDING: 'GET_FILE_INFO_PENDING',
    GET_FILE_INFO_SUCCESS: 'GET_FILE_INFO_SUCCESS',
    DOWNLOAD_FILE_FAILURE: 'DOWNLOAD_FILE_FAILURE',
    GET_HREF: 'GET_HREF',
    GET_ORIGIN: 'GET_ORIGIN',
  },
  FILE: {
    SIZE: {
      MAX: 1000 * 1000 * 1000,
      WARTERMARK: 1000,
      UNITS: ['B', 'KB', 'MB', 'GB'],
    },
    KEEPING_PERIOD: 1,
  },
  UPLOADED_FILE: {
    SHARE_ICON_SIZE: 50,
  },
  API_URL: {
    FILE: '/api/v1/file/',
    FILE_INFO: '/api/v1/file/info/',
  },
};

export default C;
