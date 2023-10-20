const fs = require('fs');
import { itemslibreria } from "../Clases/itemlibre";
import {prestamo} from "../Clases/prestamo"
import { usuario } from "../Clases/usuario";


export class FileManagerPrestamos {


  // Método para guardar un arreglo de objetos en el archivo.
  static guardarDatos(prestamos: prestamo[]): void {
    
    const userJSON = JSON.stringify(prestamos,null,2);
    fs.writeFileSync('../Datos/prestamos.json', userJSON, 'utf8');
  }

  // Método para cargar los datos desde el archivo.
   static cargarDatos(): prestamo[] {
    try {
      const userJSON = fs.readFileSync('../Datos/prestamos.json', 'utf8');
  
      return JSON.parse(userJSON,prestamo.revive2);
    } catch (error) {
      console.error('Error al cargar los datos:');
      return [];
    }
  }

  
}