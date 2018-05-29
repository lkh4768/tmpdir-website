import ExpireTime from './index';
import locale from '_app/Download/locale';

describe('<ExpireTime /> component', () => {
  const lang = 'ko'
  const messages = locale[lang] || locale.en;
  it('redners default star', () => {
    const wrapper = T_SHALLOW_WITH_INTL(
      <ExpireTime
        expireTime={{ data: 0, loading: true, error: '' }}
        download={{ error: '' }}
        reqFileInfo={jest.fn()}
        reqDownloadFile={jest.fn()}
      />,
      lang,
      messages
    );
    expect(wrapper.find('div').length).toBe(1);
  });
});
