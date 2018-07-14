import deepFreeze from 'deep-freeze';
import Const from '_common/Const';
import file, { initState } from '_data/reducers/download/file';

const state = {
  ...initState,
};

describe('file reducer', () => {
  it(`[file], initState Success`, () => {
    const result = file(undefined, {});
    expect(result).toEqual(state);
  });
  it(`[file] ${Const.ACTION_TYPES.GET_FILE_INFO_SUCCESS} Success`, () => {
    const payload = 'payload';
    const action = {
      type: Const.ACTION_TYPES.GET_FILE_INFO_SUCCESS,
      payload,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      expireTime: {
        ...state.expireTime,
        data: payload,
        loading: false,
      },
    });
  });
  it(`[file] ${Const.ACTION_TYPES.GET_FILE_INFO_PENDING} Success`, () => {
    const action = {
      type: Const.ACTION_TYPES.GET_FILE_INFO_PENDING,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      expireTime: {
        ...state.expireTime,
        loading: true,
      },
    });
  });
  it(`[file] ${Const.ACTION_TYPES.GET_FILE_INFO_FAILURE} Success`, () => {
    const error = 'error';
    const action = {
      type: Const.ACTION_TYPES.GET_FILE_INFO_FAILURE,
      error,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      expireTime: {
        ...state.expireTime,
        error,
        loading: false,
      },
    });
  });
  it(`[file] ${Const.ACTION_TYPES.DOWNLOAD_FILE_FAILURE} Success`, () => {
    const error = 'error';
    const action = {
      type: Const.ACTION_TYPES.DOWNLOAD_FILE_FAILURE,
      error,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      download: {
        ...state.expireTime,
        error,
      },
    });
  });
});
