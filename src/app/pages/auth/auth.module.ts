import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer, AuthReducerKey } from 'src/app/store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from 'src/app/store/effects/auth.effect';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AuthReducerKey, authReducer),
    EffectsModule.forFeature([AuthEffect])
  ]
})
export class AuthModule { }
