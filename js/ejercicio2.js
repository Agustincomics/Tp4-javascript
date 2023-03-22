/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero 
y volver a mostrar la descripción del estado de la cuenta.
*/

class Cuenta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    ingresar(ingreso){
        saldo = saldo +  ingreso;
        document.write(`El SALDO luego del INGRESO es de ${saldo} <br>`);
    }
    extraer(extraccion){
        saldo = saldo - extraccion;
        document.write(`El SALDO luego de la EXTRACCION es de ${saldo} <br>`);
    }
    informar(){
        document.write(`El TITULAR es ${titular} <br>`);
        document.write(`El SALDO es de ${saldo} <br>`);
    }
}

let titular = prompt("Ingrese el nombre del titular:");
let saldo = parseFloat(prompt("Ingrese el saldo inicial en su cuenta:"));

let cuenta = new Cuenta(titular, saldo);
cuenta.informar();
let ingreso = parseFloat(prompt("Ingrese el monto que va a agregar en su cuenta:"));
cuenta.ingresar(ingreso);
let extraccion = parseFloat(prompt("Ingrese el monto a retirar que no sea mayor al de su saldo en su cuenta:"));
while (extraccion > cuenta.saldo) {
    extraccion = parseFloat(prompt("Ingrese el monto a retirar que no sea mayor al de su saldo en su cuenta:"));
}
cuenta.extraer(extraccion);
cuenta.informar();