var magician = ["amir", "ali", "aslam"];
var magician_copy = magician.slice();
function make_great() {
    for (var i = 0; i <= magician_copy.length - 1; i++) {
        magician_copy[i] = "great " + magician_copy[i];
    }
}
function show_magicians() {
    for (var i = 0; i <= magician.length - 1; i++) {
        console.log(magician[i] + "\n");
    }
}
function show_magiciansCopy() {
    for (var i = 0; i <= magician_copy.length - 1; i++) {
        console.log(magician_copy[i] + "\n");
    }
}
make_great();
console.log("Orignal Array");
show_magicians();
console.log("Modified Array");
show_magiciansCopy();
