import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  apiURL: string = environment.apiURLBase + "/api/pessoa";

  constructor(
    private http : HttpClient
  ) { }

  salvarPessoa( cliente : Pessoa) : Observable<Pessoa>{
    return this.http.post<Pessoa>( this.apiURL, cliente)
  }

  getListaPessoas() : Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>( this.apiURL )
  }

  getPessoaPorId( id : number ) : Observable<Pessoa>{
    return this.http.get<any>( `${this.apiURL}/${id}` )
  }

  editarPessoa( pessoa : Pessoa ) : Observable<any>{
    return this.http.put<Pessoa>( `${this.apiURL}/${pessoa.id}`, pessoa )
  }

  deletarPessoa( pessoa : Pessoa ) : Observable<any>{
    return this.http.delete<any>( `${this.apiURL}/${pessoa.id}` )
  }
}
