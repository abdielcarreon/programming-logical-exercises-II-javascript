//Creating a function that catch as parameter one file names array and return another one but
//If there's a duplicated file in it then numerate according repetitions number, 
//now taking count the extension

function renameFiles(files) {
    return files.map((file, index) => {

        let filtered = files.slice(0, index).filter(filesFiltered => file === filesFiltered)

        let result =  file;

        if(filtered.length !== 0) {
             let fileDivided = file.split('.')
             result = `${fileDivided[0]}(${filtered.length}).${fileDivided[1]}`
        }
          
        return result;
    })

    
}

console.log(renameFiles(["name.jpg", "name.doc", "last name.png", "name.png", "name.jpg", "name.jpg"]));
 