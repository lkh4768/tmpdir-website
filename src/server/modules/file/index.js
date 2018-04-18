import fs from 'fs';
import Multiparty from 'multiparty';

const uploadFiles = (req, callback) => {
  const form = new Multiparty.Form();

  form.on('part', (part) => {
    if (!part.filename) {
      part.resume();
    } else {
      const { filename } = part;
      const filepath = ['/tmp/', filename].join('');
      const writeStream = fs.createWriteStream(filepath);
      console.log(`Write Streaming file(${filepath})`);

      writeStream.filename = filename;
      part.pipe(writeStream);
      part.on('data', chunk => console.log(`${filename} read ${chunk.length} bytes`));

      part.on('end', () => {
        console.log(`${filename} Part read complete`);
        writeStream.end();
      });
    }
  });

  form.on('close', () => callback(null));
  form.on('error', error => callback(error));
  form.on('progress', (byteRead, byteExpected) => {
    console.log(`Reading total ${byteRead}/${byteExpected}`);
  });
  form.parse(req);
};

export default {
  uploadFiles,
};
