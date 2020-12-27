import { CheckListState, ListSate } from './types';

const INITIAL_STATE: ListSate[] = [
  {
    label: 'Basic Facemask',
    selected: false,
  },
  {
    label: 'Filtered Respirator',
    selected: false,
  },
  {
    label: 'Self-Contained Breathing Apparatus',
    selected: false,
  },
  {
    label: 'Protective Clothing',
    selected: false,
  },
  {
    label: 'Goggles',
    selected: false,
  },
];

export default function checkList(
  state = INITIAL_STATE,
  action: CheckListState,
) {
  if (action.type === 'SET_CHECKBOX_CHECKED') {
    state[action.payload.index].selected = !action.payload.selected;
    return [...state];
  }
  return state;
}
