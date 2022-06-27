import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class HttpProductService {

    private readonly baseUrl: string = "https://fakestoreapi.com/";

    constructor(private _httpClient: HttpClient) { }

    all(category: string): Observable<any> {
        return this._httpClient.get(`${this.baseUrl}products/category/${category}`);
    }

    getAllCategories(): Observable<any> {
        return this._httpClient.get(`${this.baseUrl}products/categories`)
    }
}