import ExpireTime from './index';
import locale from '_app/Download/locale';

describe('<ExpireTime /> component', () => {
  const lang = 'ko'
  const messages = locale[lang] || locale.en;
  it('[render] loading Success', () => {
    const wrapper = T_MOUNT_WITH_INTL(
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
  it('[render] error Success', () => {
    const wrapper = T_MOUNT_WITH_INTL(
      <ExpireTime
        expireTime={{ data: 0, loading: false, error: '' }}
        download={{ error: 'error' }}
        reqFileInfo={jest.fn()}
        reqDownloadFile={jest.fn()}
      />,
      lang,
      messages
    );
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').text()).toBe('error');
  });
  it('[render] default Success', () => {
    const curDate = new Date();
    const wrapper = T_MOUNT_WITH_INTL(
      <ExpireTime
        expireTime={{ data: curDate.getTime(), loading: false, error: '' }}
        download={{ error: '' }}
        reqFileInfo={jest.fn()}
        reqDownloadFile={jest.fn()}
      />,
      lang,
      messages
    );
    expect(wrapper.text()).toContain(wrapper.prop('intl').formatDate(curDate));
    expect(wrapper.text()).toContain(wrapper.prop('intl').formatTime(curDate));
  });
  it('[componentDidMount] call reqFileInfo Success', () => {
    const wrapper = T_MOUNT_WITH_INTL(
      <ExpireTime
        expireTime={{ data: 0, loading: true, error: '' }}
        download={{ error: '' }}
        reqFileInfo={jest.fn()}
        reqDownloadFile={jest.fn()}
      />,
      lang,
      messages
    );
    expect(wrapper.prop('reqFileInfo')).toHaveBeenCalled();
  });
  it('[componentDidMount] call reqDownloadFile Success', () => {
    const wrapper = T_MOUNT_WITH_INTL(
      <ExpireTime
        expireTime={{ data: 0, loading: true, error: '' }}
        download={{ error: '' }}
        reqFileInfo={jest.fn()}
        reqDownloadFile={jest.fn()}
      />,
      lang,
      messages
    );
    expect(wrapper.prop('reqDownloadFile')).toHaveBeenCalled();
  });
});
