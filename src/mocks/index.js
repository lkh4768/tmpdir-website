const files = [
  new File(['1'], 'file1'),
  new File(['2'], 'file2'),
  new File(['3'], 'file3'),
  new File(['4'], 'file4'),
];

const newFiles = (count) => {
  const filenamePrefix = 'newfile';
  let nFiles = [];
  for (let i = 0; i < count; i++) {
    nFiles.push(
      new File([[filenamePrefix, i].join('')], [filenamePrefix, i].join(''))
    );
  }
  return nFiles;
};

export default {
  files,
  newFiles,
};
