var users = ["Admin", "Ahmed", "Ali", "Majeed", "Sameer"];
function isEmpty(arr) {
    return arr.length === 0;
}
console.log("Users in the list are..");
for (var i = 0; i <= users.length - 1; i++) {
    console.log(users[i] + "\n");
}
if (isEmpty(users)) {
    console.log("List is empty");
}
else {
    console.log("List is not empty");
}
console.log("Deleting users list");
users.splice(0, users.length);
console.log("After deleting list elements Users in the list are..\n\n..................");
for (var i = 0; i <= users.length - 1; i++) {
    console.log(users[i] + "\n");
}
if (isEmpty(users)) {
    console.log("List is empty now");
}
else {
    console.log("List is not empty");
}
