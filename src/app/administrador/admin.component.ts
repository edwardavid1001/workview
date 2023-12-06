import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // Lista de empresas
  empresas: Empresa[] = [
    { nombre: 'CueTracker', descripcion: 'Empresa CueTracker busca un desarrollador web con experiencia en HTML, CSS, y JavaScript.', publicado: new Date('2023-01-01') },
    { nombre: 'BlackTech', descripcion: 'Empresa BlackTech busca maestro', publicado: new Date('2023-01-15') },
    { nombre: 'TravelIn', descripcion: 'Empresa Travel In busca asesor de ventas con 1 año de experiencia', publicado: new Date('2023-01-10') },
  ];

  // Variables para agregar nueva empresa
  nuevaEmpresa: Empresa = {
    nombre: '',
    descripcion: '',
    publicado: new Date()
  };

  // Asegúrate de incluir el módulo Router en el constructor
  constructor(private router: Router) {}

  // Método para mostrar alertas
  mostrarAlerta(title: string, text: string, icon: 'success' | 'error') {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'OK'
    });
  }

  // Método para agregar una nueva empresa
  agregarEmpresa() {
    if (this.nuevaEmpresa.nombre.trim() !== '' && this.nuevaEmpresa.descripcion.trim() !== '') {
      this.nuevaEmpresa.publicado = new Date(); // Establecer la fecha actual
      this.empresas.push({ ...this.nuevaEmpresa }); // Agregar nueva empresa
      this.limpiarNuevaEmpresa(); // Limpiar el formulario
      this.actualizarEmpresasEnLocalStorage(); // Actualizar empresas en LocalStorage
      this.mostrarAlerta('Éxito', 'Nueva empresa agregada con éxito.', 'success');
    } else {
      this.mostrarAlerta('Error', 'Por favor, completa todos los campos.', 'error');
    }
  }

  // Método para limpiar el formulario de nueva empresa
  limpiarNuevaEmpresa() {
    this.nuevaEmpresa = { nombre: '', descripcion: '', publicado: new Date() };
  }

  // Método para actualizar las empresas en LocalStorage
  actualizarEmpresasEnLocalStorage() {
    localStorage.setItem('empresas', JSON.stringify(this.empresas));
  }

  // Navegar al cerrar sesión
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
