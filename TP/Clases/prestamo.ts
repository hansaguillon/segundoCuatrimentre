import { randomUUID as uid } from "node:crypto";
import {itemslibreria} from "./itemlibre";
import {usuario} from "./usuario";
import { libro } from "./libros";


 export class prestamo
{
    private id: string = uid();
    private usuario: usuario;
    private itemprestado : itemslibreria;
    private fechaprestamo:  Date;
    private fechadevolucion : Date;
    private devolucion : Date| undefined = undefined;
    private activo :boolean = true;

    constructor(usuario:usuario , itemprestado: itemslibreria)
    {
        this.usuario = usuario;
        this.itemprestado = itemprestado;
        this.fechaprestamo = new Date();
        this.fechadevolucion = new Date(this.fechaprestamo);
        this.fechadevolucion.setDate(this.fechaprestamo.getDate() +7 );
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

    public getDevolcuion():Date | undefined {
        return this.devolucion;
    }
    public devolucionEfectuada()
    {
        this.devolucion = new Date();
    }
    public getActivo():boolean
    {
        return this.activo;
    }

    public cambiarEstadoDePrestamo():void
    {
        this.activo = !this.activo;
    }

    static revive(key: string, value: any): prestamo | any {
        if (typeof value === 'object' && value !== null && 'usuario' in value) {

            
            const pres = new prestamo(value.usuario,value.itemprestado);
            
            Object.assign(pres, value);
            return pres;
        }
        return value;
    }
    static revive2(key: string, value: any): prestamo | any {
        if (typeof value === 'object' && value !== null && 'usuario' in value&& 'itemprestado' in value) {
            const user = usuario.revive('',value.usuario);
            const item = libro.revive('',value.itemprestado);
            const pres = new prestamo(user,item);
             Object.assign(pres, value);
            return pres;
        }
        return value;
    }


}

