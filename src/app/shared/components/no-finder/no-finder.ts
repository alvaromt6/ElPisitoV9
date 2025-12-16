import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { FinderData } from '../../../core/models/auxiliars';
import { TipoService } from '../../../core/services/tipo-service';
import { PoblacionService } from '../../../core/services/poblacion-service';
import { OperacionService } from '../../../core/services/operacion-service';
import { Operacion, Poblacion, Tipo } from '../../../core/models/entities';
import { Preloader } from "../preloader/preloader";


@Component({
  selector: 'app-no-finder',
  imports: [Preloader],
  templateUrl: './no-finder.html',
  styleUrl: './no-finder.css',
})
export class NoFinder implements OnInit {

  /////////////////////////////////////////////////
  nFases: number = 3;
  cargaCompletada: boolean = false;
  fasesCargadas: number = 0;
  ///////////////////////////////////////////////

  private _tipoService: TipoService = inject(TipoService);
  private _poblacionService: PoblacionService = inject(PoblacionService);
  private _operacionService: OperacionService = inject(OperacionService);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input() datos: FinderData; // Recibe los datos de búsqueda para mostrar en el mensaje id de tipo, población y operación

  tipo: Tipo;
  poblacion: Poblacion;
  operacion: Operacion;

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    this._tipoService.getTipo(this.datos.idTipo).subscribe({
      next: (datos) => {
        this.tipo = datos;
      },
      error: (error) => {
        console.error('Error al obtener el tipo:', error);
      },
      complete: () => { 
        this.faseCarga();
       }
    });

    this._poblacionService.getPoblacion(this.datos.idPoblacion).subscribe({
      next: (datos) => {
        this.poblacion = datos;
      },
      error: (error) => {
        console.error('Error al obtener la población:', error);
      },
      complete: () => { 
        this.faseCarga();
       }
    });

    this._operacionService.getOperacion(this.datos.idOperacion).subscribe({
      next: (datos) => {
        this.operacion = datos;
      },
      error: (error) => {
        console.error('Error al obtener la operación:', error);
      },
      complete: () => { 
        this.faseCarga();
       }
    });
    
  }

  ///////////////////////////////////////////////////////
  faseCarga(): void {
    this.fasesCargadas++;

    if (this.fasesCargadas == this.nFases) {
      this.cargaCompletada = true;
      this._cdr.detectChanges();
    }
  }
  ////////////////////////////////////////////////////////

}
