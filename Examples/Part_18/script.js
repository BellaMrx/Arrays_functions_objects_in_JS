class User {
    constructor(nickname, age, admin) {
        this._nickname = nickname;
        this._age = age;
        this._admin = admin;
    }
    isAdmin() {
        return this._admin ? "Yes" : "No";
    }
    set nickname(name) {
        if (typeof name === "string") {
            this._nickname = name;
        } else {
            console.log("Error: No string!")
        }
    }
    get nickname() {
        return this._nickname;
    }
    set age(old) {
        if (typeof old === "number") {
            this.age = old;
        } else {
            console.log("Error: No integer!")
        }
    }
    get age() {
        return this._age;
    }
    set admin(adm) {
        if (typeof adm === "boolean") {
            this._admin = adm;
        } else {
            console.log("Error: true or false!")
        }
    }
    get admin() {
        return this._admin;
    }
};

let user01 = new User("Phoenix420", 24, false);
// Setter methods in use
user01.nickname = "Granny";     // set nickname("Granny")
user01.alter = 67;              // set age(67)
user01.admin = true;            // set admin(true)
// Getter methods in use
console.log(user01.nickname);   // get nickname()
console.log(user01.alter);      // get age()
console.log(user01.admin);      // get admin();