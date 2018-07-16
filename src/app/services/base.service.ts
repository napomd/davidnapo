import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { pipe } from '../../../node_modules/@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

    url: string = "https://api.github.com";
    headers: Headers;
    protected options: RequestOptions;
    http: Http;

    constructor(rsc: string, http: Http) {
        this.url = this.url.concat(rsc);
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAll() {
        return this.getRequest(this.url);
    }

    getById(id: any) {
        return this.getRequest(this.url + "/" + id);
    }

    protected getRequest(url: string) {
      return this.http.get(url, this.options).pipe(map( response => response.json()));
    }

    add(body: any) {
        return this.http.post(this.url, body, this.options).pipe(map( response => response.json()))
    }

    delete(id: number) {
      return this.http.delete(this.url + '/' + id, this.options).pipe(map( response => response.json()))
    }

    update(body: any=[]) {
        return this.http.put(this.url, body, this.options).pipe(map( response => response.json()))
    }
}
