// Archivo para declarar todas las entidades de la aplicación
// Esto facilita la gestión y el mantenimiento del código
// al centralizar las definiciones de las entidades en un solo lugar.

export interface Inmobiliaria {
    id?: number;
    nombre: string;
    telefono: string;
    representante: string;
    log?: string;
    activo?: number;
}

export interface Tipo {
    id?: number;
    nombre: string;
    activo?: number;
}

export interface Poblacion {
    id?: number;
    cp: string;
    nombre: string;
    provincia: Provincia;
    activo?: number;
}

export interface Provincia {
    id?: number;
    nombre: string;
    activo?: number;
}

export interface ImagenInmueble {
    id?: number;
    nombre: string;
    altImagen?: string;
    activo?: number;
    inmueble?: Inmueble;
}

export interface Operacion {
    id?: number;
    nombre: string; // venta, alquiler…
    activo?: number;
}

export interface Usuario {
    id?: number;
    nombre: string;
    password?: string;
    email: string;
    rol?: string;
    activo?: number;
    inmueblesFavoritos?: Inmueble[];
}

export interface Inmueble {
    id?: number;

    via: string;                         // CALLE, AVENIDA, PLAZA…
    nombreVia: string;                   // Ej: Gran Vía
    claim: string;                       // "Maravilloso piso!!!"
    numero: string;
    planta: string;
    puerta: string;
    apertura: string;                    // INTERIOR, EXTERIOR
    orientacion: string;                 // norte, sur…

    superficieUtil: number;
    superficieConstruida: number;

    precio: number;

    habitaciones: string;
    banhos: string;

    descripcion: string;

    calefaccion: string;
    amueblado: number;                   // 1 o 0
    balcones: string;
    garajes: string;

    piscina: number;                     // 1 o 0
    trastero: number;
    ascensor: number;
    jardin: number;
    tendedero: number;

    portada: number;                     // 1 o 0
    oportunidad: number;                 // 1 o 0
    gadget: number;

    activo: number;

    tipo: Tipo;
    poblacion: Poblacion;
    operacion: Operacion;
    inmobiliaria: Inmobiliaria;

    imagenes?: ImagenInmueble[];

    usuariosQueLoFavorean?: Usuario[];
}
