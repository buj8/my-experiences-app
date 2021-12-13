class Comentario {
    constructor(comId, u, exp, txt) {
        this.comId = comId;
        this.u = u;
        this.exp = exp;
        this.txt = txt;
        this.likes = [];
    }
    like() {
        console.log("hey")
        if (!this.likes.includes(localStorage.getItem("currentUser"))) {
            this.likes.push((localStorage.getItem("currentUser")));
        }
        localStorage.setItem(this.comId, JSON.stringify(this));
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