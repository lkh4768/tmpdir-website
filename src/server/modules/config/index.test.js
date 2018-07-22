import getConfig from './index.js';

describe('Config', () => {
  it('getConfig, change NODE_ENV Success', () => {
    process.env.NODE_ENV = 'production';
    expect(getConfig().name).toEqual('tmpdir-prd');

    process.env.NODE_ENV = 'develop';
    expect(getConfig().name).toEqual('tmpdir-dev');

    process.env.NODE_ENV = 'test';
    expect(getConfig().name).toEqual('tmpdir-test');
  });
});
