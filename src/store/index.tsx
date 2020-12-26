import { createStore } from 'redux';

export interface CheckListState {
  type: string;
  payload: {
    selected: boolean;
    index: number;
  };
}

const INITIAL_STATE = [
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

function checkList(state = INITIAL_STATE, action: CheckListState) {
  if (action.type === 'SET_CHECKBOX_CHECKED') {
    state[action.payload.index].selected = !action.payload.selected;
    return [...state];
  }
  return state;
}

const store = createStore(checkList);

export default store;
