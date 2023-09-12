/*Ejercicio para empezar en clase y terminar de tarea sobre clase de deportistas olimpicos:
Crear un super clase llamada Deportista (que tenga al menos 3 atributos [al menos 1 atributo en protected] y 2 métodos ademas de 
los respectivos constructores. Crear 3 subclases hijas de esa superclase Deportista, cada una con al menos un nuevo método especifico 
y un atributo extra tambien.
Bonus: una de las sub clases podria estar compuesta por otras clases.*/


class Deportista {
    protected nombre : string;
    protected dni : number;
    private nacionalidad : string;

    constructor(nombre:string, dni :number , nacionalidad :string)
    {
        this.setNombre(nombre);
        this.setDni(dni);
        this.setNacionalidad(nacionalidad);
    }


    public getNombre():string{

        return this.nombre;
    }
    public setNombre(nombre:string):void
    {
        this.nombre = nombre;
    }

    getDni():number
    {
        return this.dni;
    }
    setDni(dni:number): void{
        this.dni = dni;
    }

    getNacionalidad():string{
        return this.nacionalidad;
    }

    setNacionalidad(nacionalidad : string):void
    {
        this.nacionalidad = nacionalidad;
    }
}

class futbolista extends Deportista
{
    private posicion: string;

    constructor(nombre:string, dni :number , nacionalidad :string,posicion:string){
    super(nombre, dni , nacionalidad)
    this.setPosicion(posicion);

    }

    public getPosicion():string
    {
        return this.posicion;
    }
    public setPosicion(posicion : string):void
    {
        this.posicion = posicion;

    }
}

class basquetbolista extends Deportista
{
    private altura: number;

    constructor(nombre:string, dni :number , nacionalidad :string,altura:number){
        super(nombre, dni , nacionalidad);
        this.setAltura(altura);

    }

    public getAltura():number{
        return this.altura;
    }
    public setAltura(altura :number):void
    {
        if(altura > 0) 
        {
            this.altura = altura;
        }
    }    
}

class tenista extends Deportista
{
    private raqueta: string

    constructor(nombre:string, dni :number , nacionalidad :string,raqueta:string){
        super(nombre, dni , nacionalidad);
        this.setRaqueta(raqueta);

    }

    public getRaqueta(): string{
        return this.raqueta;
    }

    public setRaqueta(raqueta:string)
    {
        this.raqueta = raqueta;
    }
}
