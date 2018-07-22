import devConfig from '_config/config.dev';
import prdConfig from '_config/config.prd';
import testConfig from '_config/config.test';

const getConfig = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return prdConfig;
    case 'test':
      return testConfig;
    default:
      return devConfig;
  }
};

export default getConfig;
