import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { InmuebleService } from '../../../core/services/inmueble-service';
import { Inmueble } from '../../../core/models/entities';
import { FichaInmueble } from "../ficha-inmueble/ficha-inmueble";
import { Preloader } from "../preloader/preloader";
import { UsuarioDataYState } from '../../../core/models/auxiliars';
import { ComunicacionService } from '../../../core/services/comunicacion-service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-list-inmuebles-portada',
  imports: [FichaInmueble, Preloader],
  templateUrl: './list-inmuebles-portada.html',
  styleUrl: './list-inmuebles-portada.css',
})
export class ListInmueblesPortada implements OnInit {

  /////////////////////////////////////////////////
  nFases:number = 1;
  cargaCompletada:boolean = false;
  fasesCargadas:number = 0;
  /////////////////////////////////////////////////

  suscripcion: Subscription;

  inmuebles: Array<Inmueble> =[];

  datosUsuarioYEstado: UsuarioDataYState = {}

  private _comunicacionService: ComunicacionService = inject(ComunicacionService);
  private _authService: AuthService = inject(AuthService);
  private _inmuebleService: InmuebleService = inject(InmuebleService);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {

    this.suscripcion = this._comunicacionService.estadoLogin$.subscribe({
      next: (estado) => {

        this.datosUsuarioYEstado.id = this._authService.getIdUsuarioFromToken();
        this.datosUsuarioYEstado.rol = this._authService.getRolFromToken();
        this.datosUsuarioYEstado.logueado = estado;
      }

    });
    this.getDatos();
  };
  
  getDatos():void{

        this._inmuebleService.getInmueblesPortada().subscribe({

      next: (datos) => {
        //console.log(datos)
        this.inmuebles = datos;
      },
      error: (error) => {
      
      },
      complete: () => {
      this.faseCarga();
      }

        })
  }
  ///////////////////////////////////////////////////////
  faseCarga():void{

    this.fasesCargadas++;

    if(this.fasesCargadas == this.nFases){

      this.cargaCompletada = true;
      this._cdr.detectChanges();
    }
  }
  //////////////////////////////////////////////////////

}