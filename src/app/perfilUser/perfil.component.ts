import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nombre: string = this.dataService.getNombre() || '';
  email: string = this.dataService.getEmail() || '';
  password: string = '';
  tipoDocumento: string = this.dataService.getTipoDocumento() || '';

  constructor(private router: Router, private dataService: DataService) {}

  guardarDatos() {
    if (this.nombre && this.email && this.tipoDocumento !== undefined) {
      this.dataService.setNombre(this.nombre);
      this.dataService.setEmail(this.email);
      this.dataService.setTipoDocumento(this.tipoDocumento);

      if (this.password) {
        this.dataService.setToken(this.password);
      }

      this.mostrarMensajeExito('Los cambios se han guardado correctamente.');
      this.cerrarSesionYIniciarNueva();
    } else {
      this.mostrarMensajeError('Por favor, completa todos los campos correctamente.');
    }
  }

  cerrarSesionYIniciarNueva() {
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }

  mostrarMensajeExito(mensaje: string) {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: mensaje,
      showConfirmButton: false,
      timer: 2000
    });
  }

  mostrarMensajeError(mensaje: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: mensaje,
      showConfirmButton: true
    });
  }

  navegarLogin() {
    Swal.fire({
      title: 'Hasta luego!',
      text: 'Has cerrado sesión, vuelve pronto.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      this.router.navigateByUrl('/');
    });
  }
}
