import { createAction, props } from "@ngrx/store";

export const LOAD_PRODUCTS = createAction('[Products Page] start load products', props<{ category: string }>());
export const LOAD_PRODUCT_SUCCESS = createAction('[Products Page] Load Products success', props<{ collection: any[] }>());


export const LOAD_CATEGORIES = createAction('[Products Page] start load category');
export const LOAD_CATEGORIES_SUCCESS = createAction('[Products Page] load category success', props<{ categories: string[] }>());
export const SET_SELECTED_CATEGORY = createAction('[Products Page] set selected categor', props<{ selectedCategory: string }>());
