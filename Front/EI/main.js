import { Recta } from "./recta.js";
import { Punto } from "./punto.js";


const punto1 = new Punto(1,2);
const punto2 = new Punto(3,4);

const recta1 = new Recta(punto1,punto2);

console.log(recta1);