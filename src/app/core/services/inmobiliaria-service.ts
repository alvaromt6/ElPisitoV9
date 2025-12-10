import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inmobiliaria } from '../models/entities';
import { URL_API } from '../environments/globals';

/**
 * Servicio para manejar operaciones HTTP relacionadas con Inmobiliaria.
 * Centraliza las llamadas a la API para obtener, crear y actualizar inmobiliarias.
 */
@Injectable({
  providedIn: 'root',
})
export class InmobiliariaService {

  private _http: HttpClient = inject(HttpClient);

  /**
   * Obtiene todas las inmobiliarias.
   */
  getInmobiliarias(): Observable<Array<Inmobiliaria>> {
    return this._http.get<Array<Inmobiliaria>>(`${URL_API}inmobiliarias`);
  }

  /**
    * Obtiene los inmuebles que están activos.
   */
  getInmobiliariasActivos(): Observable<Array<Inmobiliaria>> {
    return this._http.get<Array<Inmobiliaria>>(`${URL_API}inmobiliarias-activos`);
  }

  /**
   * Obtiene una inmobiliaria específica por su ID.
   * @param id ID de la inmobiliaria
   */
  getInmobiliaria(id: number): Observable<Inmobiliaria> {
    return this._http.get<Inmobiliaria>(`${URL_API}inmobiliaria/${id}`);
  }

  /**
   * Añade una nueva inmobiliaria.
   * @param inmobiliaria Objeto inmobiliaria a crear
   */
  addInmobiliaria(inmobiliaria: Inmobiliaria): Observable<Inmobiliaria> {
    return this._http.post<Inmobiliaria>(`${URL_API}inmobiliaria`, inmobiliaria);
  }

  /**
   * Actualiza una inmobiliaria existente.
   * @param inmobiliaria Objeto inmobiliaria a actualizar
   */
  updateInmobiliaria(inmobiliaria: Inmobiliaria): Observable<Inmobiliaria> {
    return this._http.put<Inmobiliaria>(`${URL_API}inmobiliaria`, inmobiliaria);
  }
}
