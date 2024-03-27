function Q1() {

}

function Q2() {
    var a = "navaid";
    alert("Hello " + a + ", would you like to learn some Python today?");


}

function Q3() {
    var a = "navaid";
    alert("UpperCase Name is " + a.toUpperCase());
    alert("lowercase Name is " + a.toLowerCase());
    // alert("titlecase Name is ",a.toTitleCase()) 


}

function Q4() {
    alert("Navaid Sumalani once said, Shadi na karna yaro, Pachtao gay sari life");

}

function Q5() {
    var a = "Navaid Sumalani";
    alert(a + " once said, Shadi na karna yaro, Pachtao gay sari life");

}



function Q6() {
    var a = "Navaid Sumalani";
    alert("Name with white spaces included is\t" + a + "\n");
    alert("Name without white spaces is " + a);

}

function Q7() {
    var a = 2;
    var b = 6;
    var c = 10;
    var d = 4;
    var e = 16;
    alert(a + " + " + b + " = " + (a + b) + "\n");
    alert(c + " - " + a + " = " + (c - a) + "\n");
    alert(d + " x " + a + " = " + (d * a) + "\n");
    alert(e + " / " + a + " = " + e / a);

}

function Q8() {
    var a = 2;
    var b = 6;
    var c = 10;
    var d = 4;
    var e = 16;
    alert(a + " + " + b + " = " + (a + b) + "\n");
    alert(c + " - " + a + " = " + (c - a) + "\n");
    alert(d + " x " + a + " = " + (d * a) + "\n");
    alert(e + " / " + a + " = " + e / a);


}

function Q9() {
    var a = 6;
    alert("My fav number is " + a + "\n");
    alert("Hum 2, Hamarey " + (a - 2));



}

function Q10() {
    var a = 5;
    var b = 9;
    alert("task " + a + " is truth\n");
    alert("task " + b + " is tamanna");



}


function Q11() {
    var a = ["Junaid", "Obaid", "Zeeshan"];
    alert("One of my best friend's name is " + a[0] + "\n");
    alert("second of my best friend's name is " + a[1] + "\n");
    alert("Third of my best friend's name is " + a[2]);



}


function Q12() {
    var a = (["Junaid", "Obaid", "Zeeshan"]);
    alert("Mr." + a[0] + " please come to my home.\n");
    alert("Mr." + a[1] + " please come to my home.\n");
    alert("Mr." + a[2] + " please come to my home.\n");


}

function Q13() {
    var a = ["sports car", "ship", "helicoptor"];
    alert("\nSameer would like to own a " + a[1] + "\n");
    alert("\nAyan would like to own a " + a[2] + "\n");
    alert("\nRohan would like to own a " + a[0] + "\n");




}

function Q14() {
    var a = ["Papa", "Amitabh", "Sir Zia"];
    alert(a[0] + ", you are invited for a dinner tonight");
    alert("Mr." + a[1] + ", you are invited for a dinner tonight");
    alert(a[2] + ", you are invited for a dinner tonight");



}



function Q15() {
    var a = ["Papa", "Amitabh", "Sir Zia", "Arshad", "Imran Khan"];
    alert(a[0] + ", you are invited for a dinner tonight");
    alert("Mr." + a[1] + ", you are invited for a dinner tonight");
    alert(a[2] + ", you are invited for a dinner tonight");
    alert("\n" + a[0] + ", can't come he is no more...\nnow Mr." + a[3] + " you are invited for the same...\n ");
    alert("Mr." + a[1] + ", can't come, Visa Problem...\nnow Mr." + a[4] + " you are invited for the same...\n ");
    alert("Fresh List\n");
    alert("Mr." + a[2] + ", you are invited for a dinner tonight");
    alert("Mr." + a[3] + ", you are invited for a dinner tonight");
    alert("Mr." + a[4] + ", you are invited for a dinner tonight");



}

function Q16() {
    var a = ["Aamir Khan", "Shazia Baji", "Danish"];
    alert("Big Party is fixed\n");
    alert("Mr." + a[0] + ", you are invited for a dinner tonight\n");
    alert("Lovely " + a[1] + ", you are invited for a dinner tonight\n");
    alert("Mr." + a[2] + ", you are invited for a dinner tonight");



}

function Q17() {
    var a = ["Danish", "Sir Zia", "Imran Khan"];
    alert("Salam, Mr." + a[0] + " Sorry to inform you that due to some reason we cant invite you for dinner, program for you is postponded, next time INSHALLAH, Biryani for u...");
    alert("\nSalam, " + a[1] + " You are still invited...");
    alert("\nSalam, Mr." + a[2] + " You are still invited...");
    alert("Now deleting list");
    delete a[0];
    delete a[1];
    delete a[2];
    alert("Printing Guests list");
    alert(a[0]);
    alert(a[0]);
    alert(a[0]);
    alert("\nSorry list is empty....");



}

function Q18() {
    var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    var a = ["Makkah", "Madina", "London", "Mumbai", "Goa"];
    alert("\n\nMy Favourite Places are\n. " + a[0] + "\n. " + a[1] + "\n. " + a[2] + "\n. " + a[3] + "\n. " + a[4]);
    var b = __spreadArray([], a, true).sort();
    // var b=a.sort().....in this case a[] will also be sorted
    alert("\n\nMy Favourite Places in Alphabatical Order are\n. " + b[0] + "\n. " + b[1] + "\n. " + b[2] + "\n. " + b[3] + "\n. " + b[4]);
    alert("\n\nStill I have list of my favourite places in orignal order\n. ");
    alert("\n\nMy Favourite Places unordered list is as follows\n. " + a[0] + "\n. " + a[1] + "\n. " + a[2] + "\n. " + a[3] + "\n. " + a[4]);
    var c = __spreadArray([], a, true).reverse();
    alert("\n\nMy Favourite Places reverse ordered list is as follows, without changing the order of the orignal list\n. " + c[0] + "\n. " + c[1] + "\n. " + c[2] + "\n. " + c[3] + "\n. " + c[4]);
    var d = __spreadArray([], c, true).reverse();
    alert("\n\nby reversing again i got the unordered list again as follows, without changing the order of the orignal list\n. " + d[0] + "\n. " + d[1] + "\n. " + d[2] + "\n. " + d[3] + "\n. " + d[4]);
    a.sort();
    alert("\n\nMy list is sorted now in alphabatical order\n. " + a[0] + "\n. " + a[1] + "\n. " + a[2] + "\n. " + a[3] + "\n. " + a[4]);
    a.reverse();
    alert("\n\nby reversing alphabatically ordered list i got reverse alphabatically ordered list\n. " + a[0] + "\n. " + a[1] + "\n. " + a[2] + "\n. " + a[3] + "\n. " + a[4]);



}

function Q19() {
    alert("task 14 again, now to count length of array\n\n");
    var a = ["Papa", "Amitabh", "Sir Zia"];
    alert(a[0] + ", you are invited for a dinner tonight");
    alert("Mr." + a[1] + ", you are invited for a dinner tonight");
    alert(a[2] + ", you are invited for a dinner tonight");
    var b = a.length;
    alert("Total " + b + " guests are invited...");



}

function Q20() {
    var a = ["Pakistan", "Afghanistan", "China", "Iran", "India"];
    alert("Naighbouring countries of " + a[0] + " are " + a[1] + " , " + a[2] + " , " + a[3] + " and " + a[4]);



}

function Q21() {
    var a = ["Pakistan", "Afghanistan", "China", "Iran", "India", "Russia"];
    alert("Naighbouring countries of " + a[0] + " are " + a[1] + " , " + a[2] + " , " + a[3] + " , " + a[4] + " and " + a[5]);
    var b = ["Asia", "Africa", "Europe"];
    alert("All of neighbouring countries are contained in continents " + b[0] + " and " + b[2]);
    alert("Continent is a good example of object in OOP, it is a generic name, can be used to define an object");



}

function Q22() {

    var a = ["Pakistan", "Afghanistan", "China", "Iran", "India", "Russia"];
    alert("Naighbouring countries of " + a[1] + " are " + a[2] + " , " + a[3] + " , " + a[4] + " , " + a[5] + " and " + a[6]);
    alert("\n\nOOPs array index starts from 0. OKAY lets correct it....");
    alert("\n\nNaighbouring countries of " + a[0] + " are " + a[1] + " , " + a[2] + " , " + a[3] + " , " + a[4] + " and " + a[5]);
    alert("Its Good Now...");


}

function Q23() {
    var houseNo = '192', street = '5', area = 'clifton', city = 'karachi', province = 'sindh', country = 'Pakistan';
    alert("Is houseNo == '192'? I predict True.");
    alert(houseNo == '192');
    alert("\n\nIs street == '5'? I predict True.");
    alert(street == '5');
    alert("\n\nIs area == 'clifton'? I predict True.");
    alert(area == 'clifton');
    alert("\n\nIs city == 'karachi'? I predict True.");
    alert(city == 'karachi');
    alert("\n\nIs province == 'sindh'? I predict True.");
    alert(province == 'sindh');
    alert("\n\nIs country == 'Pakistan'? I predict True.");
    alert(country == 'Pakistan');
    alert("\n\nthis was my address, where do shiekh Hasina Wajid live");
    alert("\n\nIs houseNo == '122'? I predict True.");
    alert(houseNo == '122');
    alert("\n\nIs street == '4'? I predict True.");
    alert(street == '4');
    alert("\n\nIs area == 'Defence'? I predict True.");
    alert(area == 'Defence');
    alert("\n\nIs city == 'Quetta'? I predict True.");
    alert(city == 'Quetta');
    alert("\n\nIs province == 'Punjab'? I predict True.");
    alert(province == 'Punjab');
    alert("\n\nIs country == 'India'? I predict True.");
    alert(country == 'India');



}

function Q24() {

    var smartness = "i am smart", intelligence = "i am intellegent", myName = "NAVAID", num1 = 55, num2 = [2, 4, 6];
    alert("Am I smart? I predict True.");
    alert(smartness == "i am smart");
    alert("\n\nI am not intellegent? I predict True.");
    alert(intelligence == "i am not intellegent");
    alert("\n\nmy name in lowercase is navaid");
    alert(myName.toLowerCase() == 'navaid');
    alert("\n\nmy name in lowercase is Navaid");
    alert(myName.toLowerCase() == 'Navaid');
    alert("\n\n55 is equal to 55");
    alert(num1 == 55);
    alert("\n\n55 is equal to 55");
    alert(num1 !== 55);
    alert("\n\n55 is greater than 50");
    alert(num1 > 50);
    alert("\n\n55 is greater than or equal to 56");
    alert(num1 >= 56);
    alert("\n\n55 is less than 56");
    alert(num1 < 50);
    alert("\n\n55 is less than or equal to 56");
    alert(num1 <= 56);
    alert("\n\n55 is less than or equal to 50");
    alert(num1 >= 50);
    alert("\n\n55 is less than to 56 and greater than 50");
    alert(num1 < 56 && num1 > 50);
    alert("\n\n55 is less than 56 or equal to 55");
    alert(num1 < 56 || num1 == 55);
    alert("\n\n5 is in num2");
    alert(num2.indexOf(5) == -1);
    alert("\n\n6 is in num2");
    alert(num2.indexOf(6) == -1);


}

function Q25() {
    var alien_color = prompt("Enter color green, red or yellow please");
    if (alien_color == "green" || alien_color == "GREEN" || alien_color == "Green") {
        alert("\n\nCongratulation; You! hv earned 5 points..\n");
    }

}

function Q26() {
    var alien_color = prompt("Enter color green, red or yellow please");
    if (alien_color == "green" || alien_color == "GREEN" || alien_color == "Green") {
        alert("\n\nCongratulation; You! hv earned 5 points for shooting the alien..\n");
    }
    else if (alien_color == "red" || alien_color == "RED" || alien_color == "Red" || alien_color == "yellow" || alien_color == "YELLOW" || alien_color == "Yellow") {
        alert("\n\nCongratulation; You! hv earned 10 points..\n");
    }

    else {

    }



}

function Q27() {
    var alien_color = prompt("Enter color green, red or yellow please");
    if (alien_color == "green" || alien_color == "GREEN" || alien_color == "Green") {
        alert("\n\nCongratulation; You! hv earned 5 points for shooting the alien..\n");
    }
    else if (alien_color == "red" || alien_color == "RED" || alien_color == "Red") {
        alert("\n\nCongratulation; You! hv earned 15 points..\n");
    }

    else if (alien_color == "yellow" || alien_color == "YELLOW" || alien_color == "Yellow") {
        alert("\n\nCongratulation; You! hv earned 10 points..\n");
    }

    else {

    }



}

function Q28() {
    var age = prompt("Please enter age of person:");

    if (age == null) {
        alert("You entered nothing..., please enter a valid age. Try again.");
    } else if (age <= 0) {
        alert("This is not a valid age. Please enter a valid value. Try again.");
    } else if (age < 2) {
        alert("That person is a baby.");
    } else if (age < 4) {
        alert("Person is a toddler.");
    } else if (age < 13) {
        alert("Person is a kid.");
    } else if (age < 20) {
        alert("Person is a teenager.");
    } else if (age < 65) {
        alert("Person is an adult.");
    } else {
        alert("Person is an elder.");
    }
}

function Q29() {
    var favFruits = ["Mango", "Orange", "Apple"];
    var fruits20 = ["Apple", "Banana", "Orange", "Mango", "Grape"]
    for (i = 0; i <= favFruits.length - 1; i++) {
        if (fruits20[Math.floor(Math.random() * fruits20.length)] == favFruits[i]) {
            alert("you really like " + favFruits[i])
        }
        else {
            alert("We randomly selected a fruit which is not in your favourite list")
        }
    }
}

function Q30() {
    var users = ["Admin", "Ahmed", "Ali", "Majeed", "Sameer"];

    for (var i = 0; i < users.length; i++) {
        if (users[i] === "Admin") {
            alert("Hello admin, would you like to see a status report?");
        } else {
            alert("Hello " + users[i] + ", thank you for logging in again.");
        }
    }
}

function Q31() {
    var users = ["Admin", "Ahmed", "Ali", "Majeed", "Sameer"];
    function isEmpty(arr) {
        return arr.length === 0;
    }
    alert("Users in the list are..");
    for (var i = 0; i <= users.length - 1; i++) {
        alert(users[i] + "\n");
    }
    if (isEmpty(users)) {
        alert("List is empty");
    }
    else {
        alert("List is not empty");
    }
    alert("Deleting users list");
    users.splice(0, users.length);
    alert("After deleting list elements Users in the list are..\n");
    for (var i = 0; i <= users.length - 1; i++) {
        alert(users[i] + "\n");
    }
    if (isEmpty(users)) {
        alert("List is empty now");
    }
    else {
        alert("List is not empty");
    }




}

function Q32() {

    let array1 = ["apple", "banana", "orange", "banana", "apple"];
    let array2 = ["banana", "orange", "apple"];

    for (let i = 0; i < array2.length; i++) {
        let count = 0;
        for (let j = 0; j < array1.length; j++) {
            if (array1[j] === array2[i]) {
                count++;
            }
        }
        alert(array2[i] + " occurs " + count + "times in array1.");
    }
}


function Q33() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
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
    alert(arr2[0] + "\n" + arr2[1] + "\n" + arr2[2] + "\n" + arr2[3] + "\n" + arr2[4] + "\n" + arr2[5] + "\n" + arr2[6] + "\n" + arr2[7] + "\n" + arr2[8] + "\n");
}

function Q34() {
    var pizza = ['NewYork_Style Pizza', 'Greek Pizza', 'Deep_Dish Pizza'];
    alert("\nMy fav Pizza are......");
    for (var i = 0; i < pizza.length; i++) {
        alert(i + 1 + ". " + pizza[i]);
    }
    alert("\n\nMy fav pizza in a sentence.....");
    for (var i = 0; i < pizza.length; i++) {
        alert(i + 1 + ". I like " + pizza[i] + " Pizza");
    }
    alert("\n\nNew York-style pizza is characterized by its thin crust.\nThat is crispy on the outside and chewy on the inside.\nIt typically features a generous layer of tomato sauce and mozzarella cheese\nI really love pizza.");
}

function Q35() {
    var animals = ['cat', 'dog', 'goat'];
    alert("\n3 pet animals......");
    for (var i = 0; i < animals.length; i++) {
        alert(i + 1 + ". " + animals[i]);
    }
    alert("\n\nPet animals in a sentence.....");
    for (var i = 0; i < animals.length; i++) {
        alert(i + 1 + ". A " + animals[i] + " would make a great pet");
    }
    alert("\n\nAll these animals are common pet animals\nAny of these animals would make a great pet!.");
}

function Q36() {
    var size = prompt("Enter Size of shirt S/M/L/XL");
    var message = prompt("Enter a message like\nYou ordered shirt of size");
    function shirtSize(size, message) {
        alert(message + " " + size);
    }
    shirtSize(size, message);
}

function Q37() {
    var size = "";
var message = "";
function shirtSize(size) {
    
    if (size == "l" || size == "L") {
        message = "I love typescript.";
    }
    else if (size == "any" || size == "ANY" || size == "Any") {
        message = "this is a shirt of size";
    }
    else {
        message = "Size of your shirt is ";
    }
    alert(message + " " + size);
}
size = prompt("Enter Size of shirt S/M/L/XL/any");
shirtSize(size);
size = prompt("Enter Size of shirt S/M/L/XL/any");
shirtSize(size);
size = prompt("Enter Size of shirt S/M/L/XL/any");
shirtSize(size);

}

function Q38() {
    function describe_city(city, country) {
        if (country === void 0) { country = "Pakistan"; }
        alert(city + " is in " + country);
    }
    describe_city("Karachi");
    describe_city("Lahore");
    describe_city("New York", "USA");
    


}

function Q39() {
    function city_country(city, country) {
        return city + ", " + country;
    }
    alert(city_country('Karachi', 'Pakistan'));
    alert(city_country('Dehli', 'India'));
    alert(city_country('New_York', 'USA'));
}

function Q40() {
    function make_album(artist_name, album_title, no_of_tracks) {
        if (no_of_tracks) {
            return { artist_name: artist_name, album_title: album_title, no_of_tracks: no_of_tracks };
        }
        else {
            return { artist_name: artist_name, album_title: album_title };
        }
    }

    var album1 = make_album("Atif Aslam", "AI");
    alert(album1.artist_name+" ,"+album1.album_title)

    var album2 = make_album("Sajjad Ali", "Governer House");
    alert(album2.artist_name+" ,"+album2.album_title)

    var album3 = make_album("Nasoobo Lal", "Aalu Pyaz ki sabzi");
    alert(album3.artist_name+" ,"+album3.album_title)

    
    // alert(jason.stringify(make_album("Atif Aslam", "AI")));
    // alert(jason.stringify(make_album("Sajjad Ali", "Governer House")));
    // alert(jason.stringify(make_album("Nasoobo Lal", "Aalu Pyaz ki sabzi")));
    alert("\nAlbums with no of tracks....");
    var album4 = make_album("Atif Aslam", "AI", "4");
    alert(album4.artist_name+" ,"+album4.album_title)

    var album5 = make_album("Sajjad Ali", "Governer House", "5");
    alert(album5.artist_name+" ,"+album5.album_title)

    var album6 = make_album("Nasoobo Lal", "Aalu Pyaz ki sabzi", "8");
    alert(album6.artist_name+" ,"+album6.album_title)

    
    // alert(jason.stringify(make_album("Atif Aslam", "AI", 3)));
    // alert(jason.stringify(make_album("Sajjad Ali", "Governer House", 4)));
    // alert(jason.stringify(make_album("Nasoobo Lal", "Aalu Pyaz ki sabzi", 5)));
    
}

function Q41() {
    var magician = ["amir", "ali", "aslam"];
// alert(magician[0]+"\n");
function show_magicians() {
    for (var i = 0; i <= magician.length - 1; i++) {
        alert(i+1+". Magician "+magician[i] + "\n");
    }
}
show_magicians();
}

function Q42() {
    var magician = ["amir", "ali", "aslam"];
    function make_great() {
        for (var i = 0; i <= magician.length - 1; i++) {
            magician[i] = "great " + magician[i];
        }
    }
    make_great();
    function show_magicians() {
        for (var i = 0; i <= magician.length - 1; i++) {
            alert(magician[i] + "\n");
        }
    }
    alert("List of great magicians....");

    show_magicians();
    


}

function Q43() {
    var magician = ["amir", "ali", "aslam"];
    var magician_copy = magician.slice();
    function make_great() {
        for (var i = 0; i <= magician_copy.length - 1; i++) {
            magician_copy[i] = "great " + magician_copy[i];
        }
    }
    function show_magicians() {
        for (var i = 0; i <= magician.length - 1; i++) {
            alert(magician[i] + "\n");
        }
    }
    function show_magiciansCopy() {
        for (var i = 0; i <= magician_copy.length - 1; i++) {
            alert(magician_copy[i] + "\n");
        }
    }
    make_great();
    alert("Orignal Array");
    show_magicians();
    alert("Modified Array");
    show_magiciansCopy();
    


}

function Q44() {
    function makeSandwich(items) {
        if (items.length === 0) {
            alert("No item in your sandwich.");
        }
        else {
            alert("Items in your Sandwich:");
            for (var i = 0; i < items.length; i++) {
                alert(items[i]);
            }
            ;
        }
        alert("\n");
    }
    makeSandwich(["Cheese", "Tomato"]);
    makeSandwich(["Tomato"]);
    makeSandwich([]);
    }

function Q45() {
    function carAachi(manufacturer, modelNo, color, extraFeature) {
        if (color && extraFeature) {
            return { manufacturer: manufacturer, modelNo: modelNo, color: color, extraFeature: extraFeature };
        }
        else if (color) {
            return { manufacturer: manufacturer, modelNo: modelNo, color: color };
        }
        else {
            return { manufacturer: manufacturer, modelNo: modelNo };
        }
    }
    var car1 = carAachi("Honda", "2024");
    alert(car1.manufacturer+" ,"+car1.modelNo)

    var car1 = carAachi("Toyota", "2022", "Black");
    alert(car1.manufacturer+" ,"+car1.modelNo+" ,"+car1.color)

    var car1 = carAachi("KIA", "2023", "White", "Music System");
    alert(car1.manufacturer+" ,"+car1.modelNo+" ,"+car1.color+" ,"+car1.extraFeature)
}