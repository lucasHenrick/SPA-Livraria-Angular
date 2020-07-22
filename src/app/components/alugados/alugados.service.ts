import { Alugados } from './alugados.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlugadosService {
  baseUrl = "https://livraria-api-restfull.herokuapp.com/alugados" 
  
  constructor( private http:HttpClient) { }
  
  create(alugados : Alugados): Observable<Alugados>{
    return this.http.post<Alugados>(this.baseUrl, alugados)
}
  read():Observable<Alugados[]>{
    return this.http.get<Alugados[]>(this.baseUrl)
  }
  readById(id: number): Observable<Alugados>{
    const url =  `${this.baseUrl}/${id}`
    return this.http.get<Alugados>(url)

  }
  update(alugados:  Alugados): Observable<Alugados>{
    const url = `${this.baseUrl}/${alugados.id}`
    return this.http.put<Alugados>(url, alugados)
  }
  delete(id : number): Observable<Alugados> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Alugados>(url)
  }
}
