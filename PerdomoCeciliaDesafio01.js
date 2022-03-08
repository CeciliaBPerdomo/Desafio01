class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `Nombre completo: ${this.nombre} ${this.apellido}`;
    }

    addMascota (animal){
        this.mascotas.push(animal);
    }

    countMascota(){
        let cantidad = this.mascotas.length;
        return `Tiene ${cantidad} mascotas.`;
    }

    addLibro(Libro){
        this.libros.push(Libro);
    }

    getBooksName(){
        // let i = 0;
        // for (i in this.libros){
        //     let titulos = this.libros[i].titulo
        //     i = i + 1;
        //     return `Titulo de los libros: ${titulos}`;
        // }   
        return this.libros.map((titulo) => this.libros.titulo);
    }
}

let Usuario1 = new Usuario('Cecilia', 'Perdomo', 
    [{"titulo": 'El señor de las moscas', "autor": 'William Golding'},
    {"titulo": 'Fundacion', "autor": 'Isaac Asimov'}
    ],
    ['Perro', 'Gato']
)

console.log('Desafio 1: Cecilia Perdomo')
console.log(Usuario1.getFullName());
Usuario1.addMascota('Chancho');
console.log(Usuario1);
console.log(Usuario1.countMascota());
Usuario1.addLibro({titulo: 'El señor de los anillos', autor: 'J. Rowling'});
console.log(Usuario1);
console.log(Usuario1.getBooksName());
