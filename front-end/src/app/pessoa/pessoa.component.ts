import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  listaPessoa: Pessoa[] = [];
  pessoaExcluir!: Pessoa;
  mensagemExito!: string;
  mensagemErro!: string;

  constructor(
    private pessoaService : PessoaService
  ) { }

  ngOnInit(): void {
    this.pessoaService
      .getListaPessoas().subscribe( dados => {
        this.listaPessoa = dados
    });
  }

  preparaPessoaExcluir( pessoa : Pessoa) {
    this.pessoaExcluir = pessoa
  }


  excluirUsuario() {
    this.pessoaService
      .deletarPessoa(this.pessoaExcluir)
        .subscribe(
          retorna => {
            this.mensagemExito = 'A pessoa foi excluída com êxito!',
            this.ngOnInit();
        },
          erro => this.mensagemErro = 'A pessoa não pode ser excluída, tente novamente mais tarde.',
        )
  }
}
