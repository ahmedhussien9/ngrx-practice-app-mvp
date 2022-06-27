import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { hydrationMetaReducer } from "./hydration.reducer";

export interface RootState {
}

export const reducers: ActionReducerMap<RootState> = {
}

export const metaReducers: MetaReducer[] = [
]