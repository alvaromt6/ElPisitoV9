import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { ComunicacionService } from '../services/comunicacion-service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  //const para funciones y private para clases
  const _router:Router = inject(Router);
  const _authService:AuthService = inject(AuthService);
  const _comunicationService:ComunicacionService = inject(ComunicacionService);

  if ((_authService.estaLogueado() && _authService.getRolFromToken() == '[ROLE_ADMIN]') ||
      (_authService.estaLogueado() && _authService.getRolFromToken() == '[ROLE_SUPER_ADMIN]')) {

    return true;  
  } else {
    _comunicationService.cambioLogin(false);
    _router.navigate(['/auth/login']);

    return false;
  }
};
