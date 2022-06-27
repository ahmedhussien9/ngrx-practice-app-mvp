import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { map, catchError, EMPTY, take, exhaustMap, switchMap, Observable, of, mergeMap } from "rxjs";
import { HttpProductService } from "src/app/services/httpProduct.service";
import { LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_PRODUCTS, LOAD_PRODUCT_SUCCESS, SET_SELECTED_CATEGORY } from "../actions/product-api.action";


@Injectable()

export class ProductEffects {



    // loadCategories$ = createEffect(() => this.actions$.pipe(
    //     ofType(LOAD_CATEGORIES),
    //     exhaustMap((action) => this.httpProductService.getAllCategories()
    //         .pipe(
    //             take(1),
    //             switchMap((categories) => of((LOAD_CATEGORIES_SUCCESS({ categories: categories })), SET_SELECTED_CATEGORY({ selectedCategory: categories[0] }))),
    //             catchError(() => EMPTY)
    //         ))
    // )
    // );

    loadCategory$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LOAD_CATEGORIES),
            mergeMap(action =>
                this.httpProductService.getAllCategories().pipe(
                    // Use switch map to dispatch more actions at once
                    switchMap(categories => [
                        LOAD_CATEGORIES_SUCCESS({ categories: categories }),
                        SET_SELECTED_CATEGORY({ selectedCategory: categories[0] }),
                        LOAD_PRODUCTS({ category: categories[0] })
                    ]),
                )
            )
        );
    });


    loadProduct$ = createEffect(() => this.actions$.pipe(
        ofType(LOAD_PRODUCTS),
        exhaustMap((action) => this.httpProductService.all(action.category)
            .pipe(
                take(1),
                map(collection => (LOAD_PRODUCT_SUCCESS({ collection: collection }))),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private httpProductService: HttpProductService
    ) { }
}