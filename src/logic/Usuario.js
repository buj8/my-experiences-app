class Usuario {
    constructor(username, pass, name, surname, email, bdate, interest, gender, picture) {
        this.username = username;
        this.pass = pass;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.bdate = new Date(bdate);
        this.interest = numinteres(interest);
        this.gender = gender;
        this.picture = picture;
    }

    adduser() {
        if (localStorage.getItem("nUsers") === null) {
            localStorage.setItem("nUsers", "0");
        }
        else {
            var nusers = parseInt(localStorage.getItem("nUsers"));
            nusers++;
            localStorage.setItem("nUsers", nusers.toString());
        }
    }

    saveUser() {
        this.adduser();
        localStorage.setItem("U" + parseInt(localStorage.getItem("nUsers")), JSON.stringify(this));
    }

    updateUser() {
        localStorage.setItem(localStorage.getItem("currentUser"), JSON.stringify(this));
    }

}

function numinteres(num) {
    if (typeof num === "string") {
        return num;
    }
    var interes;
    switch (num) {
        case 0:
            interes = "Turismo cultural"
            break;
        case 1:
            interes = "Turismo ambiental"
            break;
        case 2:
            interes = "Turismo histórico"
            break;
        case 3:
            interes = "Turismo de negocios"
            break;
        default:
            break;
    }
    return interes;
}


export default Usuario;