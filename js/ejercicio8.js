/* Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse". */

class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      document.write(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}. <br>`);
    }
  
    despedirse() {
      document.write(`Adiós, que tengas un buen día. <br>`);
    }
  }
  
  let nombre1 = prompt("Ingrese el nombre de la primera persona");
  let edad1 = parseInt(prompt("Ingrese la edad de la primera persona"));
  let profesion1 = prompt("Ingrese la profesion de la primera persona");
  let persona1 = new Persona(nombre1, edad1, profesion1);

  let nombre2 = prompt("Ingrese el nombre de la segunda persona");
  let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona"));
  let profesion2 = prompt("Ingrese la profesion de la segunda persona");
  let persona2 = new Persona(nombre2, edad2, profesion2);
  
  persona1.saludar();
  persona2.saludar(); 
  persona1.despedirse(); 
  persona2.despedirse(); 
  