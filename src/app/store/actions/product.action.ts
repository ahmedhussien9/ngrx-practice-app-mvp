import { createAction, props } from "@ngrx/store";

export const startLoadProduct = createAction('[Products Page] Load Products');
export const searchTerm = createAction('[Products Page] search Term', props<{ searchTerm: string }>());
