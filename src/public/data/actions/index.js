import Var from '../../utils/variables';

const addFile = targetFile => ({
  type: Var.ACTION_TYPE.ADD_FILE,
  file: targetFile,
});

export default addFile;
