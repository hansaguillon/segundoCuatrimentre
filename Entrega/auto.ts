import { error } from "console";

abstract class vehiculo
{
    private _marca:string;
    private _modelo:number;
    private _color:string;
    private _velocidad: number;

    constructor (marca:string,modelo:number,color:string)
    {
        this._velocidad = 0;
        this._modelo = modelo;
        this._color = color;
        this._marca = marca;
    }

    abstract acelerar():void;

    abstract frenar():void;

    abstract informarvelocidad():number;

    //setters y gettes
    get marca():string{
        return this._marca;
    }
    set marca(marca:string)
    {
        this._marca = marca;
    }
    get color():string
    {
        return this._color;
    }
    set color(color:string)
    {
        this._color = color;
    }
    get modelo():number{
        return this._modelo;
    }
    set modelo(modelo:number)
    {
        if(modelo > 1980)
        {
            this._modelo = modelo;
        }
        else
        {
            throw new Error("el auto es muy viejo para este sistema");
        }
    }

    get velocidad():number
    {
        return this._velocidad;
    }

    set velocidad(velocidad:number)
    {
        if(velocidad >= 0)
        {
            this._velocidad = velocidad;
        }
        else
        {
            throw new Error("la velodad no puede ser negativa");
        }
    }

    
}

class autoCiudad extends vehiculo
{
    private _dominio :string;

    constructor(marca:string,modelo:number,color:string,dominio:string){
        super(marca,modelo,color)
        this._dominio = dominio;

    }

    get dominio():string
    {
        return this._dominio;
    }

    set dominio(dominio:string)
    {
        this._dominio = dominio;
    }

    acelerar(): void {
        this.velocidad += 30;
    }

    frenar(): void {
        this.velocidad -= 30
    }
    informarvelocidad(): number {
        return this.velocidad;
    }
}


try{
const focus = new autoCiudad("Ford",2010,"Azul","IVL647");
focus.acelerar();
console.log(focus.informarvelocidad());
focus.acelerar();
console.log(focus.informarvelocidad());
focus.frenar();
console.log(focus.informarvelocidad());
console.log(focus.modelo);
focus.frenar();
focus.frenar();
focus.frenar();
focus.frenar();
console.log(focus.informarvelocidad());

console.log(focus.informarvelocidad());
}
catch(Error)
{
    console.error("No puedo usar el error.message");
}