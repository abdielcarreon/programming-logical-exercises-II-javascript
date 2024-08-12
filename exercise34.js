//Creating a function such catch an array as parameter and return one object with the agruped elements inside it

function agrupe(data, groupingKey) {
    let result = { };

    data.forEach(element => {
        let property = typeof groupingKey === "function" ? groupingKey(element) : element[groupingKey];
        console.log(property);
    
        if(!result[property]) result[property] = [];

        result[property].push(element)
    });

    return result;
}

console.log(agrupe([7.2, 5.3, 7.4], Math.floor));
console.log(agrupe(['one', 'two', 'one', 'tree', 'four', 'one-hundred-one', '0', '2'], 'length'));

console.log(agrupe([{name: 'Noe', age: 78}, {name: 'David', age: 19}, 
    {name: 'Daniel', age: 22}, {name: 'Josué', age: 22}], 'age'));

