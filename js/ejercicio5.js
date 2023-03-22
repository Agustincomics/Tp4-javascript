/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }
    mostrarGeneracion(){
        if (this.nacimiento >= 1930 &&  this.nacimiento <= 1948) {
            document.write(`${this.nombre} es de la Silent Generation. Su RASGO CARACTERISTICO es la AUTESRIDAD <br>`);
        }

        if (this.nacimiento >= 1949 &&  this.nacimiento <= 1968) {
            document.write(`${this.nombre} es de la Baby Boom. Su RASGO CARACTERISTICO es la AMBICION  <br>`);
        }

        if (this.nacimiento >= 1969 &&  this.nacimiento <= 1980) {
            document.write(`${this.nombre} es de la GENERACION X. Su RASGO CARACTERISTICO es la OBSESION POR EL EXITO <br>`);
        }

        if (this.nacimiento >= 1981 &&  this.nacimiento <= 1993) {
            document.write(`${this.nombre} es de la GENERACION Y. Su RASGO CARACTERISTICO es la FRUSTRACION <br>`);
        }

        if (this.nacimiento >= 1994 &&  this.nacimiento <= 2010) {
            document.write(`${this.nombre} es de la GENERACION Z. Su RASGO CARACTERISTICO es la IRREVERENCIA <br>`);
        }
    }
    esMayorDeEdad(){
        if (this.edad >= 18) {
            document.write(`${this.nombre} es MAYOR de edad <br>`);
        } else {
            document.write(`${this.nombre} es MENOR de edad <br>`);
        }
    }
    generaDNI(){
        let numero = Math.floor(Math.random() * 100000000);
        numero = numero.toString();
        while (numero.length < 8) {
        numero = numero + "0";
        }
        document.write(`El DNI generado es: ${numero} <br>`);
    }
    mostrarDatos(){
        document.write(`NOMBRE: ${this.nombre},<br> edad: ${this.edad},<br> DNI: ${this.dni},<br> SEXO: ${this.sexo},<br> PESO: ${this.peso},<br> ALTURA: ${this.altura},<br> NACIMIENTO: ${this.nacimiento}, <br>`);
    }
}

let nombre = prompt("Ingrese el nombre");
let edad = parseInt(prompt("Ingrese la edad"));
let dni = parseInt(prompt("Ingrese el DNI"));
let sexo = prompt("Ingrese el sexo de la persona");
let peso = parseFloat(prompt("Ingrese el peso de la persona"));
let altura = parseFloat(prompt("Ingrese la altura de la persona"));
let nacimiento = prompt("Ingrese el año nacimiento de la persona");

let persona1 = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();
persona1.generaDNI();