import {usuario} from "../Clases/usuario";

export class coleccionUsuarios
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
        

     public buscarUsusarioPorId(id:string):usuario | undefined{
      

            let usuario =this.usuarios.find((user) => user.getId() === id)


            return usuario;

    }
    public buscarUsusarioPorDni(dni:number):usuario | undefined{
      

        let usuario =this.usuarios.find((user) => user.getDni() === dni)


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
        this.usuarios.forEach(function (user,indice)
        {
            if(user.getDni() === dni)
            {
                this.usuarios.splice(indice,1);
            }
        })

    }
    public eliminarUsuarioPorId(id:string)
    {
        this.usuarios.forEach(function (user,indice)
        {
            if(user.getId() === id)
            {
                this.usuarios.splice(indice,1);
            }
        })
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

       
}

