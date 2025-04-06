import { createReducer, on } from "@ngrx/store"
import { loadData, loadDataFailure, loadDataSuccess } from "./data.action"
import { IDataState } from "../AppState"



export const initialState: IDataState = {
    data:null,
    loading:false,
    error:null
}

export const dataReducer = createReducer(
    initialState,
    on(loadData, (state) => ({ 
        ...state, 
        loading: true,
        error: null
    })),
    on(loadDataFailure, (state,{error})=>({
        ...state,
        error,
        loading: false
    }))
)
