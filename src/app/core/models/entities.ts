export interface Inmobiliaria {
    id?: number;
    nombre: string;
    representante: string;
    telefono: string;
    activo?: number;
    logo?: string;
}

export interface Inmueble {
    id?: number;
    activo?: number;
    amueblado: number;
    apertura: string;
    ascensor: number;
    balcones: string;
    banhos: string;
    calefaccion: string;
    claim: string;
    descripcion: string;
    gadget: number;
    garajes: string;
    habitaciones: string;
    inmobiliaria: Inmobiliaria;
    imagenes: Array<ImagenInmueble>;
    jardin: number;
    nombreVia: string;
    numero: string;
    operacion: Operacion;
    oportunidad: number;
    orientacion: string;
    piscina: number;
    planta: string;
    poblacion: Poblacion;
    portada: number;
    precio: number;
    puerta: string;
    superficieConstruida: number;
    superficieUtil: number;
    tendedero: number;
    tipo: Tipo;
    trastero: number;
    via: string;
}

export interface Tipo {
    id?: number;
    nombre: string;
    activo?: number;
}

export interface Poblacion {
    id?: number;
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
    altImagen: string;
}

export interface Operacion {
    id?: number;
    nombre: string;
    activo?: number;
}

export interface Usuario {
    id?: number;
    nombre: string;
    password?: string;
    email: string;
    rol?: string;
    activo?: number;
}
