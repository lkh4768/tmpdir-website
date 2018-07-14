import Const from '_common/Const';
import Utils from '_common/Utils';

export const initState = {
  list: [],
  regiId: '',
  expireTime: 0,
  uploading: false,
  totalSize: 0,
  uploadedSize: 0,
  error: '',
};

const file = (state = initState, action = { type: Const.ACTION_TYPES.NONE }) => {
  switch (action.type) {
    case Const.ACTION_TYPES.ADD_FILES: {
      const newFiles = Utils.uniqArray(
        [
          ...state.list,
          ...action.files,
        ],
        'name',
      );
      if (Const.FILE.SIZE.MAX >= Utils.getTotalFileSize(newFiles)) {
        return { ...state, list: newFiles };
      }
      return { ...state, error: '파일 용량 초과' };
    }
    case Const.ACTION_TYPES.DEL_FILE: {
      return {
        ...state,
        list: state.list.filter(f => f.name !== action.filename),
      };
    }
    case Const.ACTION_TYPES.DEL_ALL_FILE: {
      return {
        ...state,
        list: [],
      };
    }
    case Const.ACTION_TYPES.UPLOAD_FILES_SUCCESS: {
      return {
        ...state,
        list: [],
        regiId: action.payload.regiId,
        expireTime: action.payload.expireTime,
        uploading: false,
      };
    }
    case Const.ACTION_TYPES.UPLOAD_FILES_FAILURE: {
      return {
        ...state,
        list: [],
        error: action.error,
        uploading: false,
      };
    }
    case Const.ACTION_TYPES.UPLOAD_FILES_PENDING: {
      return {
        ...state,
        uploading: true,
        totalSize: action.totalSize,
        uploadedSize: action.uploadedSize,
      };
    }
    case Const.ACTION_TYPES.EMPTY_ERROR: {
      return { ...state, error: '' };
    }
    case Const.ACTION_TYPES.EMPTY_REGI_ID: {
      return { ...state, regiId: '' };
    }
    default:
      return state;
  }
};

export default file;
