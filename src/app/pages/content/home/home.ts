import { Component } from '@angular/core';
import { ListInmueblesPortada } from "../../../shared/components/list-inmuebles-portada/list-inmuebles-portada";
import { ContenedorBanners } from "../../../shared/components/contenedor-banners/contenedor-banners";
import { Finder } from "../../../shared/components/finder/finder";

@Component({
  selector: 'app-home',
  imports: [ListInmueblesPortada, ContenedorBanners, Finder],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
