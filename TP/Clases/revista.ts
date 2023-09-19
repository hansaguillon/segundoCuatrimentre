import {itemslibreria} from "./itemlibre"


export class revista extends itemslibreria
{
    private editor : string;

    public constructor(codigo:number,titulo:string,anio:number,cant:number,editor:string)
    {
        super(codigo,titulo,anio,cant);
        this.editor = editor;

    }

    public getEditor():string
    {
        return this.editor;
    }

    public setEditor(editor:string):void
    {
        this.editor = editor;
    }
}