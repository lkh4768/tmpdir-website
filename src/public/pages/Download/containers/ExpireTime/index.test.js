import React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import ExpireTimeContainer from './index';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../components/ExpireTime');
describe('<ExpireTime /> Container', () => {
  let wrapper;
  const store = {
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn(() => ({
      file: {
        expireTime: {
          data: 0,
          loading: false,
          error: '',
        },
        download: {
          error: '',
        },
      },
    })),
  };
  beforeAll(() => {
    wrapper = Enzyme.mount(
      <Provider store={store}>
        <ExpireTimeContainer />
      </Provider>
    );
  });
  afterEach(() => jest.resetAllMocks());
  it('[ExpireTime] loading Success', () => {
    expect(wrapper.length).toBe(1);
  });
});
