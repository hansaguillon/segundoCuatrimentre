import {usuario} from "../Clases/usuario";
import * as rs from "readline-sync";

export class coleccionUsuarios
{
    private usuarios: usuario[];


    public constructor()
    {
        this.usuarios = [];
    }

    public existeUsuario(dni:number):boolean{
            const usuario =this.usuarios.find((user) => user.getDni() === dni)
            let existe = false;

            if(usuario !== undefined)
            {
                existe = true;
            }

            return existe;
        }
        

     public buscarUsusarioPorId(id:string):usuario | undefined{
      

            const usuario =this.usuarios.find((user) => user.getId() === id)


            return usuario;

    }
    public buscarUsusarioPorDni(dni:number):usuario | undefined{
      

        const usuario =this.usuarios.find((user) => user.getDni() === dni)


        return usuario;

}
    
    public agregarUsuario(nomyape:string,dni:number,edad:number,telefono:string,direccion:string):void
    {   
        try{
            if(!this.existeUsuario(dni))
            {
                const usuario1 = new usuario(nomyape,dni,edad,telefono,direccion);
                this.usuarios.push(usuario1);
            }
            else
            {
                throw new Error("el usuario ya esta registrado");
            }

        }catch(e){

            console.error(e);
        }    
    }
    public modificarUsuario()
    {

    }
     public eliminarUsuarioPorDni(dni:number)
    {
        this.usuarios.forEach((user, indice) => {
            if (user.getDni() === dni) {
                this.usuarios.splice(indice, 1);
            }
        });

    }

    public devolverusuarios():usuario[]
    {
        return this.usuarios;
    }
    public eliminarUsuarioPorId(id:string)
    {
        this.usuarios.forEach((user, indice) => {
            if (user.getId() === id) {
                this.usuarios.splice(indice, 1);
            }
        });
    }
    public cargarUsuarios(usuarios : usuario[])
    {
        this.usuarios = usuarios;
    }


    public listarUsuarios():void{

        this.usuarios.forEach(function (user)
        {
            console.log(user);
        })

    }

    public bloquearUsuario(dni:number):void
    {
        let usuario = this.buscarUsusarioPorDni(dni);
        if(usuario !== undefined)
        {
            if(usuario.getActivo() === true)
            {
                usuario.setActivo(false);
            }
        }
       
    }
    public agregarPuntos(dni:number,puntos:number):void
    {
        let usuario = this.buscarUsusarioPorDni(dni);
        if (usuario !== undefined)
        {
            usuario.sumaPuntos(puntos);

            if(usuario.getPuntos() >= 6)
            {
                usuario.setPenalizado(true);
            }
        }
 
    }
    public actualizarUsuario(usermod : usuario):void
    {
       /* this.usuarios.forEach((user, indice) => {
            if (user.getDni() === usermod.getDni()) {
                user = usermod;
                console.log(user);
            }
        });*/


        let usuario = this.buscarUsusarioPorDni(usermod.getDni());
        if (usuario !== undefined)
        {
            usuario.setActivo(usermod.getActivo());
            usuario.setDireccion(usermod.getDireccion());
            usuario.setEdad(usermod.getEdad());
            usuario.setNomyape(usermod.getNomyape());
            usuario.setPenalizado(usermod.getPenalizado());
            usuario.setTelefono(usermod.getTelefono());
            usuario.setPuntos(usermod.getPuntos());
            
        }
    }
    public menuUsuarios()
    {
        while(true)
        {
            console.clear()
            const choice = rs.keyInSelect(this.menuOptions);
             switch(choice)
             {
                case 0:
                    rs.keyInPause("1");
                    break;
                case 1:
                    rs.keyInPause("2");
                    break;
                case 2:
                    rs.keyInPause("3");
                    break;
                case 3:
                    rs.keyInPause("4");
                    break;
                default:
                    rs.keyInPause("Menu anteior");
                    return;

             }
        }
    }

     menuOptions = ["Listar Usuarios",
        "Crear Usuarios",
        "Eliminar Usuarios",
        "Modificar Usuarios"
    ];


       
}

