import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';
import { RegisterRequest } from 'src/app/models/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: String = "";
  private url = 'https://dragossarbu-sdi.twilightparadox.com/DestinationBucketListBackend-0.0.1-SNAPSHOT';
  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string): Observable<AuthenticationResponse> {
    const request: AuthenticationRequest = {
      userName: userName,
      password: password
    };
    return this.http.post(this.url + '/login', request) as Observable<AuthenticationResponse>;
  }

  registerUser(userName: string, password: string, email: string): Observable<String> {
    const request: RegisterRequest = {
      userName: userName,
      password: password,
      email: email
    };
    return this.http.post(this.url + '/register', request) as Observable<String>;
  }

  deleteAccount(){
    const headers = { 'Authorization': 'Bearer ' + this.token };
    return this.http.delete(this.url + '/delete-account', { headers });
  }

  getToken(): String {
    this.token = localStorage.getItem('token') as String;
    return this.token;
  }

  setToken(token: String) {
    this.token = token;
    localStorage.setItem('token', token.toString());
  }
}
