import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CheckListAction = ActionType<typeof actions>;

export interface CheckListState {
  readonly label: string;
  readonly selected: boolean;
}
