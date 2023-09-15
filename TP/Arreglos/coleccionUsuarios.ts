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
        

    public buscarUsusarioPorId(id:string):usuario{
      

            let usuario =this.usuarios.find((usuarios) => usuario.getId() === id)


            return usuario;

    }
    public buscarUsusarioPorDni(dni:number):usuario{
      

        let usuario =this.usuarios.find((usuarios) => usuario.getDni() === dni)


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
       
}

