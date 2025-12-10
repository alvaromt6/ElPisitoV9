import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

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
    provideRouter(routes),

    // Proveedor del cliente HTTP de Angular.
    // Es obligatorio para poder inyectar HttpClient en servicios y hacer llamadas HTTP.
    provideHttpClient()
  ]
};
