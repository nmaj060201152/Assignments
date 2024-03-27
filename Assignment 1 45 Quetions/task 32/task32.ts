let array1 = ["apple", "banana", "orange", "banana", "apple"];
let array2 = ["banana", "orange", "apple"];

for (let i = 0; i < array2.length; i++) {
    let count = 0;
    for (let j = 0; j < array1.length; j++) {
        if (array1[j] === array2[i]) {
            count++;
        }
    }
    console.log(array2[i] + " occurs " + count + "times in array1.");
}
