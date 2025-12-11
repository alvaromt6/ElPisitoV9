import { JwtPayload } from "jwt-decode";

//Con esto vamos a poder mapear de forma mas sencilla el usuario, los roles y el id

export interface CustomJwtPayload extends JwtPayload{

    USUARIO:string;
    ROL:string;
    ID:number;

}