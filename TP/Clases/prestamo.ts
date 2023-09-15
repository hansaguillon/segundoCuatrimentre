import { randomUUID as uid } from "node:crypto";
import {itemslibreria} from "./itemlibre";
import {usuario} from "./usuario";

 export class prestamo
{
    private id: string = uid();
    private usuario: usuario;
    private itemprestado : itemslibreria;
    private fechaprestamo:  Date;
    private fechadevolucion : Date;

    constructor(usuario:usuario , itemprestado: itemslibreria)
    {
        this.usuario = usuario;
        this.itemprestado = itemprestado;
        this.fechaprestamo = new Date();
        this.fechadevolucion = new Date(this.fechaprestamo)
        this.fechaprestamo.setDate(this.fechaprestamo.getDate() +7 );
    }
    public getID():string{

        return this.id;
    }

    public getUsuario():usuario
    {
        return this.usuario;
    }

    public setUsuario(usuario:usuario):void
    {
        this.usuario = usuario;
    }

    public getItemprestado():itemslibreria
    {
        return this.itemprestado;
    }

    public setItemPrestado(itemprestado:itemslibreria):void
    {
        this.itemprestado = itemprestado;
    }
    public getFechaPrestamo():Date
    {
        return this.fechaprestamo;
    }

    public getFechaDevolucion():Date{
        return this.fechadevolucion;
    }

}
