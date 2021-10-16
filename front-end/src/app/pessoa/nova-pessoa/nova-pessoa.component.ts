import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-nova-pessoa',
  templateUrl: './nova-pessoa.component.html',
  styleUrls: ['./nova-pessoa.component.css']
})
export class NovaPessoaComponent implements OnInit {

  pessoa!: Pessoa;
  id!: number;
  mensagemExito!: string;
  mensagemErro!: string;

  constructor(
    private router : Router,
    private pessoaService : PessoaService,
    private activatedRoute : ActivatedRoute
  ) {
    this.pessoa = new Pessoa();
   }

  ngOnInit(): void {
    let params = this.activatedRoute.params
    .subscribe( params => {
      if (params && params['id'] ){
        this.pessoaService.getPessoaPorId(params.id)
      .subscribe(
        response => {
        this.pessoa = response
      })}
    })
  }

  onSubmit() {
    this.pessoaService
      .salvarPessoa(this.pessoa)
        .subscribe( dados => {
           this.pessoa = dados,
           this.mensagemExito = 'A pessoa foi cadastrada/editada com êxito!'
      });
  }


  voltar() {
    this.router.navigate(['/pessoa'])
  }

}
