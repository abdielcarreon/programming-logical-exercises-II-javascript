//Creating a function return the files repeticion numbers searched 


/* function renameFiles(files) {
    let counter = 1
    let result = [];
    let copies = [];
    for(element of files) {
        
        if(result.includes(element)) {
            copies.push(` ${element}(${counter++})`);
            console.log(copies);
        } else {
            result.push(`${element}`);
            console.log(result);
        }

    }
    return [ `${result},${copies}` ];

}

console.log(renameFiles(["name", "name", "last name", "name", "name"])); */

function renameFiles(files) {
    return files.map((file, index) => {

        let filtered = files.slice(0, index).filter(filesFiltered => file === filesFiltered)

        return filtered.length === 0 ? file : `${file}(${filtered.length})`;
    })

    
}

console.log(renameFiles(["name", "name", "last name", "name", "name"]));