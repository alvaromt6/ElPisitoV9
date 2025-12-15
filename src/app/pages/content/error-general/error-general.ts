import { Component, inject, OnInit } from '@angular/core';
import { ErrorStoreService } from '../../../core/services/error-store-service';
import { AuthService } from '../../../core/services/auth-service';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../../core/services/comunicacion-service';

@Component({
  selector: 'app-error-general',
  imports: [],
  templateUrl: './error-general.html',
  styleUrl: './error-general.css',
})
export class ErrorGeneral implements OnInit{

  status: number;
  message: string;
  
  private _router: Router = inject(Router);
  private _authService: AuthService = inject(AuthService);
  private _comunicacionService: ComunicacionService = inject(ComunicacionService);
  private _errorStoreService:ErrorStoreService = inject(ErrorStoreService);

  ngOnInit(): void {

    this.status = this._errorStoreService._errorStatus();
    this.message = this._errorStoreService._errorMessage();
    
    if(this.status === 401){
      this._authService.logout();
      this._comunicacionService.cambioLogin(false);
    }
  }

  login():void{
    this._router.navigate(['/auth/login']);
  }


}
