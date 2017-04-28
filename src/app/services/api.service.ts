import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { config } from '../../config';

@Injectable()
export class ApiService {
    baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = config.baseAPIUrl;
    }

    get(apiUrl: string) {
        return this.http.get(this.baseUrl + apiUrl, this.header())
            .map((response: Response) => {
                return response.json();
            });
    }

    post(apiUrl: string, data: any = {}) {
        return this.http.post(this.baseUrl + apiUrl, JSON.stringify(data), this.header())
            .map((response: Response) => {
                return response.json();
            });
    }

    patch(apiUrl: string, data: any = {}) {
        return this.http.patch(this.baseUrl + apiUrl, JSON.stringify(data), this.header())
            .map((response: Response) => {
                return response.json();
            });
    }

    delete(apiUrl: string) {
        return this.http.delete(this.baseUrl + apiUrl, this.header())
            .map((response: Response) => {
                return response.json();
            });
    }

    private header() {
        const headerOptions: any = { 'Content-Type': 'application/json' };
        const headers = new Headers(headerOptions);

        return new RequestOptions({ headers: headers });
    }
}
