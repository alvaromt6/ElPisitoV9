import { Component, Input, OnInit } from '@angular/core';
import { ImagenInmueble, Inmueble } from '../../../core/models/entities';
import { URL_IMAGEN_INMUEBLE } from '../../../core/environments/globals';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carousel-ficha',
  imports: [NgClass],
  templateUrl: './carousel-ficha.html',
  styleUrl: './carousel-ficha.css',
})
export class CarouselFicha implements OnInit {



  @Input() datosInmueble:Inmueble;//Aquí están todos los datos del inmueble
  imagenes:Array<ImagenInmueble>=[];
  numeroImagenes:number;
  url:string=URL_IMAGEN_INMUEBLE;//http://localhost:8080/media/imagen/

  ngOnInit(): void {
    this.imagenes = this.datosInmueble.imagenes;
    this.numeroImagenes = this.imagenes.length;
  }


}
