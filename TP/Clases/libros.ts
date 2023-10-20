import {itemslibreria} from "./itemlibre"



export class libro extends itemslibreria
{
    private autor : string;
    private genero : string;

    public constructor(codigo:number,titulo:string,anio:number,cant:number,autor:string,genero:string)
    {
        super(codigo,titulo,anio,cant);
        this.autor = autor;
        this.genero = genero;

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

    
    static revive(key: string, value: any): libro | any {
        if (typeof value === 'object' && value !== null && 'autor' in value) {
            const book = new libro(value.codigo,value.titulo,value.anio,value.cant,value.autor,value.genero);
            Object.assign(book, value);
            return book;
        }
        return value;
    }








}



