import { HttpClient } from '@angular/common/http';
import { reserva } from './reserva.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  
  baseUrl = "https://livraria-api-restfull.herokuapp.com/reserva" 
  
  constructor( private http:HttpClient) { }
  
  create(reserva : reserva): Observable<reserva>{
    return this.http.post<reserva>(this.baseUrl, reserva)
}
  read():Observable<reserva[]>{
    return this.http.get<reserva[]>(this.baseUrl)
  }
  readById(id: number): Observable<reserva>{
    const url =  `${this.baseUrl}/${id}`
    return this.http.get<reserva>(url)

  }
  update(reserva:  reserva): Observable<reserva>{
    const url = `${this.baseUrl}/${reserva.id}`
    return this.http.put<reserva>(url, reserva)
  }
  delete(id : number): Observable<reserva> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<reserva>(url)
  }
}
