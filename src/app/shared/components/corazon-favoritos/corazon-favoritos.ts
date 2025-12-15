import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoritosService } from '../../../core/services/favoritos-service';
import { AuthService } from '../../../core/services/auth-service';
import { ComunicacionService } from '../../../core/services/comunicacion-service';
import { InmuebleDTO } from '../../../core/models/dtos';

@Component({
  selector: 'app-corazon-favoritos',
  imports: [RouterLink],
  templateUrl: './corazon-favoritos.html',
  styleUrl: './corazon-favoritos.css',
})
export class CorazonFavoritos implements OnInit, OnDestroy {


  /////////////////////////////////////////////////
  nFases:number = 1;
  cargaCompletada:boolean = false;
  fasesCargadas:number = 0;
  /////////////////////////////////////////////////

  suscripcion:Subscription;

  private _favoritosService:FavoritosService = inject(FavoritosService);
  private _authService:AuthService = inject(AuthService);
  private _comunicacionService:ComunicacionService = inject(ComunicacionService);


  @Input() idInmueble:number;
  idUsuario:number;
  favoritosUsuario:Array<InmuebleDTO>=[];
  esFavorito:boolean;
  estaLogueado:boolean;//implica que tengo id de usuario

  ngOnInit(): void {

    this.suscripcion = this._comunicacionService.estadoLogin$.subscribe({

      next:(estado)=>{
      
        this.estaLogueado = estado;
        this.idUsuario = this._authService.getIdUsuarioFromToken();

          if(this.estaLogueado){
            this.getFavoritos();
          }else{
            this.faseCarga();
          }
      }
    });  
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }


  getFavoritos():void{

    this._favoritosService.getFavoritosId(this.idUsuario).subscribe({

      next:(datos)=>{
        this.favoritosUsuario = datos;
        this.esFavorito = this.favoritosUsuario.some( fav => fav.id === this.idInmueble);

      }
      ,
      error:(error)=>{}
      ,
      complete:()=>{this.faseCarga();}
    });

  }


  addFavorito():void{
    
    this._favoritosService.addFavorito(this.idUsuario,this.idInmueble).subscribe({

      next:(datos)=>{}
      ,
      error:(error)=>{}
      ,
      complete:()=>{this.esFavorito = true;}
    });
  }

  deleteFavorito():void{
    
    this._favoritosService.deleteFavorito(this.idUsuario,this.idInmueble).subscribe({

      next:(datos)=>{}
      ,
      error:(error)=>{}
      ,
      complete:()=>{this.esFavorito = false;}
    });

    
  }

  ///////////////////////////////////////////////////////
  faseCarga():void{

    this.fasesCargadas++;

    if(this.fasesCargadas == this.nFases){

      this.cargaCompletada = true;
    }
  }
  //////////////////////////////////////////////////////








}
