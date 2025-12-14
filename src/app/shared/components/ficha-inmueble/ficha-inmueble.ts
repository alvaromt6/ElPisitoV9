import { Component, Input } from '@angular/core';
import { Inmueble } from '../../../core/models/entities';
import { RouterLink } from '@angular/router';
import { ParentesisPipe } from "../../pipes/parentesis-pipe";
import { EurosPipe } from "../../pipes/euros-pipe";
import { BotonAdmin } from "../boton-admin/boton-admin";
import { UsuarioDataYState } from '../../../core/models/auxiliars';
import { CorazonFavoritos } from "../corazon-favoritos/corazon-favoritos";
import { CarouselFicha } from "../carousel-ficha/carousel-ficha";

@Component({
  selector: 'app-ficha-inmueble',
  imports: [RouterLink, ParentesisPipe, EurosPipe, BotonAdmin, CorazonFavoritos, CarouselFicha],
  templateUrl: './ficha-inmueble.html',
  styleUrl: './ficha-inmueble.css',
})
export class FichaInmueble {

  @Input() datos: Inmueble;
  @Input() datosUsuario: UsuarioDataYState;

}
