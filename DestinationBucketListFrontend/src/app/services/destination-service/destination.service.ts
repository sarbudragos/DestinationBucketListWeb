import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Destination } from 'src/app/models/Destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private url = 'https://dragossarbu-sdi.twilightparadox.com/DestinationBucketListBackend-0.0.1-SNAPSHOT';
  constructor(private http: HttpClient) { }

  getPublicDestinations(): Observable<Destination[]>{
    const pageSize = 100;
    let ps = new HttpParams();
    ps = ps.append("pageSize", pageSize);
    return this.http.get(this.url + '/destinations/public', {params: ps}) as Observable<Destination[]>;
  }
  
  getPrivateDestinations(): Observable<Destination[]>{
    const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
    const pageSize = 100;
    let ps = new HttpParams();
    ps = ps.append("pageSize", pageSize);
    return this.http.get(this.url + '/destinations/private', {params: ps, headers: header}) as Observable<Destination[]>;
  }

  addPrivateDestination(destination: Destination) {
    const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
    this.http.post(this.url + '/destinations', destination, {headers: header});
  }

  markFavourite(id: number){
    const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
    this.http.put(this.url + '/destinations/private/favourite/{id}', {headers: header});
  }

  deletePrivateDestination(id: number){
    const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
    this.http.put(this.url + '/destinations/private/favourite/{id}', {headers: header});
  }

  modifyPrivateDestination(id: number,  dest: Destination){
    const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
    let ps = new HttpParams();
    ps = ps.append("destinationDTO", JSON.stringify(dest));
    this.http.put(this.url + '/destinations/private/favourite/{id}', {params: ps, headers: header});
  }

  deletePublicDestination(id: number){
    const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
    this.http.delete(this.url + '/destinations/admin/public/{id}', {headers: header});
  }

  modifyPublicDestination(id:number, dest: Destination){
    const header = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
    let ps = new HttpParams();
    ps = ps.append("destinationDTO", JSON.stringify(dest));
    this.http.put(this.url + '/destinations/admin/public/{id}', {params: ps, headers: header});
    
  }
}

