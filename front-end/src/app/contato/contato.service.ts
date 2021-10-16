import { Observable } from 'rxjs';
import { Contato } from './contato';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  apiURL: string = environment.apiURLBase + "/api/contatos";

  constructor(
    private http : HttpClient
  ) { }

  salvarContato( contato : Contato) : Observable<Contato>{
    return this.http.post<Contato>( this.apiURL, contato)
  }

  getListaContato() : Observable<Contato[]>{
    return this.http.get<Contato[]>( this.apiURL )
  }

  getContatoPorId( id : number ) : Observable<Contato>{
    return this.http.get<any>( `${this.apiURL}/${id}` )
  }

  editarContato( contato : Contato ) : Observable<any>{
    return this.http.put<Contato>( `${this.apiURL}/${contato.id}`, contato )
  }

  deletarContato( contato : Contato ) : Observable<any>{
    return this.http.delete<any>( `${this.apiURL}/${contato.id}` )
  }
}
