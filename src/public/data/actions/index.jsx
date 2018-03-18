import Contants from '../../utils/constants';

const addFile = targetFile => ({
  type: Contants.ACTION_TYPE.ADD_FILE,
  file: targetFile,
});

export default addFile;
