import C from '_utils/constants';

const initState = {
  href: '',
  origin: '',
};

const location = (state = initState, action) => {
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
