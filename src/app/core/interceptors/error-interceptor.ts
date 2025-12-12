import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ErrorStoreService } from '../services/error-store-service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const _errorStoreService = inject(ErrorStoreService);
  const _router = inject(Router);

  return next(req).pipe(

    catchError((err: HttpErrorResponse) => {

      // Guardamos el error en el store
      _errorStoreService.setErrorStatus(err.error.status);
      _errorStoreService.setErrorMessage(err.error.message);
      // Redirigir a una ruta específica
      _router.navigate(['/error']);

      // Re-lanzamos el error para que otros subs puedan manejarlo
      return throwError(() => err);
    })

  );
};
