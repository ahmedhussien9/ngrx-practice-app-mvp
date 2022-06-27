import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LOAD_PRODUCTS } from 'src/app/store/actions/product-api.action';
import { isLoggedIn, isLoggedOut, username } from 'src/app/store/selectors/auth.selector';
import { CATEGORIES_SELECTOR } from 'src/app/store/selectors/product.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username$: Observable<string>;
  isUserLogin$: Observable<boolean>;
  isUserLogout$: Observable<boolean>;
  categorie$: Observable<string[]>;

  constructor(
    private store$: Store<any>
  ) {

    this.categorie$ = this.store$.pipe(
      select(CATEGORIES_SELECTOR)
    )

    this.username$ = this.store$.pipe(
      select(username)
    );

    this.isUserLogin$ = this.store$.pipe(
      select(isLoggedIn)
    )

    this.isUserLogout$ = this.store$.pipe(
      select(isLoggedOut)
    )
  }

  ngOnInit(): void { }


  onSelectCategory(category: any) {
    this.store$.dispatch(LOAD_PRODUCTS({ category: category.target.value }));
  }

}
