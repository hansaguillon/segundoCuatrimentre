import { BlobOptions } from "node:buffer";
import { randomUUID as uid } from "node:crypto";

export class usuario{
    private id: string = uid();
    private nomyape : string;
    private dni :number;
    private edad : number;
    private telefono:string;
    private direccion:string;
    private puntos:number = 0;
    private activo: boolean = true;
    private penalizacion = false;


    constructor(nomyape:string,dni:number,edad:number,telefono:string,direccion:string)
    {
        this.nomyape = nomyape;
        this.dni = dni;
        this.edad = edad;
        this.telefono = telefono;
        this.direccion = direccion;
    }

    public getId():string
    {
        return this.id;
    }
    public getNomyape():string{
        return this.nomyape;
    }
    public setNomyape(nomyape:string):void
    {
        this.nomyape = nomyape;
    }

    public getDni():number
    {
        return this.dni;
    }
    public setDni(dni:number):void{
        this.dni = dni;

    }
    public getEdad():number{
        return this.edad;
    }
    public setEdad(edad:number):void{


        this.edad = edad;
    }

    public getTelefono():string
    {
        return this.telefono;
    }
    public setTelefono(telefono:string):void{
        this.telefono = telefono;
    }
    public getDireccion():string
    {
        return this.direccion;
    }
    public setDireccion(direccion:string):void
    {
        this.direccion = direccion;
    }
    public getPuntos():number
    {
        return this.puntos;
    }
    public setPuntos(puntos: number):void
    {
        this.puntos = puntos;
    }
    public sumaPuntos(puntos:number):void
    {
        this.puntos += puntos;
    }
    public restaPuntos(puntos:number):void
    {
        this.puntos =this.puntos - puntos;
    }

    public getPenalizado():boolean
    {
        return this.penalizacion;
    }
    public setPenalizado(penalizacion: boolean):void
    {
        this.penalizacion = penalizacion;
    }
    public getActivo():boolean
    {
        return this.activo;
    }
    public setActivo(activo:boolean):void
    {
        this.activo = activo;
    }
    static revive(key: string, value: any): usuario | any {
        if (typeof value === 'object' && value !== null && 'nomyape' in value) {
            const user = new usuario(value.nomyape,value.dni,value.edad,value.telefono,value.direccion);
            Object.assign(user, value);
            return user;
        }
        return value;
    }
}