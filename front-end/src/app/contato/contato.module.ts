import { NgxMaskModule } from 'ngx-mask';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';


@NgModule({
  declarations: [
    ContatoComponent,
    NovoContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    HttpClientModule,
    FormsModule,
    MensagemModule,
    NgxMaskModule.forChild()
  ]
})
export class ContatoModule { }
