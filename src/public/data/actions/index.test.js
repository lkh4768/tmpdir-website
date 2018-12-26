import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';
import Const from '_common/Const';
import { initState } from '_data/reducers/upload/file';
import actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it(`[reqUploadFiles] ${Const.ACTION_TYPES.UPLOAD_FILES_PENDING}, ${Const.ACTION_TYPES.UPLOAD_FILES_SUCCESS} Success`, () => {
    const axiosMock = new axiosMockAdapter(axios);
    const res = {
      id: '1',
      expireTime: 1,
    };
    axiosMock.onPost(Const.API_URL.FILE).reply(200, res);
    const expectedActions = [
      { type: Const.ACTION_TYPES.UPLOAD_FILES_PENDING, totalSize: 4, uploadedSize: 0 },
      { type: Const.ACTION_TYPES.UPLOAD_FILES_SUCCESS, payload: { regiId: '1', expireTime: 1 } }
    ];
    const store = mockStore(initState);
    return store.dispatch(actions.reqUploadFiles(T_FILES)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
  it(`[reqUploadFiles] ${Const.ACTION_TYPES.UPLOAD_FILES_PENDING}, ${Const.ACTION_TYPES.UPLOAD_FILES_FAILURE} Success`, () => {
    const axiosMock = new axiosMockAdapter(axios);
    axiosMock.onPost(Const.API_URL.FILE).reply(500);
    const expectedActions = [
      { type: Const.ACTION_TYPES.UPLOAD_FILES_PENDING, totalSize: 4, uploadedSize: 0 },
      { type: Const.ACTION_TYPES.UPLOAD_FILES_FAILURE, error: 500 }
    ];
    const store = mockStore(initState);
    return store.dispatch(actions.reqUploadFiles(T_FILES)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
  it(`[reqFileInfo] ${Const.ACTION_TYPES.GET_FILE_INFO_PENDING}, ${Const.ACTION_TYPES.GET_FILE_INFO_SUCCESS} Success`, () => {
    const regiId = '1';
    const axiosMock = new axiosMockAdapter(axios);
    const res = {
      expireTime: 1,
    };
    axiosMock.onGet([Const.API_URL.FILE_INFO, regiId].join('')).reply(200, res);
    const expectedActions = [
      { type: Const.ACTION_TYPES.GET_FILE_INFO_PENDING },
      { type: Const.ACTION_TYPES.GET_FILE_INFO_SUCCESS, payload: 1 },
    ];
    const store = mockStore(initState);
    return store.dispatch(actions.reqFileInfo(regiId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
  it(`[reqFileInfo] ${Const.ACTION_TYPES.GET_FILE_INFO_PENDING}, ${Const.ACTION_TYPES.GET_FILE_INFO_FAILURE} Success`, () => {
    const regiId = '1';
    const axiosMock = new axiosMockAdapter(axios);
    axiosMock.onGet([Const.API_URL.FILE_INFO, regiId].join('')).reply(500);
    const expectedActions = [
      { type: Const.ACTION_TYPES.GET_FILE_INFO_PENDING },
      { type: Const.ACTION_TYPES.GET_FILE_INFO_FAILURE, error: 500 },
    ];
    const store = mockStore(initState);
    return store.dispatch(actions.reqFileInfo(regiId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
  it(`[reqDownloadFile] ${Const.ACTION_TYPES.D} Success`, () => {
    const regiId = '1';
    const axiosMock = new axiosMockAdapter(axios);
    axiosMock.onGet([Const.API_URL.FILE, regiId].join(''), { responseType: 'blob' }).reply(500);
    const expectedActions = [
      { type: Const.ACTION_TYPES.DOWNLOAD_FILE_FAILURE, error: 500 },
    ];
    const store = mockStore(initState);
    return store.dispatch(actions.reqDownloadFile(regiId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
});
