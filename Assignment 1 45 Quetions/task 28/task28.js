var age = 4;
if (age == null) {
    console.log("You entered nothing..., plz enter valid age\n Try again");
}
else if (age <= 0) {
    console.log("this is not a valid age, plz enter valid value\n try again");
}
else if (age < 2) {
    console.log("That person is a baby");
}
else if (function (age) { return 2 && age < 4; }) {
    console.log("person is toddler");
}
else if (function (age) { return 4 && age < 13; }) {
    console.log("person is a kid");
}
else if (function (age) { return 13 && age < 20; }) {
    console.log("person is teenager");
}
else if (function (age) { return 20 && age < 65; }) {
    console.log("person is adult");
}
else if (function (age) { return 65; }) {
    console.log("person is elder");
}
