class Experiencia {

    constructor(lugar, continente, nombre, descripcion) {
        this.lugar = lugar;
        this.continente = continente;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen;
        this.colaboradores = [];
    }

    addColaborador(colab) {
        this.colaboradores.push(colab);
    }

    
}