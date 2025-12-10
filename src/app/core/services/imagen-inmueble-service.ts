import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_IMAGEN_INMUEBLE } from '../environments/globals';

/**
 * Servicio para manejar las operaciones relacionadas con las imágenes de los inmuebles.
 * Permite subir y eliminar imágenes desde el almacenamiento del backend.
 */
@Injectable({
  providedIn: 'root',
})
export class ImagenInmuebleService {

  private _http: HttpClient = inject(HttpClient);

  /**
   * Sube una imagen asociada a un inmueble específico.
   * @param formData FormData que contiene la imagen
   * @param idInmueble ID del inmueble al que se asocia la imagen
   */
  uploadImagenInmueble(formData: FormData, idInmueble: number): Observable<any> {
    return this._http.post<any>(`${URL_IMAGEN_INMUEBLE}${idInmueble}`, formData);
  }

  /**
   * Elimina una imagen de un inmueble.
   * @param idImagen ID de la imagen a eliminar
   */
  deleteImagenInmueble(idImagen: number): Observable<any> {
    return this._http.delete<any>(`${URL_IMAGEN_INMUEBLE}${idImagen}`);
  }

  // NOTA: Otros métodos comunes de CRUD de imágenes no son necesarios a nivel de cliente,
  // ya que la lógica principal se gestiona en el backend.
}
