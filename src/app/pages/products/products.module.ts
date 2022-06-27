import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSingleComponent } from './components/product-single/product-single.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from 'src/app/store/effects/product.effect';
import { StoreModule } from '@ngrx/store';
import { productsFeatureKey, productsReducer } from 'src/app/store/reducers/product.reducer';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductSingleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule { }
