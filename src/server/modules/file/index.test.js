import fs from 'fs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Config from 'config';

import Utils from '_modules/common/utils';
import file from './index.js';

const mock = new MockAdapter(axios);
const uploadConfig = Config.get('tmpdir.service.upload');
const uploadServiceUrl = Utils.getUrl(uploadConfig.hostname, uploadConfig.protocol, uploadConfig.port);

mock.onPost(`${uploadServiceUrl}/api/v1/file`).reply((config) => {
  if (config.data._streams.length <= 0) {
    return [404, {}];
  }
  return [200, T_FILE_OBJ];
});

mock.onGet(`${Utils.getDownloadUrl()}/file-info/`).reply(400);
mock.onGet(`${Utils.getDownloadUrl()}/file-info/${T_FILE_ID}`).reply(200, T_FILE_OBJ);

mock.onGet(`${Utils.getDownloadUrl()}/file/`).reply(400);
mock.onGet(`${Utils.getDownloadUrl()}/file/${T_FILE_ID}`).reply(200, {}, {
  'content-disposition': 'attachment; filename="file"',
  'content-type': 'application/octet-stream',
});

describe('files', () => {
  const testFileInfos = T_GET_FILES();
  it('upload, default Success', async () => {
    const { err, code, data } = await file.upload(testFileInfos);
    expect(err).toBeUndefined();
    expect(code).toEqual(200);
    expect(data).toEqual(T_FILE_OBJ);
  });

  it('upload, empty files Failure', async () => {
    const { err, code, data } = await file.upload([]);
    expect(err.response.status).toEqual(404);
    expect(code).toBeUndefined();
    expect(data).toBeUndefined();
  });

  it('upload, null files Failure', async () => {
    const { err, code, data } = await file.upload(null);
    expect(typeof err === 'string').toBeTruthy();
    expect(code).toBeUndefined();
    expect(data).toBeUndefined();
  });

  it('getFileInfo, default Success', async () => {
    const { err, code, data } = await file.getFileInfo(T_FILE_ID);
    expect(err).toBeUndefined();
    expect(code).toEqual(200);
    expect(data.id).toEqual(T_FILE_ID);
  });

  it('getFileInfo, invalid fileId Failed', async () => {
    const { err, code, data } = await file.getFileInfo('');
    expect(err.response.status).toEqual(400);
    expect(code).toBeUndefined();
    expect(data).toBeUndefined();
  });

  it('download, default Success', async () => {
    const { err, code, headers } = await file.download(T_FILE_ID);
    expect(err).toBeUndefined();
    expect(code).toEqual(200);
    expect(headers).not.toBeUndefined();
    expect(headers).not.toBeNull();
  });

  it('download, invalid fileId Failed', async () => {
    const { err, code, data } = await file.download('');
    expect(err.response.status).toEqual(400);
    expect(code).toBeUndefined();
    expect(data).toBeUndefined();
  });

  afterAll(() => {
    testFileInfos.forEach((testFileInfo) => {
      fs.unlinkSync(testFileInfo.path);
    });
  });
});
