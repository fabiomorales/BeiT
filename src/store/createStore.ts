import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';
import { CheckListAction, CheckListState } from './modules/checkList/types';

export interface StoreState {
  checkList: CheckListState[];
}

export type StoreAction = CheckListAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
