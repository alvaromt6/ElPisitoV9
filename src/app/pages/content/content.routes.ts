import { ConsultaHipotecas } from "./consulta-hipotecas/consulta-hipotecas";
import { Contactar } from "./contactar/contactar";
import { Home } from "./home/home";
import { MapaWeb } from "./mapa-web/mapa-web";
import { NuestrosServicios } from "./nuestros-servicios/nuestros-servicios";
import { PublicaTuAnuncio } from "./publica-tu-anuncio/publica-tu-anuncio";
import { RegistroUsuario } from "./registro-usuario/registro-usuario";
import { SobreElPisito } from "./sobre-el-pisito/sobre-el-pisito";

export const CONTENT_ROUTES = [

    {
        path:'',
        component: Home
    },
    {
        path:'home',
        component: Home
    },
    {
        path:'publica-anuncio',
        component: PublicaTuAnuncio
    },
    {
        path:'consulta-hipoteca',
        component: ConsultaHipotecas
    },
    {
        path:'nuestros-servicios',
        component: NuestrosServicios
    },
    {
        path:'sobre-el-pisito',
        component: SobreElPisito
    },
    {
        path:'contactar',
        component: Contactar
    },
    {
        path:'mapa-web',
        component: MapaWeb
    },
    {
        path:'registro-usuario',
        component: RegistroUsuario
    },
    
    

];