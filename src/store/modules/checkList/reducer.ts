import { CheckListAction, CheckListState } from './types';

const initialState: CheckListState[] = [
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
  state = initialState,
  action: CheckListAction,
): CheckListState[] | undefined {
  switch (action.type) {
    case '@checkList/SET_CHECKBOX_CHECKED':
      state[action.payload.index].selected = !action.payload.selected;
      return [...state];

    default:
      [...state];
  }
}
