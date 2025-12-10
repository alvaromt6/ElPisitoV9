// Variables globales de entorno utilizadas en toda la aplicación.
// Centralizan las rutas base para acceder al backend y a los recursos multimedia.
// Esto permite mantener las URLs en un único lugar y facilitar cambios de entorno.
export const URL_BASE: string = "http://localhost:8080/";
export const URL_API: string = URL_BASE + "api/";
export const URL_MEDIA: string = URL_BASE + "media/";
export const URL_IMAGEN_INMUEBLE: string = URL_MEDIA + "imagen/";
