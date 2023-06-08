import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:80';
  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {
    return this.http.post(this.url + '/login', { userName, password });
  }

  registerUser(userName: string, password: string) {
    return this.http.post(this.url + '/register', { userName, password });
  }
}
