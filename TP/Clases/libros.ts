import {itemslibreria} from "./itemlibre"



class libro extends itemslibreria
{
    private autor : string;
    private genero : string;
    private edadApta :number;

    public constructor(titulo:string,anio:number,autor:string,genero:string,edadApta:number)
    {
        super(titulo,anio);
        this.autor = autor;
        this.genero = genero;
        this.edadApta = edadApta;

    }


    public getAutor():string{
        return this.autor;
    }

    public setAutor(autor:string):void{
        this.autor = autor;
    }

    public getGenero():string
    {
        return this.genero;
    }
    public setGenero(genero:string):void{
        this.genero = genero;
    }

    public getEdadApta():number
    {
        return this.edadApta;
    }

    public setEdadApta(edadApta:number):void
    {
        this.edadApta = edadApta;
    }








}



