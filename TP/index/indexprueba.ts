
import { coleccionUsuarios } from "../Arreglos/coleccionUsuarios";
import { coleccionItems } from "../Arreglos/coleccionItems";
import { coleccionPrestamos } from "../Arreglos/coleccionPrestamos";
import { FileManagerPrestamos } from "../Archivos/fsprestamos";
import { FileManagerUsuarios } from "../Archivos/fsusuarios";
import { FileManageritems } from "../Archivos/fsitems";



const libros = new coleccionItems();
const usuarios = new coleccionUsuarios();
const prestamos = new coleccionPrestamos();

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


prestamos.agregarPrestamo(35412721,2);
FileManagerPrestamos.guardarDatos(prestamos.devolverPrestamos());








