import { createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/interfaces/IUser.interface";
import { AuthActions } from "../actions/auth-action.types";


export interface AuthState {
    user: IUser;
}

export const AuthReducerKey = "auth";

export const initialAuthState: AuthState = {
    user: {
        username: "",
        token: ""
    }
}


export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.login, (state, action) => {
        console.log()
        return {
            user: {
                username: action.user.username,
            }
        }
    }),

    on(AuthActions.LOGIN_SUCCESS, (state, action) => {
        return {
            user: {
                username: state.user.username,
                token: action.token
            }
        }
    })
)