import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaPessoaComponent } from './nova-pessoa/nova-pessoa.component';
import { PessoaComponent } from './pessoa.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaComponent
  },
  {
    path: 'nova-pessoa',
    component: NovaPessoaComponent
  },
  {
    path: 'editar-pessoa/:id',
    component: NovaPessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
