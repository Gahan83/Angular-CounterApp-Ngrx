import { createAction, props } from "@ngrx/store";

export const loadData=createAction('[Data] Load');

export const loadDataSuccess=createAction(
'[Data] Load Success',
 props<{data:any}>()
);

export const loadDataFailure=createAction(
    '[Data] Load Failure',
    props<{error:any}>()
)