function makeSandwich(items) {
    if (items.length === 0) {
        console.log("No item in your sandwich.");
    }
    else {
        console.log("Items in your Sandwich:");
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
        }
        ;
    }
    console.log("\n");
}
makeSandwich(["Cheese", "Tomato"]);
makeSandwich(["Tomato"]);
makeSandwich([]);
