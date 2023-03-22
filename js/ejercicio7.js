/*Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
 */
class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tam = 10) {
      this.tam = tam;
      this.contactos = [];
    }
  
    aniadirContacto(contacto) {
      if (this.contactos.length < this.tam) {
        this.contactos.push(contacto);
        document.write(`Contacto ${contacto.nombre} añadido.<br>`);
      } else {
        document.write(`La agenda está llena, no se pueden añadir más contactos. <br>`);
      }
    }
  
    existeContacto(contacto) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === contacto.nombre) {
          document.write(`El contacto ${contacto.nombre} ya existe. <br>`);
          return true;
        }
      }
      document.write(`El contacto ${contacto.nombre} no existe. <br>`);
      return false;
    }
  
    listarContactos() {
      document.write(`--- Lista de Contactos --- <br>`);
      for (let i = 0; i < this.contactos.length; i++) {
        document.write(`${this.contactos[i].nombre}: ${this.contactos[i].telefono} <br>`);
      }
       document.write(`-------------------------- <br>`);
    }
  
    buscarContacto(nombre) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === nombre) {
          document.write(`${this.contactos[i].nombre}: ${this.contactos[i].telefono} <br>`);
          return;
        }
      }
      document.write(`El contacto ${nombre} no existe. <br>`);
    }
  
    eliminarContacto(contacto) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === contacto.nombre) {
          this.contactos.splice(i, 1);
          document.write(`Contacto ${contacto.nombre} eliminado.  <br>`);
          return true;
        }
      }
      document.write(`El contacto ${contacto.nombre} no existe. <br>`);
      return false;
    }
  
    agendaLlena() {
      if (this.contactos.length >= this.tam) {
        document.write(`La agenda está llena. <br>`);
        return true;
      } else {
        document.write(`La agenda no está llena. <br>`);
        return false;
      }
    }
  
    huecosLibres() {
      document.write(`La agenda tiene ${this.tam - this.contactos.length} huecos libres. <br>`);
    }
  }
  
  // Ejemplo de uso
  
  const agenda = new Agenda();

  /* while (true) {
    console.log('\n===== Agenda Telefónica =====');
    console.log('1. Añadir contacto <br>');
    console.log('2. Buscar contacto <br>');
    console.log('3. Eliminar contacto <br>');
    console.log('4. Listar contactos <br>');
    console.log('5. Verificar si la agenda está llena <br>');
    console.log('6. Verificar cuántos contactos más se pueden ingresar <br>');

    const opcion = parseInt(prompt('Ingrese una opción: '));
    switch (opcion) {
        case 1:
          const nombre = prompt('Ingrese el nombre del contacto: ');
          const telefono = parseInt(prompt('Ingrese el teléfono del contacto: '));
          agenda.aniadirContacto(new Contacto(nombre, telefono));
          break;
        case 2:
          const nombreBuscado = prompt('Ingrese el nombre del contacto: ');
          agenda.buscarContacto(nombreBuscado);
          break;
        case 3:
          const nombreEliminado = prompt('Ingrese el nombre del contacto: ');
          const contactoEliminado = new Contacto(nombreEliminado);
          agenda.eliminarContacto(contactoEliminado);
          break;
        case 4:
          agenda.listarContactos();
          break;
        case 5:
          document.write(`La agenda ${agenda.agendaLlena()}<br>`);
          break;
        case 6:
          document.write(`${agenda.huecosLibres()}<br>`);
          break;  
    }
  } */

  agenda.aniadirContacto(new Contacto('Agus', '3815970428'));
  agenda.aniadirContacto(new Contacto('Lolo', '1122'));
  agenda.listarContactos();
  agenda.buscarContacto('Agus');
  agenda.buscarContacto('Santi');
  
  const contactoEliminar = new Contacto('Carlos', '3333333');
  agenda.aniadirContacto(contactoEliminar);
  agenda.eliminarContacto(contactoEliminar);
  
  agenda.agendaLlena();
  agenda.huecosLibres();
  
  for (let i = 0; i < 10; i++) {
    agenda.aniadirContacto(new Contacto(`Contacto ${i}`, `Teléfono ${i}`));
  }
  
  agenda.aniadirContacto(new Contacto('Extra', '123456789'));
  agenda.listarContactos(); 
  