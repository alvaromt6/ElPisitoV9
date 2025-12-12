import { Component, inject, OnInit } from '@angular/core';
import { ErrorStoreService } from '../../../core/services/error-store-service';

@Component({
  selector: 'app-error-general',
  imports: [],
  templateUrl: './error-general.html',
  styleUrl: './error-general.css',
})
export class ErrorGeneral implements OnInit{

  status: number;
  message: string;
  
  private _errorStoreService:ErrorStoreService = inject(ErrorStoreService);

  ngOnInit(): void {

    this.status = this._errorStoreService._errorStatus();
    this.message = this._errorStoreService._errorMessage();
  }



}
