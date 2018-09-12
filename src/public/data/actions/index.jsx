import { post, get } from 'axios';

import Const from '_common/Const';
import Utils from '_common/Utils';

const addFile = _files => ({
  type: Const.ACTION_TYPES.ADD_FILES,
  files: _files,
});

const delFile = _filename => ({
  type: Const.ACTION_TYPES.DEL_FILE,
  filename: _filename,
});

const delAllFile = () => ({
  type: Const.ACTION_TYPES.DEL_ALL_FILE,
});

const uploadFilesSuccess = payload => ({
  type: Const.ACTION_TYPES.UPLOAD_FILES_SUCCESS,
  payload,
});

const uploadFilesFailure = error => ({
  type: Const.ACTION_TYPES.UPLOAD_FILES_FAILURE,
  error,
});

const uploadFilesPending = (totalSize, uploadedSize = 0) => ({
  type: Const.ACTION_TYPES.UPLOAD_FILES_PENDING,
  totalSize,
  uploadedSize,
});

const emptyError = () => ({
  type: Const.ACTION_TYPES.EMPTY_ERROR,
});

const emptyRegiId = () => ({
  type: Const.ACTION_TYPES.EMPTY_REGI_ID,
});

const toggleModal = () => ({
  type: Const.ACTION_TYPES.TOGGLE_MODAL,
});

const toggleUploadedPanel = () => ({
  type: Const.ACTION_TYPES.TOGGLE_UPLOADED_PANEL,
});

const toggleTooltip = () => ({
  type: Const.ACTION_TYPES.TOGGLE_TOOLTIP,
});

const getFileInfoPending = () => ({
  type: Const.ACTION_TYPES.GET_FILE_INFO_PENDING,
});

const getFileInfoSuccess = payload => ({
  type: Const.ACTION_TYPES.GET_FILE_INFO_SUCCESS,
  payload,
});

const getFileInfoFailure = error => ({
  type: Const.ACTION_TYPES.GET_FILE_INFO_FAILURE,
  error,
});

const downloadFileFailure = error => ({
  type: Const.ACTION_TYPES.DOWNLOAD_FILE_FAILURE,
  error,
});

const reqUploadFilesImpl = (files, onUploadProgress = Utils.emptyFunc) => {
  const url = Const.API_URL.FILE;
  const formData = new FormData();
  files.forEach(file => formData.append('file', file));
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
    onUploadProgress,
  };
  return post(url, formData, config);
};

const reqUploadFiles = files => async (dispatch) => {
  dispatch(uploadFilesPending(Utils.getTotalFileSize(files)));
  try {
    const res = await reqUploadFilesImpl(
      files,
      progressEvent => dispatch(uploadFilesPending(progressEvent.total, progressEvent.loaded)),
    );
    return dispatch(uploadFilesSuccess({
      regiId: res.data.id,
      expireTime: res.data.expireTime,
    }));
  } catch (error) {
    return dispatch(uploadFilesFailure(error.response.status));
  }
};

const reqFileInfoImpl = regiId => get([Const.API_URL.FILE_INFO, regiId].join(''));

const reqFileInfo = regiId => async (dispatch) => {
  dispatch(getFileInfoPending());
  try {
    const res = await reqFileInfoImpl(regiId);
    return dispatch(getFileInfoSuccess(res.data.expireTime));
  } catch (error) {
    return dispatch(getFileInfoFailure(error.response.status));
  }
};

const reqDownloadFileImpl = regiId => get([Const.API_URL.FILE, regiId].join(''), { responseType: 'blob' });

const reqDownloadFile = regiId => async (dispatch) => {
  try {
    const res = await reqDownloadFileImpl(regiId);
    const filename = decodeURI(res.headers['content-disposition'].match(/filename="(.*)"/)[1]);
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    return null;
  } catch (error) {
    return dispatch(downloadFileFailure(error.response.status));
  }
};

const getHref = () => ({
  type: Const.ACTION_TYPES.GET_HREF,
});

const getOrigin = () => ({
  type: Const.ACTION_TYPES.GET_ORIGIN,
});

export default {
  addFile,
  delFile,
  delAllFile,
  emptyError,
  emptyRegiId,
  reqUploadFiles,
  toggleModal,
  toggleUploadedPanel,
  toggleTooltip,
  reqFileInfo,
  reqDownloadFile,
  getHref,
  getOrigin,
};
