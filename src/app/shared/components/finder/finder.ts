import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Preloader } from "../preloader/preloader";
import { PoblacionService } from '../../../core/services/poblacion-service';
import { TipoService } from '../../../core/services/tipo-service';
import { OperacionService } from '../../../core/services/operacion-service';
import { Router } from '@angular/router';
import { Operacion, Poblacion, Tipo } from '../../../core/models/entities';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-finder',
  imports: [FormsModule, Preloader],
  templateUrl: './finder.html',
  styleUrl: './finder.css',
})
export class Finder implements OnInit {
  /////////////////////////////////////////////////
  nFases: number = 3;
  cargaCompletada: boolean = false;
  fasesCargadas: number = 0;
  /////////////////////////////////////////////////

  private _tipoService: TipoService = inject(TipoService);
  private _poblacionService: PoblacionService = inject(PoblacionService);
  private _operacionService: OperacionService = inject(OperacionService);
  private _router: Router = inject(Router);

  tipos: Array<Tipo>;
  poblaciones: Array<Poblacion>;
  operaciones: Array<Operacion>;

  tipoElegido: number;
  poblacionElegida: number;
  operacionElegida: number;

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    this._poblacionService.getPoblacionesActivas().subscribe({
      next: (datos) => {
        this.poblaciones = datos;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => { this.faseCarga(); }
    });

    this._tipoService.getTiposActivos().subscribe({
      next: (datos) => {
        this.tipos = datos;
      },
      error: (error) => {},
      complete: () => { this.faseCarga(); }
    });

    this._operacionService.getOperacionesActivas().subscribe({
      next: (datos) => {
        this.operaciones = datos;
      },
      error: (error) => {},
      complete: () => { this.faseCarga(); }
    });
  }

  find(): void {
    this._router.navigate(['/detail-finder', this.tipoElegido, this.poblacionElegida, this.operacionElegida]);
  }

  ///////////////////////////////////////////////////////
  faseCarga(): void {
    this.fasesCargadas++;

    if (this.fasesCargadas == this.nFases) {
      this.cargaCompletada = true;
    }
  }
  ///////////////////////////////////////////////////////
}
