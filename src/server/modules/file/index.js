import Multiparty from 'multiparty';
import { post } from 'axios';
import FormData from 'form-data';

import getConfig from '_modules/config';
import Utils from '_modules/utils';

const Config = getConfig();

const uploadFiles = (req, callback) => {
  const form = new Multiparty.Form({ maxFilesSize: Config.tmpdir.file.maxSize });
  const formData = new FormData();
  formData.maxDataSize = Infinity;
  let count = 0;

  form.on('part', (part) => {
    if (!part.filename) {
      part.resume();
    } else {
      formData.append(
        ['file', count].join(''),
        part,
        {
          filename: part.filename,
          contentType: part['content-type'],
        },
      );
      count += 1;
      part.resume();
    }
  });

  form.on('close', () => {
    const uploadConfig = Config.tmpdir.service.upload;
    const uploadUrl = Utils.getUrl(uploadConfig.hostname, uploadConfig.protocol, uploadConfig.port);
    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
      },
    };
    post(uploadUrl, formData, config)
      .then(res => callback(null, { code: res.status, data: res.data }))
      .catch(err => callback(err));
  });
  form.on('error', err => callback(err));
  form.parse(req);
};

export default {
  uploadFiles,
};
