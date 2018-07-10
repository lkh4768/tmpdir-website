import C from '_utils/constants';

export const initState = {
  href: '',
  origin: '',
};

const location = (state = initState, action = { type: C.ACTION_TYPES.NONE }) => {
  switch (action.type) {
    case C.ACTION_TYPES.GET_HREF: {
      return {
        ...state,
        href: window.location.href,
      };
    }
    case C.ACTION_TYPES.GET_ORIGIN: {
      return {
        ...state,
        origin: window.location.origin,
      };
    }
    default:
      return state;
  }
};

export default location;
