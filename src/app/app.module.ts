import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registrar/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfilUser/perfil.component';
import { OpcionesEmpleoComponent } from './empleo/opciones-empleo.component';
import { AdminComponent } from './administrador/admin.component';
import { DataService } from './data.service'; // Ajusta la ruta según tu estructura

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PerfilComponent,
    OpcionesEmpleoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
