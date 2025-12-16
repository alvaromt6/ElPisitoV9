import { ChangeDetectorRef, Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FichaInmueble } from "../ficha-inmueble/ficha-inmueble";
import { Preloader } from "../preloader/preloader";
import { FinderData, UsuarioDataYState } from '../../../core/models/auxiliars';
import { InmuebleService } from '../../../core/services/inmueble-service';
import { ComunicacionService } from '../../../core/services/comunicacion-service';
import { AuthService } from '../../../core/services/auth-service';
import { Inmueble } from '../../../core/models/entities';
import { Subscription } from 'rxjs';
import { ContenedorBanners } from "../contenedor-banners/contenedor-banners";
import { NoFinder } from "../no-finder/no-finder";

@Component({
  selector: 'app-list-inmuebles-finder',
  imports: [FichaInmueble, Preloader, ContenedorBanners, NoFinder],
  templateUrl: './list-inmuebles-finder.html',
  styleUrl: './list-inmuebles-finder.css',
})
export class ListInmueblesFinder implements OnInit, OnDestroy {

  /////////////////////////////////////////////////
  nFases: number = 1;
  cargaCompletada: boolean = false;
  fasesCargadas: number = 0;
  ///////////////////////////////////////////////

  @Input() datos: FinderData;

  private _inmuebleService: InmuebleService = inject(InmuebleService);
  private _comunicacionService: ComunicacionService = inject(ComunicacionService);
  private _authService: AuthService = inject(AuthService);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  inmuebles: Array<Inmueble>;
  suscripcion: Subscription;

  datosUsuarioYEstado: UsuarioDataYState;

  ngOnInit(): void {
    this.suscripcion = this._comunicacionService.estadoLogin$.subscribe({
      next: (datos) => {
        this.datosUsuarioYEstado.id = this._authService.getIdUsuarioFromToken()!;
        this.datosUsuarioYEstado.rol = this._authService.getRolFromToken();
        this.datosUsuarioYEstado.logueado = datos;
      }
    });
    this.getDatos();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  getDatos(): void {
    this._inmuebleService.getInmueblesFinder(this.datos.idTipo, this.datos.idPoblacion, this.datos.idOperacion).subscribe({
      next: (datos) => {
        this.inmuebles = datos;
      },
      error: (error) => { 
        console.error('Error al obtener los inmuebles del finder:', error);
      },
      complete: () => { 
        this.faseCarga(); 
      }
    });
  }

  /////////////////////////////////////////////
  faseCarga(): void {
    this.fasesCargadas++;

    if (this.fasesCargadas == this.nFases) {
      this.cargaCompletada = true;
      this._cdr.detectChanges();
    }
  }
  /////////////////////////////////////////////
}
