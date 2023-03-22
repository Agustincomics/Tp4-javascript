/*Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimeDatos() {
    document.write(`El CODIGO del producto es:${this.codigo}<br> El NOMBRE del producto es:${this.nombre}<br> El PRECIO del producto es:${this.precio}<br> <br>`);
  }
}

let codigo1 = parseInt(prompt("Ingrese el codigo del producto"));
let nombre1 = prompt("Ingrese el nombre del producto");
let precio1 = parseInt(prompt("Ingrese el precio del producto"));
let producto1 = new Producto(codigo1, nombre1, precio1);

let codigo2 = parseInt(prompt("Ingrese el codigo del producto"));
let nombre2 = prompt("Ingrese el nombre del producto");
let precio2 = parseInt(prompt("Ingrese el precio del producto"));
let producto2 = new Producto(codigo2, nombre2, precio2);

let codigo3 = parseInt(prompt("Ingrese el codigo del producto"));
let nombre3 = prompt("Ingrese el nombre del producto");
let precio3 = parseInt(prompt("Ingrese el precio del producto"));
let producto3 = new Producto(codigo3, nombre3, precio3);

const productos = [producto1, producto2, producto3];

for (let i = 0; i < 4; i++) {
  productos[i].imprimeDatos();
}
