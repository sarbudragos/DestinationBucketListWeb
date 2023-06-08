import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Destination } from 'src/app/models/Destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private url = 'http://localhost:80';
  constructor(private http: HttpClient) { }

  getPublicDestinations(): Observable<Destination[]>{
    const pageSize = 100;
    let ps = new HttpParams();
    ps = ps.append("pageSize", pageSize);
    return this.http.get(this.url + '/destinations/public', {params: ps}) as Observable<Destination[]>;
  }
  
  getPrivateDestinations(token: string): Observable<Destination[]>{
    const header = { 'Authorization': 'Authorization ' + token };
    const pageSize = 100;
    let ps = new HttpParams();
    ps = ps.append("pageSize", pageSize);
    return this.http.get(this.url + '/destinations/private', {params: ps, headers: header}) as Observable<Destination[]>;
  }
}

