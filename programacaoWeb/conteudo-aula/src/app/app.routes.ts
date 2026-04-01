import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Contato } from './contato/contato';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'vitrine', component: Vitrine },
  { path: 'contato', component: Contato },
  { path: 'cadastro', component: Cadastro },
];
