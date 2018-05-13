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

const emptyRegiId = () => ({
  type: C.ACTION_TYPES.EMPTY_REGI_ID,
});

const toggleModal = () => ({
  type: C.ACTION_TYPES.TOGGLE_MODAL,
});

const toggleUploadedPanel = () => ({
  type: C.ACTION_TYPES.TOGGLE_UPLOADED_PANEL,
});

const reqUploadFilesImpl = (files) => {
  const url = '/api/v1/file';
  const formData = new FormData();
  files.forEach((file, i) => formData.append(['file', i].join(''), file));
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  return post(url, formData, config);
};

const reqUploadFiles = files => async (dispatch) => {
  dispatch(uploadFiles());
  try {
    const res = await reqUploadFilesImpl(files);
    return dispatch(uploadFiles(false, res.data.id, ''));
  } catch (error) {
    console.log('error', error);
    return dispatch(uploadFiles(false, null, error.status));
  }
};

export default {
  addFile,
  delFile,
  delAllFile,
  uploadFiles,
  emptyError,
  emptyRegiId,
  reqUploadFiles,
  toggleModal,
  toggleUploadedPanel,
};
