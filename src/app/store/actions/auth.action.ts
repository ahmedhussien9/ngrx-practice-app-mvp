import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/interfaces/IUser.interface";


export const login = createAction(
    "[Login Page] User Login",
    props<{ user: IUser }>()
);


export const LOGIN_SUCCESS = createAction(
    "[Login Page] User Login Success",
    props<{ token: string }>()
);
