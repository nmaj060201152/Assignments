var array1 = ["apple", "banana", "orange", "banana", "apple"];
var array2 = ["banana", "orange", "apple"];
for (var i = 0; i < array2.length; i++) {
    var count = 0;
    for (var j = 0; j < array1.length; j++) {
        if (array1[j] === array2[i]) {
            count++;
        }
    }
    console.log(array2[i] + " occurs " + count + "times in array1.");
}
