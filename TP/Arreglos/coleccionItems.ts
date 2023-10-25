import { FileManageritems } from "../Archivos/fsitems";
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
                FileManageritems.guardarDatos(this.items);
            }
            else
            {
                console.log("El libro ya se encuentra cargado");
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

        const itemlibre = this.items.find((item) =>item.getCodigo() === cod);
        const itemrev = libro.revive('',itemlibre)
        return itemrev;
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

    public pedirDatos()
    {
        const codigo = rs.questionInt("Ingrese codigo del libro: ");
        const titulo = rs.question("Ingrese titulo: ");
        const anio = rs.questionInt("Ingrese año: ");
        const cant = rs.questionInt("Ingrese la cantidad de ejemplares que tenemos en stock: ");
        const autor = rs.question("Ingrese el autor: ");
        const genero = rs.question("Ingrese el genero: ");
        this.agregarLibro(codigo,titulo,anio,cant,autor,genero);
    }

    public menuItems()
    {
        this.cargarItems(FileManageritems.cargarDatos());
        while(true)
        {
            console.clear()
            const choice = rs.keyInSelect(this.menuOptions);
             switch(choice)
             {
                case 0:
                   this.listarItems();
                   rs.keyInPause("");
                    break;
                case 1:
                    this.pedirDatos();
                    rs.keyInPause("2");
                    break;
                case 2:
                    const cod =rs.questionInt("Ingrese el codigo del libro que desea eliminar: ");
                    const itemdel = this.buscarItemPorCod(cod);
                    if(itemdel !== undefined)
                    {
                        console.log("Esta seguro que desea eliminar los datos de "+itemdel.getTitulo());
                        const choice2 = rs.keyInSelect(this.confirmacionOptions);
                        switch (choice2)
                        {
                            case 0:
                                this.eliminarItemxcod(cod);;
                                break;
                            default:
                                console.log("operacion cancelada");
                                break;
                        }
                    }
                    else
                    {
                        console.log("El item no existe");
                    }
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
    confirmacionOptions = ["Eliminar"];



}