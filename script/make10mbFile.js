const fs = require('fs');
const path = require('path');

const mbFilepath = path.resolve(__dirname, '../data/test/mb.txt');
const tenmbFilepath = path.resolve(__dirname, `../data/test/10mb-${(new Date()).getTime()}.txt`);

let mbFileRS = fs.createReadStream(mbFilepath);
let tenmbFileWS = fs.createWriteStream(tenmbFilepath);
mbFileRS.on('data', (data) => {
  for(let i = 0; i < 10; i++) {
    tenmbFileWS.write(data);
  }
});

mbFileRS.on('end', (data) => {
  tenmbFileWS.close();
});
