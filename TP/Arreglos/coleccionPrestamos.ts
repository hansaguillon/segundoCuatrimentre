import { prestamo} from "../Clases/prestamo";
import { usuario } from "../Clases/usuario";
import { itemslibreria } from "../Clases/itemlibre";
import {coleccionUsuarios} from "./coleccionUsuarios";
import {coleccionItems} from "./coleccionItems";
import { FileManagerPrestamos } from "../Archivos/fsprestamos";
import { FileManagerUsuarios } from "../Archivos/fsusuarios";
import { FileManageritems } from "../Archivos/fsitems";

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
    
                               }
                                else
                              {
                                     throw new Error("No tenemos stock de "+ item.getTitulo());
                              }
                        }else
                        {
                            throw new Error("No tenemos ese item");
                        }
                    
                    }else
                    {
                        throw new Error("El "+ usuario.getNomyape() + " esta penalizado");
                    }
                }
                else
                {
                    throw new Error("El "+ usuario.getNomyape() + " esta bloqueado, usted no puede alquilar mas nada");
                }
               
            }
            else
            {
                throw new Error("El usuario no esta registrado");
            }
        }catch(e)
        {
            console.error(e);
        }
    }

   

    public devoluciondelPrestamo(id:string):void
    {
        const dev = this.buscarPrestamo(id);
        if(dev !== undefined)
        {
            dev.cambiarEstadoDePrestamo();
            const item = dev.getItemprestado();
            item.sumarCant(1);
            dev.devolucionEfectuada();
            if(dev.getFechaDevolucion() > dev.getFechaPrestamo())
            {
                this.calcularPenalizacion(dev);
            }
            else
            {
                this.devovlerPuntos(dev);
            }
        }
        else
        {
            throw new Error("El prestamo no existe");
        }
    }

    public devovlerPuntos(devolucion:prestamo):void
    {
        const usuario = devolucion.getUsuario();
        if(usuario.getPuntos() > 0)
        {
            usuario.restaPuntos(1);
        }
    }

    public calcularPenalizacion(devolucion:prestamo):void
    {
        const fechadevo = devolucion.getFechaDevolucion();
        const fechapres = devolucion.getFechaPrestamo();
        const canti = fechapres.getTime() - fechadevo.getTime();
        const diasDiferencia = Math.floor(canti / (1000 * 60 * 60 * 24));
        const usuario = devolucion.getUsuario();
        if(diasDiferencia > 10)
        {
            usuario.setPenalizado(true);
            throw new Error("El usuario a sido bloqueado, no podra volver a alquilar libros");

        }
        else
        {
            if(diasDiferencia > 5 && diasDiferencia < 10)
            {
                usuario.sumaPuntos(6);
                usuario.setPenalizado(true);
                throw new Error("El usuario a sido penalizado, no podra alquilar nada por una semana");
            }
            else
                if(diasDiferencia > 2 && diasDiferencia < 5)
                {
                    usuario.sumaPuntos(3);
                }
                else
                {
                    usuario.sumaPuntos(2);
                }
        }

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
            console.log(prestamo1);
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

        
    }

}




