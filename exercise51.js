//Function it's converted a temperature from Celsius degree to Fahrenheit degree but the other way around

function converter(degrees) {
    degrees = degrees.split('');
    let becomingtoFahrenheit;
    let becomingtoCelsius;
    
    if(degrees.includes('C')) {
        degrees = parseFloat(degrees.join(''));
        becomingtoFahrenheit = (degrees * 1.8) + 32;
        return becomingtoFahrenheit = becomingtoFahrenheit.toFixed(2) + "°F";
    } else if(degrees.includes('F')) {
        degrees = parseFloat(degrees.join(''));
        becomingtoCelsius = (degrees - 32) * 0.5556;
        return becomingtoCelsius = becomingtoCelsius.toFixed(2) + '°C';
    }
    return 'Inappropriate Format, please specific °C or °F';

}   
console.log(converter('77°F'));

