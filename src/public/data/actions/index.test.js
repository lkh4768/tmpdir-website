import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';
import C from '_utils/constants';
import { initState } from '_data/reducers/upload/file';
import Mock from '_mocks';
import actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it(`reqUploadFiles, ${C.ACTION_TYPES.UPLOAD_FILES_PENDING} ${C.ACTION_TYPES.UPLOAD_FILES_SUCCESS}`, () => {
    const axiosMock = new axiosMockAdapter(axios);
    const res = {
      id: '1',
      expireTime: 1,
    };
    axiosMock.onPost(C.API_URL.FILE).reply(200, res);
    const expectedActions = [
      { type: C.ACTION_TYPES.UPLOAD_FILES_PENDING, totalSize: 4, uploadedSize: 0 },
      { type: C.ACTION_TYPES.UPLOAD_FILES_SUCCESS, payload: { regiId: '1', expireTime: 1 } }
    ];
    const store = mockStore(initState);
    return store.dispatch(actions.reqUploadFiles(Mock.files)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
  it(`reqFileInfo, ${C.ACTION_TYPES.GET_FILE_INFO_PENDING} ${C.ACTION_TYPES.GET_FILE_INFO_SUCCESS}`, () => {
    const regiId = '1';
    const axiosMock = new axiosMockAdapter(axios);
    const res = {
      expireTime: 1,
    };
    axiosMock.onGet([C.API_URL.FILE_INFO, regiId].join('')).reply(200, res);
    const expectedActions = [
      { type: C.ACTION_TYPES.GET_FILE_INFO_PENDING },
      { type: C.ACTION_TYPES.GET_FILE_INFO_SUCCESS, payload: 1 },
    ];
    const store = mockStore(initState);
    return store.dispatch(actions.reqFileInfo(regiId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
});
