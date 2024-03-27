var users = ["Admin", "abc", "def", "ghi", "jkl"];
var loginName = "Admin";
for (var i = 0; i < 5; i++) {
    if (loginName == users[i]) {
        console.log("Hello admin, would you like to see a status report");
        break;
    }
}
var loginName = "abc";
for (var i = 0; i < 5; i++) {
    if (loginName == users[i]) {
        console.log("\n\nHello " + loginName + ", thank you for logging in again.");
        break;
    }
}
var loginName = "def";
for (var i = 0; i < 5; i++) {
    if (loginName == users[i]) {
        console.log("\n\nHello " + loginName + ", thank you for logging in again.");
        break;
    }
}
var loginName = "ghi";
for (var i = 0; i < 5; i++) {
    if (loginName == users[i]) {
        console.log("\n\nHello " + loginName + ", thank you for logging in again.");
        break;
    }
}
var loginName = "jkl";
for (var i = 0; i < 5; i++) {
    if (loginName == users[i]) {
        console.log("\n\nHello " + loginName + ", thank you for logging in again.");
        break;
    }
}
