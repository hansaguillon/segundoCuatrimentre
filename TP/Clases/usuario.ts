import { randomUUID as uid } from "node:crypto";

export class usuario{
    private id: string = uid();
    private nomyape : string;
    private dni :number;
    private edad : number;
    private socio: boolean;
    private telefono:string;
    private direccion:string;
    private puntos:number = 0;


    constructor(nomyape:string,dni:number,edad:number,socio:boolean,telefono:string,direccion:string)
    {
        this.nomyape = nomyape;
        this.dni = dni;
        this.edad = edad;
        this.socio = socio;
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
    public getSocio():boolean
    {
        return this.socio;
    }
    public setSocio():void{
        this.socio = !this.socio;
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
    public setPuntos(puntos:number):void
    {
        this.puntos = puntos;
    }
}