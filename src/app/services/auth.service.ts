import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class HttpAuthService {

    private readonly baseUrl: string = "https://fakestoreapi.com/";

    constructor(private _httpClient: HttpClient) { }

    login(username: string, password: string | undefined): Observable<any> {
        return this._httpClient.post(`${this.baseUrl}auth/login`, { username, password })
    }

}