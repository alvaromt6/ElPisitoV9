import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poblacion } from '../models/entities';
import { URL_API } from '../environments/globals';

/**
 * Servicio para manejar operaciones HTTP relacionadas con Poblaciones.
 * Centraliza las llamadas a la API para obtener, crear y actualizar poblaciones.
 */
@Injectable({
  providedIn: 'root',
})
export class PoblacionService {

  private _http: HttpClient = inject(HttpClient);

  /**
   * Obtiene todas las poblaciones.
   */
  getPoblaciones(): Observable<Array<Poblacion>> {
    return this._http.get<Array<Poblacion>>(`${URL_API}poblaciones`);
  }

  /**
   * Obtiene las poblaciones activas.
   */
  getPoblacionesActivas(): Observable<Array<Poblacion>> {
    return this._http.get<Array<Poblacion>>(`${URL_API}poblaciones-activas`);
  }

  /**
   * Obtiene una población específica por su ID.
   * @param id ID de la población
   */
  getPoblacion(id: number): Observable<Poblacion> {
    return this._http.get<Poblacion>(`${URL_API}poblacion/${id}`);
  }

  /**
   * Añade una nueva población.
   * @param poblacion Objeto población a crear
   */
  addPoblacion(poblacion: Poblacion): Observable<Poblacion> {
    return this._http.post<Poblacion>(`${URL_API}poblacion`, poblacion);
  }

  /**
   * Actualiza una población existente.
   * @param poblacion Objeto población a actualizar
   */
  updatePoblacion(poblacion: Poblacion): Observable<Poblacion> {
    return this._http.put<Poblacion>(`${URL_API}poblacion`, poblacion);
  }
}
