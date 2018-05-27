import C from '_utils/constants';
import tooltip, { initState } from '_data/reducers/upload/tooltip';

const state = {
  ...initState,
}

describe('tootip reducer', () => {
  it(`${C.ACTION_TYPES.TOGGLE_TOOLTIP} Success`, () => {
    const action = {
      type: C.ACTION_TYPES.TOGGLE_TOOLTIP,
    };
    const result = tooltip(state, action);
    expect(result.isOpen).toEqual(!state.isOpen);
  });
});
