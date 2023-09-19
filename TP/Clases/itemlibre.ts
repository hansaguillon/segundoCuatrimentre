import { randomUUID as uid } from "node:crypto";


export class itemslibreria{

    private id: string = uid();
    private titulo : string;
    private anio : number;
    private disponible : boolean = true;
    private cant: number;
    private codigo : number;

    public constructor(codigo:number,titulo:string,anio:number,cant:number)
    {
        this.titulo = titulo;
        this.anio = anio;
        this.cant = cant;
        this.codigo = codigo;
    }
    public getCodigo():number{
        return this.codigo;
    }

    public getId():string{
        return this.id;
    }

    public getTitulo():string{
        return this.titulo;
    }

    public setTitulo(titulo:string):void{
        this.titulo = titulo;
    }

    public getAnio():number
    {
        return this.anio;
    }
    public setAnio(anio:number):void
    {
        this.anio = anio;
    }
    public getDisponible():boolean
    {
        return this.disponible;
    }
    public setDisponible():void
    {
        this.disponible = !this.disponible;
    }
    public gerCant():number
    {
        return this.cant;
    }
    public sumarCant(cant:number):void
    {
        this.cant += cant;
    }
    public restarCant(cant:number):void
    {
        this.cant -= cant;
    }




}



