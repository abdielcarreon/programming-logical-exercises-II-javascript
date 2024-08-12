//Creating a function that calculate the square, rectangle or triangle area

function polygonArea(polygon) {
   
    let result

    if(polygon.type === "square" && polygon.side) {
        result = polygon.side * polygon.side;
    } 
    else if(polygon.type === "rectangle" && polygon.base && polygon.height) {
        result = polygon.base * polygon.height;
    } 
    else if(polygon.type === "triangle" && polygon.base && polygon.height) {
        result = (polygon.base * polygon.height) / 2;
    }

    console.log(polygon.type, ":", result);
    return result;
}

console.log(polygonArea( 
    {
        type: "triangle", 
        base: 6, 
        height: 9
    }
));
 
