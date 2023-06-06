import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly API = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${this.API}/imprimelivros`);
  }

  addBook(body:any){
    return this.http.post(`${this.API}/adicionalivro`,body)
  }

  updateBook(body:any){
    return this.http.put(`${this.API}/atualizalivro`,body)
  }

  deleteBook(body: any) {
    const options = {
      body: body
    };
    return this.http.delete(`${this.API}/deletalivro`, options);
  }
}
