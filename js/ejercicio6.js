/*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad.

Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro{
    constructor(isbn, titulo, autor, paginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;
    }

    //GET
    get isbn(){
        return this._isbn;
    }
    get titulo(){
        return this._titulo;
    }
    get autor(){
        return this._autor;
    }
    get paginas(){
        return this._paginas;
    }

    //SET
    set isbn(isb){
        this._autor = isb;
    }
    set titulo(title){
        this._titulo = title;
    }
    set autor(autorr){
        this._autor = autorr;
    }
    set paginas(pag){
        this._paginas = pag;
    }

    mostrarLibro(){
        document.write(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.isbn} <br>`);
    }
}

let isbn1 = prompt("Ingrese el isbn del primer libro");
let titulo1 = prompt("Ingrese el titulo del primer libro");
let autor1 = prompt("Ingrese el autor del primer libro");
let paginas1 = parseInt(prompt("Ingrese las paginas del primer libro"));
let libro1 = new Libro(isbn1, titulo1, autor1, paginas1);

let isbn2 = prompt("Ingrese el isbn del segundo libro");
let titulo2 = prompt("Ingrese el titulo del segundo libro");
let autor2 = prompt("Ingrese el autor del segundo libro");
let paginas2 = parseInt(prompt("Ingrese las paginas del segundo libro"));
let libro2 = new Libro(isbn2, titulo2, autor2, paginas2);

libro1.mostrarLibro();
libro2.mostrarLibro();