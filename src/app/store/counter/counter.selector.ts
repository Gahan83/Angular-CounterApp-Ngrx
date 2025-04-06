import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState } from "../AppState";

export const selectCounterState=createFeatureSelector<IAppState>('counter');

export const selectCount = createSelector(
    selectCounterState,
    (state:IAppState)=>state.counter,

);