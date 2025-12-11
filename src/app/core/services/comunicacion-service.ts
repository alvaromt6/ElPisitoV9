import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class ComunicacionService {

  /*
  _authService utilizamos _ para las variables que inyectan en el codigo

  estadoLogueo$ utilizamos $ para indicar que es una variable observable

  */

  private _authService:AuthService = inject(AuthService);

  estadoLogin:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._authService.estaLogueado());

  estadoLogin$: Observable<boolean> = this.estadoLogin.asObservable(); //hot

  cambioLogin(nuevoEstado: boolean): void{
    this.estadoLogin.next(nuevoEstado) //.next es un método de BehaviorSubject

  }


  
}
