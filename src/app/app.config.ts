import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { tokenInterceptor } from './core/interceptors/token-interceptor';
import { errorInterceptor } from './core/interceptors/error-interceptor';


/**
 * Configuración principal de la aplicación Angular.
 * Aquí se registran los proveedores globales necesarios para el funcionamiento de la app.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Manejo global de errores del navegador
    provideBrowserGlobalErrorListeners(),

    // Configuración de la detección de cambios de Angular.
    // `eventCoalescing: true` agrupa múltiples eventos en un solo ciclo de detección
    // para mejorar el rendimiento en eventos frecuentes.
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Proveedor del enrutador con las rutas definidas en app.routes.ts
    //withInMemoryScrolling -> Esto hace que al navegar entre rutas, la posición de desplazamiento
    //se restaure automáticamente al inicio de la página (parte superior).
    provideRouter(routes,withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    // Proveedor del cliente HTTP de Angular.
    // Es obligatorio para poder inyectar HttpClient en servicios y hacer llamadas HTTP.
    provideHttpClient(withInterceptors([tokenInterceptor,errorInterceptor]))
    //Para que funcionen los intercptores debemso de declararlos en provideHttpClient
  ]
};
