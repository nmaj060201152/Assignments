var magician = ["amir", "ali", "aslam"];
function make_great() {
    for (var i = 0; i <= magician.length - 1; i++) {
        magician[i] = "great " + magician[i];
    }
}
make_great();
function show_magicians() {
    for (var i = 0; i <= magician.length - 1; i++) {
        console.log(magician[i] + "\n");
    }
}
show_magicians();
