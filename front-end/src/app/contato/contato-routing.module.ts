import { NovoContatoComponent } from './novo-contato/novo-contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato.component';

const routes: Routes = [
  {
    path: '',
    component: ContatoComponent
  },
  {
    path: 'novo-contato',
    component: NovoContatoComponent
  },
  {
    path: 'editar-contato/:id',
    component: NovoContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
