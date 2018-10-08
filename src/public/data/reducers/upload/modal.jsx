import Const from '_common/Const';

export const initState = {
  isOpen: false,
};

const modal = (state = initState, action = { type: Const.ACTION_TYPES.NONE }) => {
  if (action.type === Const.ACTION_TYPES.TOGGLE_MODAL) {
    return { isOpen: !state.isOpen };
  }
  return state;
};

export default modal;
