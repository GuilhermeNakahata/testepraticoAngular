import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from 'src/app/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/testepratico/pessoas';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.pessoasUrl}`);
  }

  listarUnico(id:Number){
    return this.http.get<any[]>(`${this.pessoasUrl + '/' + id}`);
  }

  delete(id:Number){
    return this.http.delete<any[]>(`${this.pessoasUrl + '/' + id}`);
  }

  criar(pessoa:Pessoa){
    return this.http.post<any[]>(`${this.pessoasUrl}`, pessoa);
  }

  alterar(pessoa:Pessoa){
    return this.http.put<any[]>(`${this.pessoasUrl}`, pessoa);
  }

}
