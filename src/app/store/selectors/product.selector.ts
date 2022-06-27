import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../reducers/product.reducer";

export const productState = createFeatureSelector<ProductState>("products");


export const PRODUCT_COLLECTION_SELECTOR = createSelector(
    productState,
    products => products.collection
)

export const CATEGORIES_SELECTOR = createSelector(
    productState,
    products => products.categories
)

export const SELECTED_CATEGORY_SELECTOR = createSelector(
    productState,
    products => products.selectedCategory
)

// export const CATEGORY_SELECTOR = createSelector(
//     productState,
//     products => products.selectedCategory
// )
