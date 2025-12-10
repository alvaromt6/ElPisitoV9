import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritoDTO, InmuebleDTO } from '../models/dtos';
import { URL_API } from '../environments/globals';
import { Inmueble } from '../models/entities';

/**
 * Servicio para manejar los inmuebles favoritos de los usuarios.
 * Permite obtener, añadir y eliminar favoritos.
 */
@Injectable({
  providedIn: 'root',
})
export class FavoritosService {

  private _http: HttpClient = inject(HttpClient);

  /**
   * Devuelve los IDs de los inmuebles favoritos de un usuario.
   * @param idUsuario ID del usuario
   */
  getFavoritosId(idUsuario: number): Observable<Array<InmuebleDTO>> {
    return this._http.get<Array<InmuebleDTO>>(`${URL_API}usuario-inmueble/${idUsuario}`);
  }

  /**
   * Devuelve los datos completos de los inmuebles favoritos de un usuario.
   * @param idUsuario ID del usuario
   */
  getFavoritosCompleto(idUsuario: number): Observable<Array<Inmueble>> {
    return this._http.get<Array<Inmueble>>(`${URL_API}usuario-inmueble-completo/${idUsuario}`);
  }

  /**
   * Añade un inmueble a los favoritos de un usuario.
   * @param idUsuario ID del usuario
   * @param idInmueble ID del inmueble
   */
  addFavorito(idUsuario: number, idInmueble: number): Observable<FavoritoDTO> {
    const params = new HttpParams()
      .set('usuid', idUsuario)
      .set('inmid', idInmueble);

    return this._http.post<FavoritoDTO>(`${URL_API}usuario-inmueble`, null, { params });
  }

  /**
   * Elimina un inmueble de los favoritos de un usuario.
   * @param idUsuario ID del usuario
   * @param idInmueble ID del inmueble
   */
  deleteFavorito(idUsuario: number, idInmueble: number): Observable<any> {
    return this._http.delete<any>(`${URL_API}usuario-inmueble/${idUsuario}/${idInmueble}`);
  }
}
