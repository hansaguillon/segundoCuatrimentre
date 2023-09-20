import * as fs from 'fs';
import * as path from 'path';



const filePath = path.join(__dirname,'items.txt');


fs.writeFileSync(filePath,"ALGO");

const contenido:string = fs.readFileSync(filePath,'utf8' );

console.log(contenido);