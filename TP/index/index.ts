
import { coleccionUsuarios } from "../Arreglos/coleccionUsuarios";
import { coleccionItems } from "../Arreglos/coleccionItems";
import { coleccionPrestamos } from "../Arreglos/coleccionPrestamos";
import { FileManagerPrestamos } from "../Archivos/fsprestamos";
import { FileManagerUsuarios } from "../Archivos/fsusuarios";
import { FileManageritems } from "../Archivos/fsitems";
import { menu } from "./Menus";


const libros = new coleccionItems();
const usuarios = new coleccionUsuarios();
const prestamos = new coleccionPrestamos();
const menuPrincipal = new menu();

/*
libros.agregarLibro(1,"Juego de tronos",1996,2,"George R. R. Martin","Fantasía heroica");
libros.agregarLibro(2,"Choque de reyes",1998,3,"George R. R. Martin","Fantasía heroica");
libros.agregarLibro(3,"Tormenta de espadas",2000,1,"George R. R. Martin","Fantasía heroica");
libros.agregarLibro(4,"Festín de cuervos",2005,5,"George R. R. Martin","Fantasía heroica");
libros.agregarLibro(5,"Danza de dragones ",2011,8,"George R. R. Martin","Fantasía heroica");
FileManageritems.guardarDatos(libros.devovlerItems());
*/

libros.cargarItems(FileManageritems.cargarDatos());
usuarios.cargarUsuarios(FileManagerUsuarios.cargarDatosUsuarios());
prestamos.cargarPrestamos(FileManagerPrestamos.cargarDatos());
/*
prestamos.agregarPrestamo(35412721,3);
FileManagerPrestamos.guardarDatos(prestamos.devolverPrestamos());


prestamos.devoluciondelPrestamo("88cc3bd2-39e5-4b5a-b28a-801f72910b14");
//prestamos.mostrarPrestamo("88cc3bd2-39e5-4b5a-b28a-801f72910b14");


*/


menuPrincipal.menu();





