
import * as fs from 'fs';
import { usuario } from '../Clases/usuario';

export class FileManagerUsuarios {
    private filePath: string;

    constructor() {

        this.filePath = '../Datos/user.json';
    }

  // Método para guardar un arreglo de objetos en el archivo.
  public guardarDatos(usuarios: usuario[]): void {
    const userJSON = JSON.stringify(usuarios);
    fs.writeFileSync(this.filePath, userJSON, 'utf8');
  }

  // Método para cargar los datos desde el archivo.
   public cargarDatos(): usuario[] {
    try {
      const userJSON = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(userJSON);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
      return [];
    }
  }

  
  public buscarUsusarioPorDni(dni:number,usuarios: usuario[]):usuario | undefined{
      

    let usuario =usuarios.find((user) => user.getDni() === dni)


    return usuario;

}
}

// Uso de la clase FileManager.
const manager = new FileManagerUsuarios();
const usuarios = [new usuario("hans",35412721,32,"2983346206","Sarmineto"), new usuario("juan",35412722,35,"2983346206","Sarmineto")];

// Guardar objetos en el archivo.
manager.guardarDatos(usuarios);

// Cargar objetos desde el archivo.
const objetosCargados = manager.buscarUsusarioPorDni(35412722,usuarios);
console.log(objetosCargados);



