import { HttpClient } from '@angular/common/http';
import { livros } from './livros.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  baseUrl = "https://livraria-api-restfull.herokuapp.com/livro" 
  
  constructor( private http:HttpClient) { }
  
  create(livros : livros): Observable<livros>{
    return this.http.post<livros>(this.baseUrl, livros)
}
  read():Observable<livros[]>{
    return this.http.get<livros[]>(this.baseUrl)
  }
  readById(id: number): Observable<livros>{
    const url =  `${this.baseUrl}/${id}`
    return this.http.get<livros>(url)

  }
  update(livros:  livros): Observable<livros>{
    const url = `${this.baseUrl}/${livros.id}`
    return this.http.put<livros>(url, livros)
  }
  delete(id : number): Observable<livros> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<livros>(url)
  }
}
