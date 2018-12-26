import deepFreeze from 'deep-freeze';
import Const from '_common/Const';
import tooltip, { initState } from '_data/reducers/upload/tooltip';

const state = {
  ...initState,
}

describe('tootip reducer', () => {
  it(`[tooltip] initState Success`, () => {
    const result = tooltip(undefined, {});
    expect(result).toEqual(initState);
  });
  it(`[tooltip] ${Const.ACTION_TYPES.TOGGLE_TOOLTIP} Success`, () => {
    const action = {
      type: Const.ACTION_TYPES.TOGGLE_TOOLTIP,
    };
    deepFreeze(state);
    deepFreeze(action);
    const result = tooltip(state, action);
    expect(result.isOpen).toEqual(!state.isOpen);
  });
});
