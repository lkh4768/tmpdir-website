import getConfig from './index.js';

describe('Config', () => {
  it('getConfig, NODE_ENV is production Success', () => {
    process.env.NODE_ENV = 'production';
    expect(getConfig().name)
      .toEqual('tmpdir-prd');
  });
  it('getConfig, NODE_ENV is develop Success', () => {
    process.env.NODE_ENV = 'develop';
    expect(getConfig().name)
      .toEqual('tmpdir-dev');
  });
});
