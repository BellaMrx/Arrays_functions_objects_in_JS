let user = {
    nickname: "Phoenix420",         // nickname
    age: 24,                      // age
    admin: false,                   // admin privileges
    print: function() {
        console.log("Nickname : " + this.nickname);
        console.log("Age    : " + this.age);
        console.log("Admin    : " + this.isAdmin());
    },
    isAdmin: function() {
        return this.admin ? "Yes" : "No";
    }
};
user.print();