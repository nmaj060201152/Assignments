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
console.log(carAachi("Honda", "2024"));
console.log(carAachi("Toyota", "2022", "Black"));
console.log(carAachi("KIA", "2023", "White", "Music System"));
