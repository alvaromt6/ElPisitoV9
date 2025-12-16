import { adminGuard } from "../../core/guards/admin-guard";
import { superGuard } from "../../core/guards/super-guard";
import { AddInmobiliaria } from "./add-inmobiliaria/add-inmobiliaria";
import { AddInmueble } from "./add-inmueble/add-inmueble";
import { AddOperacion } from "./add-operacion/add-operacion";
import { AddPoblacion } from "./add-poblacion/add-poblacion";
import { AddProvincia } from "./add-provincia/add-provincia";
import { AddTipo } from "./add-tipo/add-tipo";
import { AddUsuario } from "./add-usuario/add-usuario";
import { EditInmobiliaria } from "./edit-inmobiliaria/edit-inmobiliaria";
import { EditInmueble } from "./edit-inmueble/edit-inmueble";
import { EditOperacion } from "./edit-operacion/edit-operacion";
import { EditPoblacion } from "./edit-poblacion/edit-poblacion";
import { EditProvincia } from "./edit-provincia/edit-provincia";
import { EditTipo } from "./edit-tipo/edit-tipo";
import { EditUsuario } from "./edit-usuario/edit-usuario";
import { ListInmobiliaria } from "./list-inmobiliaria/list-inmobiliaria";
import { ListInmueble } from "./list-inmueble/list-inmueble";
import { ListOperacion } from "./list-operacion/list-operacion";
import { ListPoblacion } from "./list-poblacion/list-poblacion";
import { ListProvincia } from "./list-provincia/list-provincia";
import { ListTipo } from "./list-tipo/list-tipo";
import { ListUsuario } from "./list-usuario/list-usuario";

export const ADMIN_ROUTES = [
        /////////////////////////////////
        // Rutas para inmuebles
        /////////////////////////////////
    {
       path: 'add-inmueble',
       component: AddInmueble,
       canActivate:[adminGuard]
    },
    {
       path: 'list-inmueble',
       component: ListInmueble,
       canActivate:[adminGuard]
    },
    {
       path: 'edit-inmueble/:id',
       component: EditInmueble,
       canActivate:[adminGuard]
    },
        /////////////////////////////////
        // Rutas para tipos
        /////////////////////////////////
    {
       path: 'add-tipo',
       component: AddTipo,
       canActivate:[adminGuard]
    },
    {
       path: 'list-tipo',
       component: ListTipo,
       canActivate:[adminGuard]
    },
    {
       path: 'edit-tipo/:id',
       component: EditTipo,
       canActivate:[adminGuard]
    },
        /////////////////////////////////
        //Rutas para inmobiliarias
        /////////////////////////////////
    {
       path: 'add-inmobiliaria',
       component: AddInmobiliaria,
       canActivate:[adminGuard]
    },
    {
       path: 'list-inmobiliaria',
       component: ListInmobiliaria,
       canActivate:[adminGuard]
    },
    {
       path: 'edit-inmobiliaria/:id',
       component: EditInmobiliaria,
       canActivate:[adminGuard]
    },
        /////////////////////////////////
        //Rutas para provincias
        /////////////////////////////////
    {
       path: 'add-provincia',
       component: AddProvincia,
       canActivate:[adminGuard]
    },
    {
       path: 'list-provincia',
       component: ListProvincia,
       canActivate:[adminGuard]
    },
    {
       path: 'edit-provincia/:id',
       component: EditProvincia,
       canActivate:[adminGuard]
    },
        /////////////////////////////////
        // Ruta para operaciones
        /////////////////////////////////
    {
       path: 'add-operacion',
       component: AddOperacion,
       canActivate:[adminGuard]
    },
    {
       path: 'list-operacion',
       component: ListOperacion,
       canActivate:[adminGuard]
    },
    {
       path: 'edit-operacion/:id',
       component: EditOperacion,
       canActivate:[adminGuard]
    },
        /////////////////////////////////
        // Rutas para poblaciones
        /////////////////////////////////
    {
       path: 'add-poblacion',
       component: AddPoblacion,
       canActivate:[adminGuard]
    },
    {
       path: 'list-poblacion',
       component: ListPoblacion,
       canActivate:[adminGuard]
    },
    {
       path: 'edit-poblacion/:id',
       component: EditPoblacion,
       canActivate:[adminGuard]
    },
        /////////////////////////////////
        // Ruta para usuarios
        /////////////////////////////////
    {
       path: 'add-usuario',
       component: AddUsuario,
       canActivate:[superGuard]
    },
    {
       path: 'list-usuario',
       component: ListUsuario,
       canActivate:[superGuard]
    },
    {
       path: 'edit-usuario/:id',
       component: EditUsuario,
       canActivate:[superGuard]
    },

        /////////////////////////////////
        // Ruta para imagenes de inmuebles
        /////////////////////////////////
    {
       path: 'edit-imagen-inmueble/:id',
       redirectTo: 'list-edit-imagen-inmueble',
       canActivate:[adminGuard]
    }
];