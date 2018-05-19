import devConfig from '_config/config.dev';
import prdConfig from '_config/config.prd';

const getConfig = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return prdConfig;
    default:
      return devConfig;
  }
};

export default getConfig;
