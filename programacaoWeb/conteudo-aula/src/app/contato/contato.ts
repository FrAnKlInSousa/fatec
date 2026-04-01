import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  public alerta: string = '';

  public enviar() {
    this.alerta = 'Email enviado.';
  }
}
