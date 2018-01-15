import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: Http) {}

  getData() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get(this.baseUrl + '/data/1', { headers: headers })
      .map(res => res.json());
  }
}
