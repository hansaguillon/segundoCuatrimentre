const fs = require('fs');
import {prestamo} from "../Clases/prestamo"


export class FileManagerPrestamos {
    private filePath: string;

    constructor() {

        this.filePath = '../Datos/prestamos.json';
    }

  // Método para guardar un arreglo de objetos en el archivo.
  public guardarDatos(prestamos: prestamo[]): void {
    const userJSON = JSON.stringify(prestamos);
    fs.writeFileSync(this.filePath, userJSON, 'utf8');
  }

  // Método para cargar los datos desde el archivo.
   public cargarDatos(): prestamo[] {
    try {
      const userJSON = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(userJSON);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
      return [];
    }
  }
}