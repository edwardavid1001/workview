import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// Agrega la interfaz Empresa aquí
interface Empresa {
  id: number;
  nombre: string;
  descripcion: string;
  publicado: Date;
  logo: string; // Agrega esta línea
}

@Component({
  selector: 'app-opciones-empleo',
  templateUrl: './opciones-empleo.component.html',
  styleUrls: ['./opciones-empleo.component.css']
})
export class OpcionesEmpleoComponent implements OnInit {
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

  aplicarAEmpresa(empresa: Empresa) {
    // Puedes personalizar este mensaje según tus necesidades
    Swal.fire({
      title: '¡Felicidades!',
      text: `Has aplicado a ${empresa.nombre} correctamente.`,
      icon: 'success',
      confirmButtonText: 'OK'
    });

    // Aquí podrías implementar la lógica para notificar al administrador
    // Por ejemplo, podrías enviar una notificación al administrador mediante algún servicio
    // y almacenar las aplicaciones en LocalStorage o en tu backend.

    // Ejemplo de cómo podrías almacenar las aplicaciones en LocalStorage (mejorar según tus necesidades):
    const aplicacionesStr = localStorage.getItem('aplicaciones');
    const aplicaciones = aplicacionesStr ? JSON.parse(aplicacionesStr) : [];
    aplicaciones.push({ empresaId: empresa.id, fecha: new Date() });
    localStorage.setItem('aplicaciones', JSON.stringify(aplicaciones));
  }
}
