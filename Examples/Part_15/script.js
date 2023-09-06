let user = {
    nickname: "Phoenix420",         // nickname
    alter: 24,                      // age
    admin: false,                   // admin privileges
    print: function() {
        console.log("Nickname : " + this.nickname);
        console.log("Alter    : " + this.alter);
        console.log("Admin    : " + this.isAdmin());
    },
    isAdmin: function() {
        return this.admin ? "Yes" : "No";
    }
};
user.print();