import { Routes } from '@angular/router';
import { ListaPedidos } from './lista-pedidos/lista-pedidos';
import { Login } from './login/login';
import { ResultadoBusca } from './resultado-busca/resultado-busca';
import { CestaCompra } from './cesta-compra/cesta-compra';
import { ReenvioSenha } from './reenvio-senha/reenvio-senha';
import { DetalheProduto } from './detalhe-produto/detalhe-produto';
import { DadosPedido } from './dados-pedido/dados-pedido';
import { Cadastro } from './cadastro/cadastro';
import { Vitrine } from './vitrine/vitrine';


export const routes: Routes = [
  {"path": "login", component:Login},
  {"path": "lista-pedidos", component:ListaPedidos},
  {"path": "resultado-busca", component:ResultadoBusca},
  {"path": "cesta-compra", component:CestaCompra},
  {"path": "reenvio-senha", component:ReenvioSenha},
  {"path": "detalhe-produto", component:DetalheProduto},
  {"path": "dados-pedido", component:DadosPedido},
  {"path": "cadastro", component:Cadastro},
  {"path": "vitrine", component:Vitrine}
];
