import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService, Credencial } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public credenciales: Credencial[] = [];

  constructor(public router: Router, private dataService: DataService) {
    this.retrieveData();
  }

  retrieveData() {
    this.credenciales = this.dataService.getCredenciales();
  }

  createUser() {
    const tipoID = (document.getElementById("tipoID") as HTMLSelectElement).value;
    const ID = (document.getElementById("ID") as HTMLInputElement).value;
    const nombre = (document.getElementById("name") as HTMLInputElement).value;
    const password = (document.getElementById("pass") as HTMLInputElement).value;

    // Validaciones adicionales
    if (ID.length < 6 || nombre.length < 2 || password.length < 8 || !/\d/.test(password)) {
      this.mostrarMensajeError('Por favor, completa todos los campos correctamente.');
      return;
    }

    const nuevasCredenciales: Credencial = {
      tipoID: tipoID,
      ID: ID,
      nombre: nombre,
      contraseña: password
    };

    this.credenciales.push(nuevasCredenciales);
    this.dataService.setCredenciales(this.credenciales);

    this.mostrarMensajeExito('Usuario registrado exitosamente');
    this.clearForm();
    this.router.navigateByUrl('/');
  }

  clearForm() {
    (document.getElementById("tipoID") as HTMLSelectElement).value = "";
    (document.getElementById("ID") as HTMLInputElement).value = "";
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("pass") as HTMLInputElement).value = "";
  }

  mostrarMensajeExito(mensaje: string) {
    Swal.fire({
      title: 'Éxito',
      text: mensaje,
      icon: 'success'
    });
  }

  mostrarMensajeError(mensaje: string) {
    Swal.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error'
    });
  }

  navegarLogin() {
    this.router.navigateByUrl('/');
  }
}
