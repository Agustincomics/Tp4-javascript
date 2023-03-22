/* crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. 
Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones a diferentes destinos. 
Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
 */

class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        document.write(`${pasajero} abordo el avion ${this.nombre}<br>`);
      } else {
        document.write(`el avion ${this.nombre} esta lleno. <br>`);
      }
    }
  }
  
  class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
  
    buscarAvion(nombre) {
      for (let i = 0; i < this.listaAviones.length; i++) {
        if (this.listaAviones[i].nombre === nombre) {
          document.write(`avion encontrado: ${this.listaAviones[i].nombre} con destino a ${this.listaAviones[i].destino}. <br>`);
          return this.listaAviones[i]; 
        } else {
            document.write(`no se encontro el avion ${nombre}. <br>`);
        }
      }
      
      return null; 
    }
  }
  
  // Crear el aeropuerto
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  
  // Crear los aviones y agregarlos al aeropuerto
  let nombre1 = prompt("Ingrese el nombre del primer avion:");
  let capacidad1 = parseInt(prompt("Ingrese la capacidad del primer avion:"));
  let destino1 = prompt("Ingrese el destino del primer avion:");
  let avion1 = new Avion(nombre1, capacidad1, destino1);

  let nombre2 = prompt("Ingrese el nombre del segundo avion:");
  let capacidad2 = parseInt(prompt("Ingrese la capacidad del segundo avion:"));
  let destino2 = prompt("Ingrese el destino del segundo avion:");
  let avion2 = new Avion(nombre2, capacidad2, destino2);

  let nombre3 = prompt("Ingrese el nombre del tercer avion:");
  let capacidad3 = parseInt(prompt("Ingrese la capacidad del tercer avion:"));
  let destino3 = prompt("Ingrese el destino del tercer avion:");
  let avion3 = new Avion(nombre3, capacidad3, destino3);  
  
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
  
  // Buscar un avión y abordar un pasajero
  let avionEncontrado = aeropuertoInternacional.buscarAvion(prompt("Ingrese el nombre del avion a buscar:"));
  
  if (avionEncontrado) {
    avionEncontrado.abordar('agustin');
  }
  