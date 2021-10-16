import { NgxMaskModule } from 'ngx-mask';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';
import { NovaPessoaComponent } from './nova-pessoa/nova-pessoa.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PessoaComponent,
    NovaPessoaComponent,
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule,
    MensagemModule,
    NgxMaskModule.forChild()
  ]
})
export class PessoaModule { }
