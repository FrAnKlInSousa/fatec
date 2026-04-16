import { Routes } from '@angular/router';
import { ListaChamado } from './lista-chamado/lista-chamado';
import { CadastroChamado } from './cadastro-chamado/cadastro-chamado';

export const routes: Routes = [
  { path: '', component: ListaChamado },
  { path: 'cadastro', component: CadastroChamado },
];
