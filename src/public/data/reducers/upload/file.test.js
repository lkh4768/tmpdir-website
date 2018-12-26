import deepFreeze from 'deep-freeze';
import Const from '_common/Const';
import file, { initState } from '_data/reducers/upload/file';

const state = {
  ...initState,
  list: T_FILES,
}

describe('file reducer', () => {
  it(`[file] initState Success`, () => {
    const result = file(undefined, {});
    expect(result).toEqual(initState);
  });
  it(`[file] ${Const.ACTION_TYPES.ADD_FILES} Success`, () => {
    const newFiles = T_NEW_FILES(10);
    const action = {
      type: Const.ACTION_TYPES.ADD_FILES,
      files: newFiles,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      list: [...T_FILES, ...newFiles]
    });
  });
  it(`[file] ${Const.ACTION_TYPES.DEL_FILE} Success`, () => {
    const action = {
      type: Const.ACTION_TYPES.DEL_FILE,
      filename: state.list[0].name,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      list: T_FILES.slice(1, T_FILES.length)
    });
  });
  it(`[file] ${Const.ACTION_TYPES.DEL_ALL_FILE} Success`, () => {
    const action = {
      type: Const.ACTION_TYPES.DEL_ALL_FILE,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      list: [],
    });
  });
  it(`[file] ${Const.ACTION_TYPES.UPLOAD_FILES_SUCCESS} Success`, () => {
    const payload = {
      regiId: 'regiId',
      expireTime: 0,
    };
    const action = {
      type: Const.ACTION_TYPES.UPLOAD_FILES_SUCCESS,
      payload,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      list: [],
      regiId: payload.regiId,
      expireTime: payload.expireTime,
      uploading: false,
    });
  });
  it(`[file] ${Const.ACTION_TYPES.UPLOAD_FILES_FAILURE} Success`, () => {
    const error = 'error';
    const action = {
      type: Const.ACTION_TYPES.UPLOAD_FILES_FAILURE,
      error,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      list: [],
      error,
      uploading: false,
    });
  });
  it(`[file] ${Const.ACTION_TYPES.UPLOAD_FILES_PENDING} Success`, () => {
    const totalSize = 0;
    const uploadedSize = 0;
    const action = {
      type: Const.ACTION_TYPES.UPLOAD_FILES_PENDING,
      totalSize,
      uploadedSize,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      uploading: true,
      totalSize,
      uploadedSize,
    });
  });
  it(`[file] ${Const.ACTION_TYPES.EMPTY_ERROR} Success`, () => {
    const action = {
      type: Const.ACTION_TYPES.EMPTY_ERROR,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      error: '',
    });
  });
  it(`[file] ${Const.ACTION_TYPES.EMPTY_REGI_ID} Success`, () => {
    const action = {
      type: Const.ACTION_TYPES.EMPTY_REGI_ID,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = file(state, action);
    expect(result).toEqual({
      ...state,
      regiId: '',
    });
  });
});
