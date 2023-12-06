import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registrar/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfilUser/perfil.component';
import { OpcionesEmpleoComponent } from './empleo/opciones-empleo.component';
import { AdminComponent } from './administrador/admin.component'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: PerfilComponent }, 
  { path: 'opciones-empleo', component: OpcionesEmpleoComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
