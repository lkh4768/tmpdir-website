import Const from '_common/Const';

export const initState = {
  href: '',
  origin: '',
};

const location = (state = initState, action = { type: Const.ACTION_TYPES.NONE }) => {
  switch (action.type) {
    case Const.ACTION_TYPES.GET_HREF: {
      return {
        ...state,
        href: window.location.href,
      };
    }
    case Const.ACTION_TYPES.GET_ORIGIN: {
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
