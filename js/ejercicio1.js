/*Crea un objeto llamado auto que tenga algunas características como el color, 
marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.
  */

class Auto{
    constructor(color, marca, modelo){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
    encendido(){
        document.write(`El ${modelo} esta ENCENDIDO <br>`);
    }
    apagado(){
        document.write(`El ${modelo} esta APAGADO <br>`);
    }
}

let color = prompt("Ingrese el color de su auto");
let marca = prompt("Ingrese la marca de su auto");
let modelo = prompt("Ingrese el modelo de su auto");

let auto = new Auto(color, marca, modelo);
document.write(`El COLOR de auto es ${auto.color}<br>`);
document.write(`La MARCA de auto es ${auto.marca}<br>`);
document.write(`El MODELO de auto es ${auto.modelo}<br>`);
auto.apagado();
auto.encendido();