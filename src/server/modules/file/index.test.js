import file from './index.js'

{
  "fieldName": "file0",
  "originalFilename": "jmx_fileupload.png",
  "path": "/tmp/84kG-0xF5ojiXnOMLdSqZrk3.png",
  "size": 86310,
  "name": "jmx_fileupload.png",
  "type": "image/png"
}

describe('manifest', () => {
  it('upload, default Success', () => {
    const { err, code, data } = file.upload(T_GET_FILES());
    expect(err).toBeUndefined();
    expect(code).toEqual(200);
    expect(data).toEqual({
      "id": "4b676578-9d17-416a-913d-3f9077d9d5cc",
      "submissionTime": 1533370329964,
      "expireTime": 1533456729964
    });
  });
});
