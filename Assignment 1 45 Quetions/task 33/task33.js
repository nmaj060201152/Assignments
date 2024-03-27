var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        arr2[i] = 'first';
    }
    else if (arr[i] == 2) {
        arr2[i] = 'second';
    }
    else if (arr[i] == 3) {
        arr2[i] = 'third';
    }
    else if (arr[i] == 4) {
        arr2[i] = 'forth';
    }
    else if (arr[i] == 5) {
        arr2[i] = 'fifth';
    }
    else if (arr[i] == 6) {
        arr2[i] = 'six';
    }
    else if (arr[i] == 7) {
        arr2[i] = 'seventh';
    }
    else if (arr[i] == 8) {
        arr2[i] = 'eighth';
    }
    else if (arr[i] == 9) {
        arr2[i] = 'ninth';
    }
    else {
    }
}
for (var j = 0; j < arr2.length; j++) {
    console.log(arr2[j] + "\n");
}
