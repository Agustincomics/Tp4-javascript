/* Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, 
calcular el perímetro y el área
 */

class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho  = ancho;
    }
    modificar(nAlto, nAncho){
        alto = nAlto;
        ancho = nAncho;
    }
    propiedades(){
        document.write(`El ALTO del rectangulo es ${alto}<br>`);
        document.write(`El ANCHO del rectangulo es ${ancho}<br>`);
    }
}

let alto = parseFloat(prompt("Ingrese el ALTO del rectangulo"));
let ancho = parseFloat(prompt("Ingrese el ANCHO del rectangulo"));
let rectangulo = new Rectangulo(alto, ancho);
rectangulo.propiedades();
let respuesta = prompt("¿Quiere cambiar las propiedades del rectangulo? Escriba si o no");
if (respuesta === "si" || respuesta === "SI" || respuesta === "Si") {
    document.write("Las  NUEVAS propiedades del rectangulo son:<br>")
    let nAlto = parseFloat(prompt("Ingrese el NUEVO ALTO"));
    let nAncho = parseFloat(prompt("Ingrese el NUEVO ANCHO"));
    rectangulo.modificar(nAlto, nAncho);
    rectangulo.propiedades();
}

