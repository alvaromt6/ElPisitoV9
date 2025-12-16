import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FinderData } from '../../../core/models/auxiliars';

@Component({
  selector: 'app-detail-finder',
  imports: [],
  templateUrl: './detail-finder.html',
  styleUrl: './detail-finder.css',
})
export class DetailFinder implements OnInit, OnDestroy {
private _route: ActivatedRoute = inject(ActivatedRoute);

suscripcion: Subscription;

datosFinder: FinderData = {
    idTipo: 0,
    idPoblacion: 0,
    idOperacion: 0
};

ngOnInit(): void {
    this.getDatos();
}

ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
}

getDatos(): void {
    this.suscripcion = this._route.params.subscribe({
        next: (params) => {
            this.datosFinder.idTipo = params['idTipo'];
            this.datosFinder.idPoblacion = params['idPoblacion'];
            this.datosFinder.idOperacion = params['idOperacion'];
        }
    });
}


}
