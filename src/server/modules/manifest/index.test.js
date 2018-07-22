import manifest from './index.js'

describe('manifest', () => {
  it('getJsUri, default Success', () => {
    expect(manifest.getJsUri('downloadApp')).toEqual('/testDownloadApp.min.js');
  });
  it('getJsUri, empty name Success', () => {
    expect(manifest.getJsUri('')).toEqual('');
  });
  it('getJsUri, invalid name Success', () => {
    expect(manifest.getJsUri('upload')).toBeUndefined();
  });
  it('getCssUri, default Success', () => {
    expect(manifest.getCssUri('downloadApp')).toEqual('/testDownloadApp.min.css');
  });
  it('getCssUri, empty name Success', () => {
    expect(manifest.getCssUri('')).toEqual('');
  });
  it('getCssUri, invalid name Success', () => {
    expect(manifest.getCssUri('upload')).toBeUndefined();
  });
});
