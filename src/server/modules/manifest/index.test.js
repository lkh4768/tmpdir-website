import manifest from './index.js'

describe('manifest', () => {
  it('getJsUri, uploadApp Success', () => {
    expect(manifest.getJsUri('uploadApp')).toEqual(T_MANIFEST['uploadApp.js']);
  });
  it('getJsUri, empty name Success', () => {
    expect(manifest.getJsUri('')).toEqual('');
  });
  it('getJsUri, invalid name Success', () => {
    expect(manifest.getJsUri('App')).toBeUndefined();
  });
  it('getCssUri, uploadApp Success', () => {
    expect(manifest.getCssUri('uploadApp')).toEqual(T_MANIFEST['uploadApp.css']);
  });
  it('getCssUri, empty name Success', () => {
    expect(manifest.getCssUri('')).toEqual('');
  });
  it('getCssUri, invalid name Success', () => {
    expect(manifest.getCssUri('App')).toBeUndefined();
  });
});
