import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { exhaustMap, take, map, catchError, EMPTY, tap } from "rxjs";
import { HttpAuthService } from "src/app/services/auth.service";
import { login, LOGIN_SUCCESS } from "../actions/auth.action";


@Injectable()

export class AuthEffect {

    onLogin$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        exhaustMap((action) => this.httpAuthService.login(action.user.username, action.user.password)
            .pipe(
                map(payload => (LOGIN_SUCCESS({ token: payload.token }))),
                tap(() => this.router.navigateByUrl('/products')),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private router: Router,
        private actions$: Actions,
        private httpAuthService: HttpAuthService
    ) { }
}