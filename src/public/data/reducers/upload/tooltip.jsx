import Const from '_common/Const';

export const initState = {
  isOpen: false,
};

const modal = (state = initState, action = { type: Const.ACTION_TYPES.NONE }) => {
  switch (action.type) {
    case Const.ACTION_TYPES.TOGGLE_TOOLTIP: {
      return { isOpen: !state.isOpen };
    }
    default:
      return state;
  }
};

export default modal;
