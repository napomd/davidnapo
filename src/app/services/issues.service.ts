import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { pipe } from '../../../node_modules/@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})
export class IssuesService extends BaseService {

  constructor(http:Http) {
    super("/search/issues?q=repo:", http);
  }

  getIssues(owner: string, repo: string) {
    console.log(`${this.url}${owner}/${repo}`);
    return this.getRequest(`${this.url}${owner}/${repo}`);
  }
}
