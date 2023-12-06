import { Injectable } from '@angular/core';

export interface Credencial {
  tipoID: string;
  ID: string;
  nombre: string;
  contraseña: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private credenciales: Credencial[] = [];
  private nombre: string | null = localStorage.getItem('nombre') || null;
  private email: string | null = localStorage.getItem('email') || null;
  private tipoDocumento: string | null = localStorage.getItem('tipoDocumento') || null;
  private token: string | null = localStorage.getItem('token') || null;

  constructor() {
    this.retrieveData();
  }

  private retrieveData() {
    const credencialesString = localStorage.getItem('data');

    if (credencialesString) {
      this.credenciales = JSON.parse(credencialesString);
    }
  }

  setCredenciales(credenciales: Credencial[]) {
    this.credenciales = credenciales;
    localStorage.setItem('data', JSON.stringify(credenciales));
  }

  getCredenciales() {
    return this.credenciales;
  }

  autenticarUsuario(nombre: string, contraseña: string): boolean {
    // Implementa la lógica de autenticación según tus necesidades
    // Devuelve true si la autenticación es exitosa, de lo contrario, false
    return true;
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
    localStorage.setItem('nombre', nombre);
  }

  getNombre() {
    return this.nombre;
  }

  setEmail(email: string) {
    this.email = email;
    localStorage.setItem('email', email);
  }

  getEmail() {
    return this.email;
  }

  setTipoDocumento(tipoDocumento: string) {
    this.tipoDocumento = tipoDocumento;
    localStorage.setItem('tipoDocumento', tipoDocumento);
  }

  getTipoDocumento() {
    return this.tipoDocumento;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    return this.token;
  }
}
