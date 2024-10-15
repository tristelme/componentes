// src/app/iniciosesion/iniciosesion.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  username: string = '';
  password: string = '';
   // Función que se ejecutará al enviar el formulario
   onLogin() {
    // Lógica de autenticación aquí
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
}
}