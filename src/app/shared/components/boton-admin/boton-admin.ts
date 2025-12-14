import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boton-admin',
  imports: [RouterLink],
  templateUrl: './boton-admin.html',
  styleUrl: './boton-admin.css',
})
export class BotonAdmin {

  @Input() idInmueble:number;

}
