class Coleccion {
    constructor(user, title) {
        this.user = user;
        this.title = title;
        this.exps = [];
        this.colId = "";
    }

    store() {
        this.colId = parseInt(localStorage.getItem("nCol")) + 1;
        localStorage.setItem("COL" + this.colId, JSON.stringify(this))
        localStorage.setItem("nCol", (parseInt(localStorage.getItem("nCol")) + 1));
    }

    update() {
        localStorage.setItem("COL" + this.colId, JSON.stringify(this));
    }

    addExp(exp) {
        if (!this.exps.includes(exp)) {
            this.exps.push(exp);
            this.update();
        }
    }

    removeExps(exp) {
        this.exps.splice(this.exps.indexOf(exp));
    }

    addExps(arr) {
        this.exps = this.exps.concat(arr);
    }
}

export default Coleccion