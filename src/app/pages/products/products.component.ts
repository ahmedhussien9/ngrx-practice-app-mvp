import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_PRODUCTS } from 'src/app/store/actions/product-api.action';
import * as ProductSelectors from "../../store/selectors/product.selector";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {

  product$: any;

  constructor(
    private store$: Store<any>
  ) {
    this.store$.dispatch(LOAD_CATEGORIES());
  }

  ngOnInit(): void {

    // this.store$.pipe(
    //   select(ProductSelectors.CATEGORY_SELECTOR),
    //   switchMap((category) => of(this.store$.dispatch(LOAD_PRODUCTS({ category: category })))),
    //   tap((c) => console.log(c))
    // ).subscribe()

    this.product$ = this.store$.pipe(
      select(ProductSelectors.PRODUCT_COLLECTION_SELECTOR)
    )
  }

}
