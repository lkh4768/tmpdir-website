import file from './index.js'
import fs from 'fs';

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
  afterAll(() => {
    testFileInfos.forEach((testFileInfo) => {
      fs.unlinkSync(testFileInfo.path);
    });
  });
});
