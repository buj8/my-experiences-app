import Usuario from '../logic/Usuario';

function GetCurrentUser() {
    var u = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")));
    if (!u) { return }
    return new Usuario(u.username, u.pass, u.name, u.surname, u.email, u.bdate, u.interest, u.gender, u.picture);
}

export default GetCurrentUser;