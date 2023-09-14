import { error } from "console";
import {usuario} from "../Clases/usuario";

class coleccionUsuarios
{
    private usuarios: usuario[];


    public constructor()
    {
        this.usuarios = [];
    }

    public existeUsuario(dni:number):boolean{
            let usuario =this.usuarios.find((usuarios) => usuario.getDni() === dni)
            let existe = false;

            if(usuario !== undefined)
            {
                existe = true;
            }

            return existe;
        }
        

    public buscarUsusario(id:string):usuario{
      

            let usuario =this.usuarios.find((usuarios) => usuario.getId() === id)


            return usuario;

    }
    
    public agregarUsuario(nomyape:string,dni:number,edad:number,socio:boolean,telefono:string,direccion:string):void
    {   
        try{
            if(!this.existeUsuario(dni))
            {
                const usuario1 = new usuario(nomyape,dni,edad,socio,telefono,direccion);
                this.usuarios.push(usuario1);
            }
            else
            {
                throw new Error("el usuario ya esta registrado");
            }

        }catch(Error){

            console.error("el usuario ya existe");
        }    
    }
    

       
}

