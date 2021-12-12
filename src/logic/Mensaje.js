class Mensaje {
    constructor(u1, u2, txt) {
        this.u1 = u1;
        this.u2 = u2;
        this.txt = txt;
    }

    addMensaje() {
        if (localStorage.getItem("nMsg") === null) {
            localStorage.setItem("nMsg", "0");
        }
        else {
            var nusers = parseInt(localStorage.getItem("nUsers"));
            nusers++;
            localStorage.setItem("nMsg", nusers.toString());
        }
    }

}