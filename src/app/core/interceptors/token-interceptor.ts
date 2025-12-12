import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const _authService = inject(AuthService);
  const token = _authService.getTokenFromLocalStorage();

  if(token){
    //Si hay token lo añadimos al encabezado de la petición (todas las peticiones pasan por aquí)
    //pero no podemos modificar el objeto req(que es la petición entrante) porque son OBJETOS INMUTABLES!!!
    //Para poder realizar la "modificación" (que es añadir el token al objeto req) vamos a crear un clon con
    //el método clone que efectúa una copia pura ( no hace una copia de referencia)
    const cloneReq = req.clone({
    //Al igual que en el servidor usamos 'Authorization' y 'Bearer ' IMPORTANTE CON UN ESPACIO
    // headers: req.headers.append('Authorization',`Bearer ${token}`)
    // headers: req.headers.set('Authorization', `Bearer ${token}`)
      setHeaders: { //mejor práctica
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloneReq);
  }

  return next(req);
};


/*- Se implementa un interceptor funcional (HttpInterceptorFn) para añadir el token
  JWT a todas las peticiones HTTP salientes.
- Se obtiene el token desde AuthService mediante inject().
- Se clona la request original debido a que es inmutable.
- Se utiliza setHeaders como mejor práctica para evitar duplicados y mejorar la legibilidad.
*/