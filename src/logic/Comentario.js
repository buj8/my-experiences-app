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

    addComment() {
        if (localStorage.getItem("nCom") === null) {
            localStorage.setItem("nCom", "0");
        }
        else {
            var nusers = parseInt(localStorage.getItem("nCom"));
            nusers++;
            localStorage.setItem("nCom", nusers.toString());
        }
    }

    saveComment() {
        this.addComment();
        localStorage.setItem("C" + parseInt(localStorage.getItem("nCom")), JSON.stringify(this));
    }

}

export default Comentario