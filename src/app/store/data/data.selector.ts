import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IDataState } from "../AppState";

export const selectDataState=createFeatureSelector<IDataState>('data');

export const selectData = createSelector(
    selectDataState,
    (state: IDataState) => state.data
  );
  
  export const selectLoading = createSelector(
    selectDataState,
    (state: IDataState) => state.loading
  );
  
  export const selectError = createSelector(
    selectDataState,
    (state: IDataState) => state.error
  );
  
