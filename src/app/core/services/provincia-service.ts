import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia } from '../models/entities';
import { URL_API } from '../environments/globals';

/**
 * Servicio para manejar operaciones HTTP relacionadas con Provincias.
 * Centraliza las llamadas a la API para obtener, crear y actualizar provincias.
 */
@Injectable({
  providedIn: 'root',
})
export class ProvinciaService {

  private _http: HttpClient = inject(HttpClient);

  /**
   * Obtiene todas las provincias.
   */
  getProvincias(): Observable<Array<Provincia>> {
    return this._http.get<Array<Provincia>>(`${URL_API}provincias`);
  }

  /**
   * Obtiene las provincias activas.
   */
  getProvinciasActivas(): Observable<Array<Provincia>> {
    return this._http.get<Array<Provincia>>(`${URL_API}provincias-activas`);
  }

  /**
   * Obtiene una provincia específica por su ID.
   * @param id ID de la provincia
   */
  getProvincia(id: number): Observable<Provincia> {
    return this._http.get<Provincia>(`${URL_API}provincia/${id}`);
  }

  /**
   * Añade una nueva provincia.
   * @param provincia Objeto provincia a crear
   */
  addProvincia(provincia: Provincia): Observable<Provincia> {
    return this._http.post<Provincia>(`${URL_API}provincia`, provincia);
  }

  /**
   * Actualiza una provincia existente.
   * @param provincia Objeto provincia a actualizar
   */
  updateProvincia(provincia: Provincia): Observable<Provincia> {
    return this._http.put<Provincia>(`${URL_API}provincia`, provincia);
  }
}
