import { prestamo} from "../Clases/prestamo";
import { usuario } from "../Clases/usuario";
import { itemslibreria } from "../Clases/itemlibre";
import {coleccionUsuarios} from "./coleccionUsuarios";
import {coleccionItems} from "./coleccionItems";
import { FileManagerPrestamos } from "../Archivos/fsprestamos";
import { FileManagerUsuarios } from "../Archivos/fsusuarios";
import { FileManageritems } from "../Archivos/fsitems";
import { log } from "console";
import { libro } from "../Clases/libros";
import * as rs from "readline-sync";

export class coleccionPrestamos
{
    private prestamos : prestamo[];
    private coleccionUser:coleccionUsuarios;
    private coleccionitem:coleccionItems;
    
    public constructor()
    {
        this.prestamos = [];
        this.coleccionUser = new coleccionUsuarios();
        this.coleccionitem = new coleccionItems();
        this.coleccionUser.cargarUsuarios(FileManagerUsuarios.cargarDatosUsuarios());
        this.coleccionitem.cargarItems(FileManageritems.cargarDatos());
    }

    public agregarPrestamo(dni:number, codigo:number):void{
        this.coleccionUser.cargarUsuarios(FileManagerUsuarios.cargarDatosUsuarios());
        this.coleccionitem.cargarItems(FileManageritems.cargarDatos());
        const usuario =  this.coleccionUser.buscarUsusarioPorDni(dni);
        const item = this.coleccionitem.buscarItemPorCod(codigo);
        try
        {
            if(usuario !== undefined)
            {
                if(usuario.getActivo())
                {
                    if(!usuario.getPenalizado())
                    {
                        if(item !== undefined)
                         {
                             if(item.gerCant() > 0)
                             {
                                  const prestamo1 = new prestamo(usuario,item);
                                  this.prestamos.push(prestamo1);
                                  item.restarCant(1);
                                  FileManagerPrestamos.guardarDatos(this.devolverPrestamos());
                                  console.log("Prestamo aceptado");
                               }
                                else
                              {
                                    console.log("No tenemos stock de "+ item.getTitulo());
                              }
                        }else
                        {
                            console.log("No tenemos ese item");
                        }
                    
                    }else
                    {
                        console.log("El "+ usuario.getNomyape() + " esta penalizado");
                    }
                }
                else
                {
                   console.log("El "+ usuario.getNomyape() + " esta bloqueado, usted no puede alquilar mas nada");
                }
               
            }
            else
            {
               console.log( "El usuario no esta registrado");
              
            }
        }catch(e)
        {
            console.error(e);
        }
    }



    public devoluciondelPrestamo(id:string):void
    {
        let dev = this.buscarPrestamo(id);
        dev = prestamo.revive("",dev);
        if(dev !== undefined)
        {
            dev.cambiarEstadoDePrestamo();
            const item= libro.revive('',dev.getItemprestado());

            item.sumarCant();
            dev.devolucionEfectuada();
            const devo = new Date();
            const fechadev : Date = new Date(dev.getFechaDevolucion());


              if(devo > fechadev)
                 {
                   this.calcularPenalizacion(dev);
  

                 }
                 else
                  {
                        this.devovlerPuntos(dev);

                 }
            FileManageritems.guardarDatos(this.coleccionitem.devovlerItems());
         FileManagerPrestamos.guardarDatos(this.devolverPrestamos());
                 console.log("Devolucion Exitosa");

            
            
        }
        else
        {
            console.log("El prestamo no existe");
        }

    }

    public devovlerPuntos(devolucion:prestamo):void
    {
        const user = usuario.revive('',devolucion.getUsuario());

        if(user.getPuntos() > 0)
        {      
            user.restaPuntos(1);
            this.coleccionUser.actualizarUsuario(user);
        }
    }

    public calcularPenalizacion(devolucion:prestamo):void
    {
        const fechadevo :  Date = new Date(devolucion.getFechaDevolucion());
        const fechaPres : Date = new Date();
        
        const canti = fechaPres.getTime() - fechadevo.getTime();
        
        const diasDiferencia = Math.floor(canti / (1000 * 60 * 60 * 24));
        
        const user = usuario.revive('',devolucion.getUsuario()) ;


        if(diasDiferencia > 10)
        {
            user.setPenalizado(true);
           console.log("El usuario a sido bloqueado, no podra volver a alquilar libros");
           
            
        }
        else
        {
            if(diasDiferencia > 5 && diasDiferencia < 10)
            {
                user.sumaPuntos(6);
                user.setPenalizado(true);
                console.log( "El usuario a sido penalizado, no podra alquilar nada por una semana");

            }
            else
                if(diasDiferencia > 2 && diasDiferencia < 5)
                {
                    user.sumaPuntos(3);
                    console.log("al usuario se le cargan "+ 3 + " Puntos por devolver el item tarde");
                }
                else
                {
                    user.sumaPuntos(2);
                    console.log("al usuario se le cargan "+ 2 + " Puntos por devolver el item tarde");
                }
        }
        this.coleccionUser.actualizarUsuario(user);
        
    }

    public buscarPrestamo(id:string):prestamo | undefined
    {
        const prestamo1= this.prestamos.find((pres) => pres.getID() === id)

        return prestamo1;
    }

    public mostrarPrestamo(id:string):void
    {
        const prestamo1 = this.buscarPrestamo(id);
        if(prestamo1 !== undefined)
        {
            if(prestamo1.getActivo())
            {
                console.log("El prestamo esta activo, todavia no lo devolvio");
            }
            console.log(JSON.stringify(prestamo1.getUsuario() , null ,2) );
            console.log(JSON.stringify(prestamo1.getItemprestado() , null ,2) );
            const fechaPres : Date = new Date(prestamo1.getFechaPrestamo());
            const fechadev : Date = new Date(prestamo1.getFechaDevolucion());
            console.log("Fecha de prestamo: "+fechaPres.toDateString());
            console.log("Fecha de devolucion: "+fechadev.toDateString());
            if(prestamo1.getDevolcuion() !== undefined)
            {
                const fechaefec = prestamo1.getDevolcuion()
                console.log("El libro se devolvio: " + fechaefec);
            }
        }
    }
    public cargarPrestamos(prestamos : prestamo[]):void
    {
        this.prestamos = prestamos;
    }

    public devolverPrestamos():prestamo[]
    {
        return this.prestamos;
    }

    public listarPresto():void{
        this.prestamos.forEach((pres) => {
            console.log("-----Prestamos-----");
            if(pres.getActivo())
            {
                console.log("El prestamo esta activo, todavia no lo devolvio");
            }
            console.log(JSON.stringify(pres.getUsuario() , null ,2) );
            console.log(JSON.stringify(pres.getItemprestado() , null ,2) );
            const fechaPres : Date = new Date(pres.getFechaPrestamo());
            const fechadev : Date = new Date(pres.getFechaDevolucion());
            console.log("Fecha de prestamo: "+fechaPres.toDateString());
            console.log("Fecha de devolucion: "+fechadev.toDateString());
            if(pres.getDevolcuion() !== undefined)
            {
                const fechaefec = pres.getDevolcuion()
                console.log("El libro se devolvio: " + fechaefec);
            }
        })
        
    }
    public pedirDatos():void
    {
        const dni = rs.questionInt("Ingrese numero de documento del usuario para hacer el prestamo: ");
        const cod = rs.questionInt("Ingrese el codigo del libro que el usuario va a retirar");
        this.agregarPrestamo(dni,cod);

    }


    public menuPrestamos()
    {
        this.cargarPrestamos(FileManagerPrestamos.cargarDatos());
        while(true)
        {
            console.clear()
            const choice = rs.keyInSelect(this.menuOptions);
             switch(choice)
             {
                case 0:
                    this.listarPresto();
                    rs.keyInPause("");
                    break;
                case 1: 
                    this.pedirDatos();
                    rs.keyInPause("");
                    break;
                case 2:
                    rs.keyInPause("");
                    break;
                case 3:
                    this.devoluciondelPrestamo(rs.question("Ingrese el id del prestamo:   "));
                    rs.keyInPause("");
                    break;
                default:
                    rs.keyInPause("menu anterior");
                    return;

             }
        }
    }

     menuOptions = ["Listar Prestamos",
        "Crear Prestamo",
        "Eliminar Prestamo",
        "Devolver Prestamo"
    ];

    confirmacionOptions = ["Eliminar"];
}




