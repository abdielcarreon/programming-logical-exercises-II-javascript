// Given one actual year, building a program that show up the leap-years of the following 30 years

/* function leapYear(year) {
    let leapYearsArray = [];
    for(i = year; i <= year + 30; i++) {
        if(i % 4 === 0) {
            leapYearsArray.push(i);
        }
    }
    return leapYearsArray
}

console.log(leapYear(2023)); */

function leapYear(year) {
    let limit = 30;

  for (let i = 0; i < limit; i++) {
    let date = new Date(year, 1, 29).getMonth();

    if (date === 1) {
        console.log(year)
    }
    year++;
  }
}

leapYear(2024);
