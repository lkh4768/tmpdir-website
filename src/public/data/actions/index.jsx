import Contants from '../../utils/constants';

const addFile = targetFile => ({
  type: Contants.ACTION_TYPES.ADD_FILE,
  file: targetFile,
});

const showLocalFileExplorer = is => ({
  type: Contants.ACTION_TYPES.SHOW_LOCAL_FILE_EXPLORER,
  show: is,
});

export default {
  addFile,
  showLocalFileExplorer,
};
