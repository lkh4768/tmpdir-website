import C from '_utils/constants';

const initState = {
  expireTime: {
    data: 0,
    loading: false,
    error: '',
  },
};

const files = (state = initState, action) => {
  switch (action.type) {
    case C.ACTION_TYPES.GET_FILE_INFO_SUCCESS: {
      return {
        ...state,
        expireTime: {
          data: action.payload,
          loading: false,
        },
      };
    }
    case C.ACTION_TYPES.GET_FILE_INFO_PENDING: {
      return {
        ...state,
        expireTime: {
          loading: true,
        },
      };
    }
    case C.ACTION_TYPES.GET_FILE_INFO_FAILURE: {
      return {
        ...state,
        expireTime: {
          error: action.error,
          loading: false,
        },
      };
    }
    default:
      return state;
  }
};

export default files;
