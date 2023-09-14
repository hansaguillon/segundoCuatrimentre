import { randomUUID as uid } from "node:crypto";


export class itemslibreria{

    private id: string = uid();
    private titulo : string;
    private anio : number;
    private disponible : boolean = true;

    public constructor(titulo:string,anio:number)
    {
        this.titulo = titulo;
        this.anio = anio;
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



}



