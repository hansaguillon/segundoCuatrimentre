/*
class MiClase {
    fecha: Date;
  
    constructor() {
      // Inicializa la propiedad 'fecha' con la fecha y hora actuales
      this.fecha = new Date();
    }
  
    obtenerFechaActual(): string {
      // Puedes formatear la fecha como desees y devolverla como una cadena
      const opcionesDeFormato: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };
      return this.fecha.toLocaleString(undefined, opcionesDeFormato);
    }
    obtenerFechaActual(): string {
        // Puedes formatear la fecha como desees y devolverla como una cadena
        const opcionesDeFormato: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        };
        return this.fecha.toLocaleString(undefined, opcionesDeFormato);
      }
  }
  
  // Crear una instancia de la clase
  const miObjeto = new MiClase();
  
  // Obtener y mostrar la fecha actual
  const fechaActual = miObjeto.obtenerFechaActual();
  const fechaNueva = new Date(fechaActual);
  console.log(`Fecha actual: ${fechaActual}`);
  fechaNueva.setDate(fechaActual.getDate() + 7);*/

  // Obtener la fecha actual
const fechaActual = new Date();

// Sumar 7 días a la fecha actual
const fechaNueva = new Date(fechaActual);
fechaNueva.setDate(fechaActual.getDate() + 7);

// Imprimir la fecha nueva
console.log(`Fecha actual: ${fechaActual.toDateString()}`);
console.log(`Fecha nueva (después de sumar 7 días): ${fechaNueva.toDateString()}`);
