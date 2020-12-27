export interface CheckListState {
  type: string;
  payload: {
    selected: boolean;
    index: number;
  };
}

export interface ListSate {
  readonly label: string;
  selected: boolean;
}
