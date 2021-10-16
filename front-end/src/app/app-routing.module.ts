import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import ('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'pessoa',
    loadChildren: () => import ('./pessoa/pessoa.module').then( m => m.PessoaModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import ('./contato/contato.module').then( m => m.ContatoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
