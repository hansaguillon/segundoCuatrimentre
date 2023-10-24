import * as rs from "readline-sync";
import { coleccionUsuarios } from "../Arreglos/coleccionUsuarios";
import { coleccionItems } from "../Arreglos/coleccionItems";
import { coleccionPrestamos } from "../Arreglos/coleccionPrestamos";


export class menu
{
    private coleccionUser:coleccionUsuarios;
    private coleccionitem:coleccionItems;
    private coleccionprestamos:coleccionPrestamos;

    public constructor(){
        this.coleccionUser = new coleccionUsuarios();
        this.coleccionitem = new coleccionItems();
        this.coleccionprestamos = new coleccionPrestamos();
    }

    public menu()
{
    while(true)
    {
        console.clear()
        const choice = rs.keyInSelect(this.menuOptions);
         switch(choice)
         {
            case 0:
                this.coleccionUser.menuUsuarios();
                break;
            case 1:
                this.coleccionitem.menuItems();
                break;
            case 2:
                this.coleccionprestamos.menuPrestamos();
                break;
            default:
                rs.keyInPause("nino vimos");
                return;

         }
    }
}

 menuOptions = ["Usuarios",
    "Items",
    "Prestamos",
    
];
}








