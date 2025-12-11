import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CustomJwtPayload } from '../models/auxiliars';
import { jwtDecode } from 'jwt-decode';
import { Credenciales } from '../models/dtos';
import { Observable } from 'rxjs';
import { URL_BASE } from '../environments/globals';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _http: HttpClient = inject(HttpClient);
  token: string | null = null;

  /**
   * Comprueba si el usuario está logueado.
   * Devuelve:
   *  - true: si existe un token válido y no caducado
   *  - false: si el token no existe, es inválido o está expirado
   */
  estaLogueado(): boolean {
    // Obtenemos token almacenado
    this.token = this.getTokenFromLocalStorage();

    // Si no hay token => cerrar sesión
    if (!this.token) {
      this.logout();
      return false;
    }

    let decoded: CustomJwtPayload;

    // Intentamos decodificar el token (si falla, es un token manipulado o corrupto)
    try {
      decoded = jwtDecode(this.token);
    } catch (error) {
      this.logout();
      return false;
    }

    // Verificamos si la fecha exp del token es válida (exp está en segundos → lo pasamos a ms)
    const tokenEsValido = decoded.exp && decoded.exp * 1000 > Date.now();

    if (tokenEsValido) {
      return true;
    }

    // Si expira → cerrar sesión
    this.logout();
    if (localStorage.getItem("token")) { 
      localStorage.removeItem("token"); 
    }

    return false;
  }

  //Obtiene el token desde localStorage.
  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem("token");
  }

  //Realiza login. Limpia cualquier token previo y envía las credenciales al endpoint de autenticación.
  login(datos: Credenciales): Observable<any> {
    this.logout();
    return this._http.post<any>(`${URL_BASE}authenticate`, datos);
  }

  //Elimina el token del localStorage.
  logout(): void {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
  }

  //Guarda el token en localStorage, eliminando cualquier token previo.
  setTokenInLocalStorage(token: string): void {
    this.logout();
    localStorage.setItem("token", token);
  }

  //Obtiene el nombre de usuario desde el token.
  getUsuarioFromToken(): string {
    this.token = this.getTokenFromLocalStorage();

    if (this.token) {
      try {
        const decoded: CustomJwtPayload = jwtDecode(this.token);
        return decoded.USUARIO;
      } catch (error) {
        return 'Desconocido';
      }
    }
    return 'El usuario no está logueado';
  }

  //Devuelve el rol del usuario según el token.
  getRolFromToken(): string {
    this.token = this.getTokenFromLocalStorage();

    if (this.token) {
      try {
        const decoded: CustomJwtPayload = jwtDecode(this.token);
        return decoded.ROL; //"[ROLE_USER]", "[ROLE_ADMIN]", "[ROLE_SUPER_ADMIN]"
      } catch (error) {
        return 'Desconocido';
      }
    }
    return 'El usuario no está logueado';
  }
}
