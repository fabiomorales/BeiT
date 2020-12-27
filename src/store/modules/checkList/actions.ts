import { action } from 'typesafe-actions';

function toggleCheckBox({
  selected,
  index,
}: {
  selected: boolean;
  index: number;
}) {
  return action('@checkList/SET_CHECKBOX_CHECKED', {
    selected,
    index,
  });
}

export default toggleCheckBox;
