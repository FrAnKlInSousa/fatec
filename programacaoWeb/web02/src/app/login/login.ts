import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  login: string = '';
  password: string = '';
  mensagem: string = '';
  database: { login: string; password: string }[] = [
    { login: 'email@gmail.com', password: '12345' },
    { login: 'test@gmail.com', password: '555' },
  ];
  constructor(private router: Router) {}
  public entrar() {
    const usuario = this.database.find(
      (u) => u.login === this.login && u.password === this.password,
    );
    if (this.login.length == 0) {
      this.mensagem = 'Informe o email.';
    } else if (!usuario) {
      this.mensagem = 'Email ou senha inválidos.';
    } else {
      this.mensagem = '';
      this.router.navigate(['/contato']);
    }
  }
}
