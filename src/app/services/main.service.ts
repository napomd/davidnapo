import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { pipe } from '../../../node_modules/@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})
export class MainService  extends BaseService {

  constructor(http:Http) {
    super("/search/repositories?q=", http);
  }

  getByRepo(repoName: string) {
    return this.getRequest(this.url + repoName);
  }
}
