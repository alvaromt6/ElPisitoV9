import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComunicacionService } from '../../../core/services/comunicacion-service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-menu-principal',
  imports: [RouterLink],
  templateUrl: './menu-principal.html',
  styleUrl: './menu-principal.css',
})
export class MenuPrincipal implements OnInit, OnDestroy{
  /*
    -Se suscribe al estado de login al iniciar el componente (ngOnInit).

    -Obtiene usuario y rol desde AuthService si está logueado.

    -Cancela la suscripción al salir del componente (ngOnDestroy) para evitar memory leaks.
  */

  estaLogueado: boolean;
  suscripcion: Subscription;
  usuario: string;
  rol: string;
  private _comunicacionService: ComunicacionService = inject(ComunicacionService);
  private _authService: AuthService = inject(AuthService);

  ngOnInit(): void {
    this.suscripcion = 
      this._comunicacionService.estadoLogin$.subscribe({
        next: (estado) => {
          this.estaLogueado = estado
          if(this.estaLogueado){
            this.usuario = this._authService.getUsuarioFromToken();
            this.rol = this._authService.getRolFromToken();
          }
        }
      })
  }
  
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

}
