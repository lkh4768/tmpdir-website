import { post } from 'axios';

import C from '_utils/constants';

const addFile = _files => ({
  type: C.ACTION_TYPES.ADD_FILES,
  files: _files,
});

const delFile = _filename => ({
  type: C.ACTION_TYPES.DEL_FILE,
  filename: _filename,
});

const delAllFile = () => ({
  type: C.ACTION_TYPES.DEL_ALL_FILE,
});

const uploadFiles = (uploading = true, data = '', error = '') => ({
  type: C.ACTION_TYPES.UPLOAD_FILES,
  data,
  error,
  uploading,
});

const emptyError = () => ({
  type: C.ACTION_TYPES.EMPTY_ERROR,
});

const toggleModal = () => ({
  type: C.ACTION_TYPES.TOGGLE_MODAL,
});

async function reqUploadFilesImpl(files) {
  const url = '/files';
  const formData = new FormData();
  files.forEach((file, i) => formData.append(['file', i].join(''), file));
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  try {
    return { error: '', res: await post(url, formData, config) };
  } catch (error) {
    return { error, res: null };
  }
}

const reqUploadFiles = files => (dispatch) => {
  dispatch(uploadFiles());
  const res = reqUploadFilesImpl(files);
  return dispatch(uploadFiles(false, res.data, res.error));
};

export default {
  addFile,
  delFile,
  delAllFile,
  uploadFiles,
  emptyError,
  reqUploadFiles,
  toggleModal,
};
