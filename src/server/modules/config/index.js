import devConfig from '../../config/config.dev';
import prdConfig from '../../config/config.prd';

const Config = () => {
  switch (process.env.NODE_ENV) {
    case 'prd':
      return prdConfig;
    default:
      return devConfig;
  }
};

export default Config;
