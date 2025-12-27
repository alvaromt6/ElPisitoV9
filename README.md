# Frontend El Pisito

Aplicación frontend desarrollada con Angular que consume una API REST para la gestión
de una plataforma inmobiliaria. Permite a los usuarios visualizar inmuebles, gestionar
favoritos y autenticarse mediante un sistema de roles.

## Descripción
Este proyecto representa el frontend de una aplicación inmobiliaria.
La interfaz permite a los usuarios registrarse, iniciar sesión, consultar inmuebles
disponibles y gestionar una lista de favoritos. Los usuarios con rol administrador
pueden acceder a funcionalidades de gestión de inmuebles.

La aplicación se comunica con el backend a través de una API REST desarrollada con
Spring Boot.

## Tecnologías utilizadas
- Angular
- TypeScript
- HTML5
- CSS
- Bootstrap
- Node.js
- NPM

## Funcionalidades principales
- Registro e inicio de sesión de usuarios
- Gestión de sesión mediante JWT
- Visualización de inmuebles
- Gestión de inmuebles favoritos
- Formularios reactivos
- Consumo de API REST

## Instalación y ejecución

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
Configurar la URL del backend en los servicios de Angular

Ejecutar la aplicación:

ng serve


Acceder desde el navegador a:

http://localhost:4200

Configuración del backend

La aplicación requiere que el backend esté en ejecución.
Por defecto, la API debe estar disponible en:

http://localhost:8080
