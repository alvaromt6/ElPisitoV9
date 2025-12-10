import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/entities';
import { URL_API } from '../environments/globals';

/**
 * Servicio para manejar operaciones HTTP relacionadas con Usuarios.
 * Centraliza las llamadas a la API para obtener, crear y actualizar usuarios.
 */
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private _http: HttpClient = inject(HttpClient);

  /**
   * Obtiene todos los usuarios.
   */
  getUsuarios(): Observable<Array<Usuario>> {
    return this._http.get<Array<Usuario>>(`${URL_API}usuarios`);
  }

  /**
   * Obtiene los usuarios activos.
   */
  getUsuariosActivos(): Observable<Array<Usuario>> {
    return this._http.get<Array<Usuario>>(`${URL_API}usuarios-activos`);
  }

  /**
   * Obtiene un usuario específico por su ID.
   * @param id ID del usuario
   */
  getUsuario(id: number): Observable<Usuario> {
    return this._http.get<Usuario>(`${URL_API}usuario/${id}`);
  }

  /**
   * Añade un nuevo usuario.
   * @param usuario Objeto usuario a crear
   */
  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this._http.post<Usuario>(`${URL_API}usuario`, usuario);
  }

  /**
   * Actualiza un usuario existente.
   * @param usuario Objeto usuario a actualizar
   */
  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this._http.put<Usuario>(`${URL_API}usuario`, usuario);
  }
}
