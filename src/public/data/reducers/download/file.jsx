import Const from '_common/Const';

export const initState = {
  expireTime: {
    data: 0,
    loading: false,
    error: '',
  },
  download: {
    error: '',
  },
};

const file = (state = initState, action = { type: Const.ACTION_TYPES.NONE }) => {
  switch (action.type) {
    case Const.ACTION_TYPES.GET_FILE_INFO_SUCCESS: {
      return {
        ...state,
        expireTime: {
          ...initState.expireTime,
          data: action.payload,
          loading: false,
        },
      };
    }
    case Const.ACTION_TYPES.GET_FILE_INFO_PENDING: {
      return {
        ...state,
        expireTime: {
          ...initState.expireTime,
          loading: true,
        },
      };
    }
    case Const.ACTION_TYPES.GET_FILE_INFO_FAILURE: {
      return {
        ...state,
        expireTime: {
          ...initState.expireTime,
          error: action.error,
          loading: false,
        },
      };
    }
    case Const.ACTION_TYPES.DOWNLOAD_FILE_FAILURE: {
      return {
        ...state,
        download: {
          ...initState.expireTime,
          error: action.error,
        },
      };
    }
    default:
      return state;
  }
};

export default file;
