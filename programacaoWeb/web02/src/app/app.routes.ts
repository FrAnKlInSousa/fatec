import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { CestaCompras } from './cesta-compras/cesta-compras';
import { Contato } from './contato/contato';
import { DetalheProduto } from './detalhe-produto/detalhe-produto';
import { Login } from './login/login';
import { Pesquisa } from './pesquisa/pesquisa';
import { ReenvioSenha } from './reenvio-senha/reenvio-senha';
import { Vitrine } from './vitrine/vitrine';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'cesta-compras', component: CestaCompras },
  { path: 'contato', component: Contato },
  { path: 'detalhe-produto', component: DetalheProduto },
  { path: 'login', component: Login },
  { path: 'pesquisa', component: Pesquisa },
  { path: 'reenvio-senha', component: ReenvioSenha },
  { path: 'vitrine', component: Vitrine },
];
