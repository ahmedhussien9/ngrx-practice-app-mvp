import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/auth.reducer";



export const selectAuthState = createFeatureSelector<AuthState>("auth");


export const isLoggedIn = createSelector(
    selectAuthState,
    auth => !!auth.user
);

export const username = createSelector(
    selectAuthState,
    auth => auth.user.username
)

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);