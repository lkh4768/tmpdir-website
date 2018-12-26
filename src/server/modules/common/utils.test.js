import Utils from './utils.js'

describe('utils', () => {
  it('makeCssNode, Insert empty string Success', () => {
    expect(Utils.makeCssNode(''))
      .toEqual('<link type="text/css" rel="stylesheet" href="">');
  });
  it('makeCssNode, Insert null Success', () => {
    expect(Utils.makeCssNode(null))
      .toEqual('<link type="text/css" rel="stylesheet" href="null">');
  });
  it('makeCssNode, Success', () => {
    expect(Utils.makeCssNode(T_URI))
      .toEqual(`<link type="text/css" rel="stylesheet" href="${T_URI}">`);
  });
  it('makeJsNode, Insert empty string Success', () => {
    expect(Utils.makeJsNode(''))
      .toEqual('<script src=""></script>');
  });
  it('makeJsNode, Insert null Success', () => {
    expect(Utils.makeJsNode(null))
      .toEqual('<script src="null"></script>');
  });
  it('makeJsNode, Success', () => {
    expect(Utils.makeJsNode(T_URI))
      .toEqual(`<script src="${T_URI}"></script>`);
  });
  it('getUrl, insert hostname Success', () => {
    expect(Utils.getUrl(T_HOSTNAME))
      .toEqual(`http://${T_HOSTNAME}`);
  });
  it('getUrl, insert hostname, protocol Success', () => {
    expect(Utils.getUrl(T_HOSTNAME, T_PROTOCOL))
      .toEqual(`${T_PROTOCOL}://${T_HOSTNAME}`);
  });
  it('getUrl, insert hostname, protocol, port Success', () => {
    expect(Utils.getUrl(T_HOSTNAME, T_PROTOCOL, T_PORT))
      .toEqual(`${T_PROTOCOL}://${T_HOSTNAME}:${T_PORT}`);
  });
  it('emptyFunc, default Success', () => {
    expect(Utils.emptyFunc(T_STR))
      .toEqual(T_STR);
  });
  it('emptyFunc, null Success', () => {
    expect(Utils.emptyFunc(null))
      .toBeNull();
  });
  it(`getLangInAcceptLangHeader, accept-languag: ${T_ACCEPT_LANG.TYPE.ES} Success`, () => {
    expect(Utils.getLangInAcceptLangHeader(T_ACCEPT_LANG.TYPE.ES))
      .toEqual(T_ACCEPT_LANG.TYPE.ES);
  });
  it(`getLangInAcceptLangHeader, accept-languag: ${T_ACCEPT_LANG.TYPE.EN_US} Success`, () => {
    expect(Utils.getLangInAcceptLangHeader(T_ACCEPT_LANG.TYPE.EN_US))
      .toEqual(T_ACCEPT_LANG.TYPE.EN);
    expect(Utils.getLangInAcceptLangHeader(T_ACCEPT_LANG.TYPE.EN_US))
      .not.toEqual(T_ACCEPT_LANG.TYPE.EN_US);
  });
  it([
    'getLangInAcceptLangHeader, accept-languag: ',
    T_MULTI_ACCEPT_LANGS([T_ACCEPT_LANG.TYPE.EN_US, T_ACCEPT_LANG.TYPE.EN, T_ACCEPT_LANG.TYPE.ES]),
    ' Success'
  ].join(''), () => {
    expect(Utils.getLangInAcceptLangHeader(T_ACCEPT_LANG.TYPE.EN_US))
      .toEqual(T_ACCEPT_LANG.TYPE.EN);
    expect(Utils.getLangInAcceptLangHeader(T_ACCEPT_LANG.TYPE.EN_US))
      .not.toEqual(T_ACCEPT_LANG.TYPE.EN_US);
  });
  it(`stringifyState, default Success`, () => {
    expect(Utils.stringifyState(global.T_OBJECT)).toEqual(JSON.stringify(global.T_OBJECT));
  });
  it(`stringifyState, include "<" string Success`, () => {
    expect(Utils.stringifyState(T_INCLUE_HTML_OBJECT)).toEqual(expect.not.stringMatching('/</g'));
    expect(Utils.stringifyState(T_INCLUE_HTML_OBJECT)).toEqual(expect.stringContaining('\\x3c'));
  });
  it(`getDownloadUrl, default Success`, () => {
    expect(Utils.getDownloadUrl()).not.toBeFalsy();
    expect(typeof Utils.getDownloadUrl() === 'string').toEqual(true);
  });
  it(`getUploadUrl, default Success`, () => {
    expect(Utils.getUploadUrl()).not.toBeFalsy();
    expect(typeof Utils.getDownloadUrl() === 'string').toEqual(true);
  });
});
