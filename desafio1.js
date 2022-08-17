class Usuario{
    constructor(name,lastname,books,pets){
        this.nombre = name;
        this.apellido = lastname;
        this.libros = books
        this.mascotas = pets;


    }

    getFullName(){
        return `Mi nombre es ${this.nombre} ${this.apellido}`
    }
    addMascota(animal){
        this.mascotas.push(animal)
    }
    countMascotas(){
        return `El usuario tiene ${this.mascotas.length} mascotas`
    }
    addBook(nombre,autor){
        this.libros.push({nombre:nombre, autor:autor})
    }
    getBookNames(){
        return `Libros leidos por el usuario: ${this.libros.map(e=>e.nombre)} `
    }
}


const persona1 = new Usuario("Julian","Bogado",[{nombre: "El guardián entre el centeno", autor: "J. D. Salinger."}],["Mora", "Simón"])

console.log(persona1.getFullName());

persona1.addMascota("Berta");
console.log(persona1.mascotas)
console.log(persona1.countMascotas())

persona1.addBook("El Señor de los Anillos", "J. R. R. Tolkien")
console.log(persona1.libros)
console.log(persona1.getBookNames())