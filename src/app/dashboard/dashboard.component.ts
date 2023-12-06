import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(public router: Router) {}

  ngOnInit() {
    // Recuperar las empresas desde LocalStorage al inicializar el componente
    this.actualizarEmpresasDesdeLocalStorage();
  }

  actualizarEmpresasDesdeLocalStorage() {
    const empresasStr = localStorage.getItem('empresas');
    this.empresas = empresasStr ? JSON.parse(empresasStr) : [];
  }

  navegarLogin() {
    // Mostrar la alerta al cerrar sesión
    Swal.fire({
      title: '¡Hasta luego!',
      text: 'Has cerrado sesión, vuelve pronto.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Redirigir a la página de inicio de sesión después de cerrar sesión
      this.router.navigateByUrl('/');
    });
  }

}

interface Empresa {
  nombre: string;
  descripcion: string;
  publicado: Date;
}
