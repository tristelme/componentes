  import { NgModule } from '@angular/core';  
  import { BrowserModule } from '@angular/platform-browser';
  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app-routing.module';
  import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { IniciosesionComponent } from './modules/autenticacion/iniciosesion/iniciosesion.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './modules/autenticacion/registro/registro.component';
  @NgModule({
    declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent,
    IniciosesionComponent,
    RegistroComponent
    ],
    imports: [
     BrowserModule,
      AppRoutingModule,
      MatCardModule,
      BrowserAnimationsModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
