import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inmueble } from '../models/entities';
import { URL_API } from '../environments/globals';

/**
 * Servicio para manejar operaciones HTTP relacionadas con Inmuebles.
 * Centraliza las llamadas a la API para obtener, crear, actualizar y filtrar inmuebles.
 */
@Injectable({
  providedIn: 'root',
})
export class InmuebleService {
  
  private _http: HttpClient = inject(HttpClient);

  /**
   * Obtiene todos los inmuebles.
   */
  getInmuebles(): Observable<Array<Inmueble>> {
    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles`);
  }
  
  /**
   * Obtiene los inmuebles que están activos.
   */
  getInmueblesActivos(): Observable<Array<Inmueble>> {
    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles-activos`);
  }

  /**
   * Obtiene un inmueble específico por su ID.
   * @param id ID del inmueble
   */
  getInmueble(id: number): Observable<Inmueble> {
    return this._http.get<Inmueble>(`${URL_API}inmueble/${id}`);
  }

  /**
   * Añade un nuevo inmueble.
   * @param inmueble Objeto inmueble a crear
   */
  addInmueble(inmueble: Inmueble): Observable<Inmueble> {
    return this._http.post<Inmueble>(`${URL_API}inmueble`, inmueble);
  }

  /**
   * Actualiza un inmueble existente.
   * @param inmueble Objeto inmueble a actualizar
   */
  updateInmueble(inmueble: Inmueble): Observable<Inmueble> {
    return this._http.put<Inmueble>(`${URL_API}inmueble`, inmueble);
  }

  /**
   * Obtiene los inmuebles que se muestran en la portada.
   */
  getInmueblesPortada(): Observable<Array<Inmueble>> {
    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles-portada`);
  }

  /**
   * Obtiene los inmuebles de una inmobiliaria específica.
   * @param idInmobiliaria ID de la inmobiliaria
   */
  getInmueblesInmobiliaria(idInmobiliaria: number): Observable<Array<Inmueble>> {
    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles-inmobiliaria/${idInmobiliaria}`);
  }

  /**
   * Filtra inmuebles según tipo, población y operación.
   * @param idTipo ID del tipo de inmueble
   * @param idPoblacion ID de la población
   * @param idOperacion ID de la operación
   */
  getInmueblesFinder(idTipo: number, idPoblacion: number, idOperacion: number): Observable<Array<Inmueble>> {
    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles/${idTipo}/${idPoblacion}/${idOperacion}`);
  }
}
