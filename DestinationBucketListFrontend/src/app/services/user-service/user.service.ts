import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token = "";
  private url = 'http://localhost:80';
  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string): Observable<AuthenticationResponse> {
    const request: AuthenticationRequest = {
      userName: userName,
      password: password
    };
    let response = this.http.post(this.url + '/login', request) as Observable<AuthenticationResponse>;
    response.subscribe(result => {this.token = result.token;})
    return response;
  }

  registerUser(userName: string, password: string, email: string): Observable<string> {
    let response =  this.http.post(this.url + '/register', { userName, password, email }) as Observable<string>;
    response.subscribe(result => {this.token = result;})
    return response;
  }

  deleteAccount(){
    const headers = { 'Authorization': 'Authorization ' + this.token };
    return this.http.delete(this.url + '/delete-account', { headers });
  }

  getToken(): string {
    return this.token;
  }
}
