import { Injectable } from '@angular/core';
import { IClientService } from './iclients.servicer';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, ListClientResponse, DetailClientResponse, UpdateClientRequest, UpdateClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements IClientService{

  private readonly basePath = environment.apiUrl

  constructor(private http:HttpClient) { }


  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<SaveClientResponse>(`${this.basePath}Clients`, request)
  }
  update(id: number, request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.put<UpdateClientResponse>(`${this.basePath}Clients/${id}`, request)
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}Clients/${id}`)
  }
  list(): Observable<ListClientResponse> {
    return this.http.get<ListClientResponse>(`${this.basePath}Clients`)
  }
  findById(id: number): Observable<DetailClientResponse> {
    return this.http.get<DetailClientResponse>(`${this.basePath}Clients`)
  }
}
