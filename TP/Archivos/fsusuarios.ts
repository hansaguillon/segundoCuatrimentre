
import * as fs from 'fs';
import { usuario } from '../Clases/usuario';
import { coleccionUsuarios } from "../Arreglos/coleccionUsuarios";

export class FileManagerUsuarios {




  // Método para guardar un arreglo de objetos en el archivo.
  static guardarDatosUsuarios(usuarios: usuario[]): void {
    const userJSON = JSON.stringify(usuarios,null,2);
    fs.writeFileSync('../Datos/user.json', userJSON, {
      encoding: "utf8",
    });
  }



  // Método para cargar los datos desde el archivo.
   static cargarDatosUsuarios(): usuario[] {
    try {
      const userJSON = fs.readFileSync('../Datos/user.json', 'utf8');
      return JSON.parse(userJSON,usuario.revive);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
      return [];
    }
  }

 
  
}
/*
// Uso de la clase FileManager.
const manager = new FileManagerUsuarios();
const usuarios = new coleccionUsuarios;


usuarios.cargarUsuarios(manager.cargarDatosUsuarios());
console.log(usuarios.listarUsuarios());

usuarios.agregarUsuario("pau",33847625,34,"2215588742","brown 825");
usuarios.agregarUsuario("hans",35412721,32,"2983346206","brown 825");



manager.guardarDatosUsuarios(usuarios.devolverusuarios());
console.log(usuarios.listarUsuarios());
*/

