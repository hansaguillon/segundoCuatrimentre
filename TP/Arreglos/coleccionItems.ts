import { itemslibreria } from "../Clases/itemlibre";
import {libro} from "../Clases/libros";
import { revista } from "../Clases/revista";
import { coleccionUsuarios } from "./coleccionUsuarios";
import * as rs from "readline-sync";


export class coleccionItems 
{
    private items:itemslibreria[];



    public constructor()
    {
        this.items = [];
    }



    public agregarRevista(codigo:number,titulo:string,anio:number,cant:number,editor:string):void{
        try{
            let revis = this.buscarItemPorCod(codigo);
            if(revis === undefined)
            {
                const revista1 = new revista(codigo,titulo,anio,cant,editor);
                this.items.push(revista1);
            }
            else
            {
                throw new Error("La revista ya se encuentra cargada");
            }
        }catch(e)
        {
            console.error(e);
        }

    }
    public agregarLibro(codigo:number,titulo:string,anio:number,cant:number,autor:string,genero:string):void{
        try{
            let libro2 = this.buscarItemPorCod(codigo);
            if(libro2 === undefined)
            {
                const libro1 = new libro(codigo,titulo,anio,cant,autor,genero);
                this.items.push(libro1);
            }
            else
            {
                throw new Error("El libro ya se encuentra cargado");
            }



        }catch(e){
            console.error(e);
        }

    }

    public eliminarItem(id:string):void{

        this.items.forEach((item,indice) =>
        {
            if(item.getId() === id)
            {
                this.items.splice(indice,1);
            }

        })


    }
    public eliminarItemxcod(cod:number):void{

        this.items.forEach((item,indice) =>
        {
            if(item.getCodigo() === cod)
            {
                this.items.splice(indice,1);
            }

        })


    }
    public buscarItemPorCod(cod:number):itemslibreria | undefined{

        let itemlibre = this.items.find((item) =>item.getCodigo() === cod);

        return itemlibre;
    }

    public buscarItemPorId(id:string):itemslibreria | undefined{

        let itemlibre = this.items.find((item) =>item.getId() === id);

        return itemlibre;
    }

    public listarItems():void
    {
        this.items.forEach(function(item)
        {
            console.log(item);
        })
    }

    public cargarItems(items :itemslibreria[] ):void
    {
        this.items = items;
    }

    public devovlerItems():itemslibreria[]
    {
        return this.items;
    }


    public menuItems()
    {
        while(true)
        {
            console.clear()
            const choice = rs.keyInSelect(this.menuOptions);
             switch(choice)
             {
                case 0:
                    rs.keyInPause("1");
                    break;
                case 1:
                    rs.keyInPause("2");
                    break;
                case 2:
                    rs.keyInPause("3");
                    break;
                case 3:
                    rs.keyInPause("4");
                    break;
                default:
                    rs.keyInPause("Menu anterior");
                    return;

             }
        }
    }

     menuOptions = ["Listar Items",
        "Crear Item",
        "Eliminar Item",
        "Modificar Item"
    ];



}