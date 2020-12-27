export function toggleCheckBox(selected: boolean, index: number) {
  return {
    type: 'SET_CHECKBOX_CHECKED',
    payload: {
      selected,
      index,
    },
  };
}
