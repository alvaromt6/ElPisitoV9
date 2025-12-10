import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from '../models/entities';
import { URL_API } from '../environments/globals';

/**
 * Servicio para manejar operaciones HTTP relacionadas con Tipos de inmueble.
 * Centraliza las llamadas a la API para obtener, crear y actualizar tipos.
 */
@Injectable({
  providedIn: 'root',
})
export class TipoService {

  private _http: HttpClient = inject(HttpClient);

  /**
   * Obtiene todos los tipos de inmueble.
   */
  getTipos(): Observable<Array<Tipo>> {
    return this._http.get<Array<Tipo>>(`${URL_API}tipos`);
  }

  /**
   * Obtiene los tipos activos de inmueble.
   */
  getTiposActivos(): Observable<Array<Tipo>> {
    return this._http.get<Array<Tipo>>(`${URL_API}tipos-activos`);
  }

  /**
   * Obtiene un tipo específico por su ID.
   * @param id ID del tipo
   */
  getTipo(id: number): Observable<Tipo> {
    return this._http.get<Tipo>(`${URL_API}tipo/${id}`);
  }

  /**
   * Añade un nuevo tipo de inmueble.
   * @param tipo Objeto tipo a crear
   */
  addTipo(tipo: Tipo): Observable<Tipo> {
    return this._http.post<Tipo>(`${URL_API}tipo`, tipo);
  }

  /**
   * Actualiza un tipo de inmueble existente.
   * @param tipo Objeto tipo a actualizar
   */
  updateTipo(tipo: Tipo): Observable<Tipo> {
    return this._http.put<Tipo>(`${URL_API}tipo`, tipo);
  }
}
