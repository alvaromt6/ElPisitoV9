import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operacion } from '../models/entities';
import { URL_API } from '../environments/globals';

/**
 * Servicio para manejar operaciones HTTP relacionadas con Operaciones de inmueble.
 * Centraliza las llamadas a la API para obtener, crear y actualizar operaciones.
 */
@Injectable({
  providedIn: 'root',
})
export class OperacionService {

  private _http: HttpClient = inject(HttpClient);

  /**
   * Obtiene todas las operaciones.
   */
  getOperaciones(): Observable<Array<Operacion>> {
    return this._http.get<Array<Operacion>>(`${URL_API}operaciones`);
  }

  /**
   * Obtiene las operaciones activas.
   */
  getOperacionesActivas(): Observable<Array<Operacion>> {
    return this._http.get<Array<Operacion>>(`${URL_API}operaciones-activas`);
  }

  /**
   * Obtiene una operación específica por su ID.
   * @param id ID de la operación
   */
  getOperacion(id: number): Observable<Operacion> {
    return this._http.get<Operacion>(`${URL_API}operacion/${id}`);
  }

  /**
   * Añade una nueva operación.
   * @param operacion Objeto operación a crear
   */
  addOperacion(operacion: Operacion): Observable<Operacion> {
    return this._http.post<Operacion>(`${URL_API}operacion`, operacion);
  }

  /**
   * Actualiza una operación existente.
   * @param operacion Objeto operación a actualizar
   */
  updateOperacion(operacion: Operacion): Observable<Operacion> {
    return this._http.put<Operacion>(`${URL_API}operacion`, operacion);
  }
}
