function User(nickname, age, admin) {
    this.nickname = nickname;
    this.age = age;
    this.admin = admin;
    this.printUser = function() {
        console.log("Nickname : " + this.nickname);
        console.log("Age      : " + this.age);
        console.log("Admin    : " + this.isAdmin());
    }
    this.isAdmin = function() {
        return this.admin ? "Yes" : "No";
    }
};

let user01 = new User("Phoenix420", 24, false);
let user02 = new User("Ced_Lord", 11, true);
user01.printUser();
user02.printUser();