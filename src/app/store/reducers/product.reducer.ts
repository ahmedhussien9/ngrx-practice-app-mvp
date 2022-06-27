import { createReducer, on } from "@ngrx/store";
import * as ProductsApiActions from "./../actions/product-api.action";


export const productsFeatureKey = 'products'

export interface ProductState {
    collection: any,
    categories: any,
    selectedCategory: string
}

export const productState: ProductState = {
    collection: [],
    categories: [],
    selectedCategory: ""
}

export const productsReducer = createReducer(
    productState,
    on(ProductsApiActions.LOAD_CATEGORIES_SUCCESS, (state, { categories }) => ({ ...state, categories })),
    on(ProductsApiActions.SET_SELECTED_CATEGORY, (state, { selectedCategory }) => ({ ...state, selectedCategory })),
    on(ProductsApiActions.LOAD_PRODUCT_SUCCESS, (state, { collection }) => ({ ...state, collection })),
)