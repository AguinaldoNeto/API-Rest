import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  listaContatos: Contato[] = [];
  contatoExcluir!: Contato;
  mensagemExito!: string;
  mensagemErro!: string;

  constructor(
    private contatoService : ContatoService
  ) { }

  ngOnInit(): void {
    this.contatoService
      .getListaContato()
        .subscribe( dados => {
          this.listaContatos = dados
    })
  }

  preparaContatoExcluir( contato : Contato) {
    this.contatoExcluir = contato
  }

  excluirContato() {
    this.contatoService
      .deletarContato(this.contatoExcluir)
        .subscribe(
          retorna => {
            this.mensagemExito = 'O contato foi excluído com êxito!',
            this.ngOnInit();
    },
            erro => this.mensagemErro = 'O contato não pode ser excluído, tente novamente mais tarde.',
    )
  }

}
