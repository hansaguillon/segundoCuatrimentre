import {itemslibreria} from "./itemlibre"


class revista extends itemslibreria
{
    private editor : string;

    public constructor(titulo:string,anio:number,editor:string)
    {
        super(titulo,anio);
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