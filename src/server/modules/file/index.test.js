import fs from 'fs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Utils from '_modules/common/utils';
import getConfig from '_modules/config';
import file from './index.js';

const Config = getConfig();
const mock = new MockAdapter(axios);
const uploadConfig = Config.tmpdir.service.upload;
const uploadServiceUrl = Utils.getUrl(uploadConfig.hostname, uploadConfig.protocol, uploadConfig.port);

mock.onPost(uploadServiceUrl).reply((config) => {
  if (config.data._streams.length <= 0) {
    return [404, {}];
  }
  return [
    200,
    {
      id: '4b676578-9d17-416a-913d-3f9077d9d5cc',
      submissionTime: 1533370329964,
      expireTime: 1533456729964
    }
  ];
});

describe('files', () => {
  const testFileInfos = T_GET_FILES();
  it('upload, default Success', async () => {
    const { err, code, data } = await file.upload(testFileInfos);
    expect(err).toBeUndefined();
    expect(code).toEqual(200);
    expect(data).toEqual({
      id: '4b676578-9d17-416a-913d-3f9077d9d5cc',
      submissionTime: 1533370329964,
      expireTime: 1533456729964
    });
  });

  it('upload, empty files Failure', async () => {
    const { err, code, data } = await file.upload([]);
    expect(err).not.toBeNull();
    expect(err.response.status).toEqual(404);
  });

  afterAll(() => {
    testFileInfos.forEach((testFileInfo) => {
      fs.unlinkSync(testFileInfo.path);
    });
  });
});
