// Given two dates. Creating a function that get me back the difference of days between them 

function daysOfDifference(date1, date2) {

    //Setting up the dates correct format
    date1 = date1 instanceof Date ? date1 : new Date(date1)
    date2 = date2 instanceof Date ? date2 : new Date(date2)


    //Get the difference between miliseconds of both dates  
    const miliSecondsDifference = Math.abs(date1.getTime() - date2.getTime());
    
    
    //Didvide the milliseconds difference between the milliseconds number that has one day and round so get out the days
    const days = Math.floor(miliSecondsDifference / (1000 * 60 * 60 * 24))
    console.log(days)
    
    if(isNaN(days)) {
        return "Incorrect date format, use the american format";
    }

    return "The difference are " + days + " days";
}

console.log(daysOfDifference('2023/12/1', '2023/12/5'));