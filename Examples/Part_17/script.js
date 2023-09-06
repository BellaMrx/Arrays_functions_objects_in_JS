class User {
    constructor(nickname, age, admin) {
        this.nickname = nickname;
        this.age = age;
        this.admin = admin;
    }
    print() {
        console.log("Nickname : " + this.nickname);
        console.log("Age      : " + this.age);
        console.log("Admin    : " + this.isAdmin());
    }
    isAdmin() {
        return this.admin ? "Yes" : "No";
    }
};

let user01 = new User("Phoenix420", 24, false);
let user02 = new User("Ced_Lord", 11, true);
user01.print();
user02.print();