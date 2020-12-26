import { Item } from 'components/CheckBoxList';
import { createStore } from 'redux';

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

function reducer(state = INITIAL_STATE, action: Item) {
  if (action.type === 'SET_CHECKBOX_CHECKED') {
    state[action.index].selected = !action.selected;
    return [...state];
  }
  return state;
}

const store = createStore(reducer);

export default store;
