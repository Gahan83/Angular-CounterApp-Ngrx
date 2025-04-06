import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.action';
import { IAppState } from '../AppState';


export const initialState: IAppState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 }))
);
