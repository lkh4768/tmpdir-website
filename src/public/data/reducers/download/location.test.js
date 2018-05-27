import C from '_utils/constants';
import location, { initState } from '_data/reducers/download/location';

const state = {
  ...initState,
};

describe('location reducer', () => {
  it(`${C.ACTION_TYPES.GET_FILE_INFO_SUCCESS} Success`, () => {
    const payload = 'payload';
    const action = {
      type: C.ACTION_TYPES.GET_HREF,
    };
    const result = location(state, action);
    expect(result).toEqual({
      ...state,
      href: window.location.href,
    });
  });
  it(`${C.ACTION_TYPES.GET_ORIGIN} Success`, () => {
    const action = {
      type: C.ACTION_TYPES.GET_ORIGIN,
    };
    const result = location(state, action);
    expect(result).toEqual({
      ...state,
      origin: window.location.origin,
    });
  });
});
