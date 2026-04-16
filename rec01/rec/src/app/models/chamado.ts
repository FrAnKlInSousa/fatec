export class Chamado {
  codigo: number;
  assunto: string;
  prioridade: string;
  detalhes: string;

  constructor(codigo: number, assunto: string, prioridade: string, detalhes: string) {
    this.codigo = codigo;
    this.assunto = assunto;
    this.prioridade = prioridade;
    this.detalhes = detalhes;
  }
}
