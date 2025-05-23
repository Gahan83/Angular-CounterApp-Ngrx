import { createAction, props } from "@ngrx/store";
import { Department } from "../../model/Department";

export const loadDepartment = createAction('[Department] Load Department')

export const loadDepartmentSuccess = createAction(
    '[Department] Load Department Success',
     props<{departments:Department[]}>()
)