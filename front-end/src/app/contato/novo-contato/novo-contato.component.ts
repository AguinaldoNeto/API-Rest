import { PessoaService } from './../../pessoa/pessoa.service';
import { ContatoService } from './../contato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contato } from './../contato';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/pessoa/pessoa';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.css']
})
export class NovoContatoComponent implements OnInit {

  contato!: Contato;
  listaPessoa: Pessoa[] = [];
  id!: number;
  mensagemExito!: string;
  mensagemErro!: string;

  constructor(
    private router : Router,
    private contatoService : ContatoService,
    private pessoaService : PessoaService,
    private activatedRoute : ActivatedRoute

  ) {
    this.contato = new Contato();
   }

  ngOnInit(): void {
    this.buscarListaPessoa();

    let params = this.activatedRoute.params
    .subscribe( params => {
      if (params && params['id'] ){
        this.contatoService.getContatoPorId(params.id)
      .subscribe(
        response => {
        this.contato = response
      })}
    });
  }

  onSubmit() {
    this.contatoService
      .salvarContato(this.contato)
        .subscribe( dados => {
           this.contato = dados,
           this.mensagemExito = 'O contato foi cadastrado/editado com êxito!'
      });
  }

  voltar() {
    this.router.navigate(['/contatos'])
  }

  buscarListaPessoa() {
    this.pessoaService.getListaPessoas().subscribe( dados => this.listaPessoa = dados)
  }

}
