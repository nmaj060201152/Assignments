function carAachi(manufacturer: string, modelNo: string, color?: string, extraFeature?: string): { manufacturer: string, modelNo: string, color?: string, extraFeature?: string} {
    if(color && extraFeature)
    {
        return { manufacturer, modelNo, color, extraFeature }
    }
    else if(color)
    {
        return { manufacturer, modelNo, color };
    }
    else
    {
        return { manufacturer, modelNo };
    }
}
console.log(carAachi("Honda", "2024"));
console.log(carAachi("Toyota", "2022", "Black"));
console.log(carAachi("KIA", "2023", "White", "Music System"));