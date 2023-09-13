import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  url = 'http://localhost:3000/seller';

  constructor(private http: HttpClient) {}

  user() {
    return this.http.get(this.url);
  }

  addUsers(data: any) {
    return this.http.post(this.url, data);
  }
}
