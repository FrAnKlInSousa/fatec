import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  mensagem: string = '';
  lista: Produto[] = [
    {
      codigo: 1,
      nome: 'Furadeira de Impacto 750W',
      descritivo:
        'Furadeira de impacto com velocidade variável e função reversível, ideal para concreto, madeira e metal.',
      valor: 299.9,
      promo: 249.9,
      quantidade: 15,
      keywords: 'furadeira, impacto, ferramenta, eletrica, construcao',
    },
    {
      codigo: 2,
      nome: 'Martelo Profissional 27mm',
      descritivo: 'Martelo com cabo em fibra e cabeça em aço forjado para maior resistência.',
      valor: 49.9,
      promo: 39.9,
      quantidade: 40,
      keywords: 'martelo, ferramenta, obra, construcao',
    },
    {
      codigo: 3,
      nome: 'Chave de Fenda 1/4',
      descritivo: 'Chave de fenda com ponta magnética e cabo ergonômico antiderrapante.',
      valor: 19.9,
      promo: 14.9,
      quantidade: 60,
      keywords: 'chave, fenda, ferramenta, manutencao',
    },
    {
      codigo: 4,
      nome: 'Parafusadeira Elétrica 12V',
      descritivo: 'Parafusadeira a bateria com controle de torque e carregador bivolt.',
      valor: 349.9,
      promo: 299.9,
      quantidade: 20,
      keywords: 'parafusadeira, bateria, ferramenta, eletrica',
    },
    {
      codigo: 5,
      nome: 'Serra Circular 1400W',
      descritivo: 'Serra circular potente ideal para cortes precisos em madeira e MDF.',
      valor: 599.9,
      promo: 599.9,
      quantidade: 12,
      keywords: 'serra, circular, madeira, corte, ferramenta',
    },
    {
      codigo: 6,
      nome: 'Trena 5 Metros',
      descritivo: 'Trena retrátil com trava automática e fita metálica resistente.',
      valor: 29.9,
      promo: 24.9,
      quantidade: 80,
      keywords: 'trena, medicao, ferramenta, obra',
    },
    {
      codigo: 7,
      nome: 'Alicate Universal 8"',
      descritivo: 'Alicate universal em aço carbono com cabo isolado e ergonômico.',
      valor: 39.9,
      promo: 32.9,
      quantidade: 35,
      keywords: 'alicate, ferramenta, eletrica, manutencao',
    },
    {
      codigo: 8,
      nome: 'Nível de Alumínio 60cm',
      descritivo: 'Nível com estrutura em alumínio e três bolhas para medições precisas.',
      valor: 45.9,
      promo: 37.9,
      quantidade: 25,
      keywords: 'nivel, medicao, obra, ferramenta',
    },
    {
      codigo: 9,
      nome: 'Lixadeira Orbital 200W',
      descritivo: 'Lixadeira orbital compacta ideal para acabamento em madeira e superfícies.',
      valor: 219.9,
      promo: 189.9,
      quantidade: 0,
      keywords: 'lixadeira, orbital, acabamento, ferramenta',
    },
    {
      codigo: 10,
      nome: 'Carrinho de Mão 65L',
      descritivo: 'Carrinho de mão reforçado com caçamba metálica e pneu inflável.',
      valor: 279.9,
      promo: 279.9,
      quantidade: 10,
      keywords: 'carrinho, mao, obra, construcao, transporte',
    },
  ];
}
