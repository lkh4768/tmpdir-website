import Utils from './utils.js'
describe('utils', () => {
  it('[utils] makeCssNode Success', () => {
    const uri = 'a/b';
    expect(Utils.makeCssNode('uri'))
      .toEqual(`<link type="text/css" rel="stylesheet" href="${uri}">`);
  });
});
