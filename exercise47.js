//Creating a function which we pass through as parameter one grade and return us a note

/* function calificating(calification) {
    let result = '';
    if(calification >= 0 && calification < 4) {
        result = 'Deficient';
    } else if(calification > 2 && calification < 6) {
        result = 'Insufficient';
    } else if(calification > 4 && calification < 7) {
        result = 'Scarcely';
    } else if(calification > 5 && calification < 8) {
        result = 'You can get better yet';
    } else if(calification > 6 && calification < 10) {
        result = 'You goes by good way, go ahead right';
    } else if(calification > 8) {
        result = 'You are very highlight!';
    }
    return result;
}

console.log(calificating(7)) */

function calificating(calification) {
    let result = '';
    calification = Math.ceil(calification);
    switch (true) {
        case (calification >= 0 && calification < 4):
            result =  'Deficient';
            break;
        case (calification > 2 && calification < 6):
            result =  'Insufficient';
            break;
        case (calification > 4 && calification < 7):
            result =  'Scarcely';
            break;
        case (calification > 5 && calification < 8):
            result = 'You can get better yet';
            break;
        case (calification > 6 && calification < 9):
            result = 'You goes by good way, go ahead right';
            break;
        case (calification === 9):
            result = 'Wow good job!';
            break;
        case (calification > 9):
            result = 'You are very highlight!';
            break;
    }

    return result;
}

console.log(calificating(3.4))