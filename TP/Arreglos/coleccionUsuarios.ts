import { Readline } from "readline/promises";
import {usuario} from "../Clases/usuario";
import * as rs from "readline-sync";
import { FileManagerUsuarios } from "../Archivos/fsusuarios";

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
      

        const user =this.usuarios.find((user) => user.getDni() === dni)

        const userrev = usuario.revive('',user) ;
        return userrev;

}
    
    public agregarUsuario(nomyape:string,dni:number,edad:number,telefono:string,direccion:string):void
    {   
        try{
            if(!this.existeUsuario(dni))
            {
                const usuario1 = new usuario(nomyape,dni,edad,telefono,direccion);
                this.usuarios.push(usuario1);
                FileManagerUsuarios.guardarDatosUsuarios(this.usuarios);
            }
            else
            {
                console.log("el usuario ya esta registrado");
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
                FileManagerUsuarios.guardarDatosUsuarios(this.usuarios);
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
    public pedirDatos()
    {
        const nomyape = rs.question("Ingrese nombre y apellido: ");
        const dni = rs.questionInt("Ingrese Dni: ");
        const edad = rs.questionInt("Ingrese edad: ");
        const telefono = rs.question("Ingrese Telefono: ")
        const direccion =rs.question("Ingrese Direccion: ");
        this.agregarUsuario(nomyape,dni,edad,telefono,direccion);
    }
    public menuUsuarios()
    {
    this.cargarUsuarios(FileManagerUsuarios.cargarDatosUsuarios());
        while(true)
        {
            console.clear()
            const choice = rs.keyInSelect(this.menuOptions);
             switch(choice)
             {
                case 0:
                    this.listarUsuarios();
                     rs.keyInPause("");
                    break;
                case 1:
                    this.pedirDatos()
                    rs.keyInPause("2");
                    break;
                case 2:
                    const dni = rs.questionInt("Ingrese el documento del usuario que desea eliminar: ");
                    const userdel = this.buscarUsusarioPorDni(dni);
                    if(userdel !== undefined)
                    {
                        console.log("Esta seguro que desea eliminar los datos de "+userdel.getNomyape());
                        const choice2 = rs.keyInSelect(this.confirmacionOptions);
                        switch (choice2)
                        {
                            case 0:
                                this.eliminarUsuarioPorDni(dni);
                                break;
                            default:
                                console.log("operacion cancelada");
                                break;
                        }
                    }
                    else
                    {
                        console.log("Usuario no encontrado");
                    }
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

    confirmacionOptions = ["Eliminar"];


       
}

