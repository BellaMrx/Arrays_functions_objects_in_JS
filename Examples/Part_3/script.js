function userTemplate(fname = "Joe", lname = "Public") {
    let user = {
        userfname: fname,
        userlname: lname
    }
    return user;
}

let user1 = userTemplate();
console.log(user1.userfname);       // Output: Joe
console.log(user1.userlname);       // Output: Public
let user2 = userTemplate("Jane");
console.log(user2.userfname);       // Output: Jane
console.log(user2.userlname);       // Output: Public
let user3 = userTemplate("Pepito", "Perez");
console.log(user3.userfname);       // Output: Pepito 
console.log(user3.userlname);       // Output: Perez