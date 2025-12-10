export interface InmuebleDTO {
    id: number;
}

export interface FavoritoDTO {
    idInmueble: number;
    nombreTipo: string;
    nombreProvincia: string;
    nombreOperacion: string;
    precio: number;
    nombreInmobiliaria: string;
}

export interface Credenciales{ //JWTRequest
    username: string;
    password: string;
}

export interface ErrorRespuesta{ //ErrorResponse
    timestamp: Date;
    status: number;
    error: string;
    message: string;
    path: string;
}