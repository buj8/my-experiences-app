class Comentario {
    constructor(u, exp, txt) {
        this.u = u;
        this.exp = exp;
        this.txt = txt;
        this.likes = [];
    }
    like() {
        if (!this.likes.includes(localStorage.getItem("currentUser"))) {
            this.likes.push((localStorage.getItem("currentUser")));
        }
    }
}