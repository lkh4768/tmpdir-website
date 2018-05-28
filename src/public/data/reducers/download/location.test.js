import deepFreeze from 'deep-freeze';
import C from '_utils/constants';
import location, { initState } from '_data/reducers/download/location';

const state = {
  ...initState,
};

describe('location reducer', () => {
  it(`[location] initState Success`, () => {
    const result = location(undefined, {});
    expect(result).toEqual(state);
  });
  it(`[location] ${C.ACTION_TYPES.GET_FILE_INFO_SUCCESS} Success`, () => {
    const payload = 'payload';
    const action = {
      type: C.ACTION_TYPES.GET_HREF,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = location(state, action);
    expect(result).toEqual({
      ...state,
      href: window.location.href,
    });
  });
  it(`[location] ${C.ACTION_TYPES.GET_ORIGIN} Success`, () => {
    const action = {
      type: C.ACTION_TYPES.GET_ORIGIN,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = location(state, action);
    expect(result).toEqual({
      ...state,
      origin: window.location.origin,
    });
  });
});
