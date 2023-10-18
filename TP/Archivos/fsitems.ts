const fs = require('fs');
import { itemslibreria } from "../Clases/itemlibre";
import { libro } from "../Clases/libros";


export class FileManageritems {


  // Método para guardar un arreglo de objetos en el archivo.
  static guardarDatos(items: itemslibreria[]): void {
    
    const userJSON = JSON.stringify(items,null,2);
    fs.writeFileSync('../Datos/items.json', userJSON, {
      encoding: "utf8",
    });
  }

  // Método para cargar los datos desde el archivo.
  static cargarDatos(): itemslibreria[] {
    try {
      const userJSON = fs.readFileSync('../Datos/items.json', 'utf8');
      
      return JSON.parse(userJSON,itemslibreria.revive);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
      return [];
    }
  }
}