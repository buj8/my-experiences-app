class Experiencia {

    constructor(expId, user, lugar, continente, nombre, descripcion, precio) {
        this.expId = expId;
        this.user = user;
        this.lugar = lugar;
        this.continente = continente;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = './images/randomexp/' + Math.floor(Math.random() * 7) + ".jpg";
        this.colaboradores = [];
        this.likes = [];
        this.mensajes = [];
    }

    addColaborador(colab) {
        this.colaboradores.push(colab);
    }
    addExp() {
        if (localStorage.getItem("nUsers") === null) {
            localStorage.setItem("nUsers", "0");
        }
        else {
            var nusers = parseInt(localStorage.getItem("nExp"));
            nusers++;
            localStorage.setItem("nExp", nusers.toString());
        }
    }

    saveExp() {
        this.addExp();
        localStorage.setItem("E" + parseInt(localStorage.getItem("nExp")), JSON.stringify(this));
    }

    getLikes() {
        return this.likes.length();
    }

    getPrecio() {
        var dolar = "$";
        for (var i = 0; i < this.precio; i++) {
            dolar += "$";
        }
        return dolar;
    }

}

export default Experiencia;