import Usuario from "./Usuario";

function jsonToUser(j) {
    var u = JSON.parse(j);
    return new Usuario(u.username, u.pass, u.name, u.surname, u.email, u.bdate, u.interest, u.gender, u.picture);
}

export default jsonToUser;