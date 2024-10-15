// src/app/modules/autenticacion/autenticacion.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AutenticacionRoutingModule } from './autenticacion-routing.module'; // Importa tu módulo de rutas
import { RegistroComponent } from './registro/registro.component'; // Importa el componente Registro

@NgModule({
  declarations: [
    RegistroComponent, // Declara RegistroComponent
    // otros componentes...
  ],
  imports: [
    CommonModule,
    FormsModule, // Asegúrate de agregar FormsModule aquí
    AutenticacionRoutingModule // Agrega tu módulo de rutas
    // otros módulos...
  ],
})
export class AutenticacionModule { }
