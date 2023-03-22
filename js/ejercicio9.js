/* Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.  */

class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      document.write(`Este animal hace sonidos.`);
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      document.write(`${this.nombre} hace: Guau guau <br>`);
    }
  }
  
  class Gato extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      document.write(`${this.nombre} hace: Miau miau <br>`);
    }
  }
  
  let nombreP = prompt("Ingrese el nombre del perro");
  let edadP = parseInt(prompt("Ingrese la edad del perro"));
  let perro = new Perro(nombreP, edadP);
  perro.emitirSonido(); 

  let nombreG = prompt("Ingrese el nombre del gato");
  let edadG = parseInt(prompt("Ingrese la edad del gato"));
  let gato = new Gato(nombreG, edadG);
  gato.emitirSonido(); 
  