import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Preloader } from "../../../shared/components/preloader/preloader";
import { InmuebleService } from '../../../core/services/inmueble-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunicacionService } from '../../../core/services/comunicacion-service';
import { AuthService } from '../../../core/services/auth-service';
import { Subscription } from 'rxjs';
import { Inmueble } from '../../../core/models/entities';
import { URL_IMAGEN_INMUEBLE } from '../../../core/environments/globals';
import { UsuarioDataYState } from '../../../core/models/auxiliars';
import { ParentesisPipe } from "../../../shared/pipes/parentesis-pipe";
import { EurosPipe } from "../../../shared/pipes/euros-pipe";
import { MetrosCuadradosPipe } from "../../../shared/pipes/metros-cuadrados-pipe";
import { MinusculasPipe } from "../../../shared/pipes/minusculas-pipe";
import { AmuebladoPipe } from "../../../shared/pipes/amueblado-pipe";
import { PlazasPipe } from "../../../shared/pipes/plazas-pipe";
import { SiNoPipe } from "../../../shared/pipes/si-no-pipe";

@Component({
  selector: 'app-detail-inmueble',
  imports: [Preloader, ParentesisPipe, EurosPipe, MetrosCuadradosPipe, MinusculasPipe, AmuebladoPipe, PlazasPipe, SiNoPipe],
  templateUrl: './detail-inmueble.html',
  styleUrl: './detail-inmueble.css',
})
export class DetailInmueble implements OnInit, OnDestroy {

  /////////////////////////////////////////////////
  nFases: number = 1;
  cargaCompletada: boolean = false;
  fasesCargadas: number = 0;
  /////////////////////////////////////////////////


  private _inmuebleService: InmuebleService = inject(InmuebleService);
  private _router: Router = inject(Router);
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _comunicacionService: ComunicacionService = inject(ComunicacionService);
  private _authService: AuthService = inject(AuthService);

  id: number;
  suscripcion: Subscription;
  suscripcion2: Subscription;
  datos: Inmueble;
  urlImagen: string = URL_IMAGEN_INMUEBLE;
  /* banners:Array<BannerHorizontal> = []; */

  datosUsuarioYEstado: UsuarioDataYState = {};


  ngOnInit(): void {

    this.getDatos();

  }

  ngOnDestroy(): void {

    //De esta forma destruimos el Observable Hot liberando memoria
    this.suscripcion.unsubscribe();
    this.suscripcion2.unsubscribe();

  }


  getDatos(): void {

    this.suscripcion = this._route.params.subscribe({

      next: (params) => { this.id = params['id'] } // en la ruta lo tenemos que llamar id

    }); //Observable Hot. Es necesario darle un tratamiento de destrucción cuando el componente se desmonte


    this.suscripcion2 = this._comunicacionService.estadoLogin$.subscribe({
      next: (datos) => { 
                                                              // El simbolo "!" significa que juramos no devolver null
        this.datosUsuarioYEstado.id = this._authService.getIdUsuarioFromToken()!;
        this.datosUsuarioYEstado.rol = this._authService.getRolFromToken()!;
        this.datosUsuarioYEstado.logueado = datos;
      }
    });


    this._inmuebleService.getInmueble(this.id).subscribe({

      next: (datos) => {

        this.datos = datos;

      }
      ,
      error: (error) => {}
      ,
      complete: () => { this.faseCarga() }

    });

  }//end getDatos

  ///////////////////////////////////////////////////////
  faseCarga(): void {

    this.fasesCargadas++;

    if (this.fasesCargadas == this.nFases) {

      this.cargaCompletada = true;
    }
  }
  //////////////////////////////////////////////////////

}