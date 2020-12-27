import { CheckListState, ListSate } from './types';

const INITIAL_STATE: ListSate[] = [
  {
    name: 'Basic Facemask',
    selected: false,
  },
  {
    name: 'Filtered Respirator',
    selected: false,
  },
  {
    name: 'Self-Contained Breathing Apparatus',
    selected: false,
  },
  {
    name: 'Protective Clothing',
    selected: false,
  },
  {
    name: 'Goggles',
    selected: false,
  },
];

export function checkList(state = INITIAL_STATE, action: CheckListState) {
  if (action.type === 'SET_CHECKBOX_CHECKED') {
    state[action.payload.index].selected = !action.payload.selected;
    return [...state];
  }
  return state;
}
