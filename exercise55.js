//Creating a function that throw a result based over a war between two navies

const lightTribe = [
      { name: {value: 3, name: "Otamicaya"}, amout: 10 },
      { name: {value: 2, name: "Tawkami"}, amout: 5 },
      { name: {value: 3, name: "Kenunan"}, amout: 3 }
];

const darkTribe = [
    { name: {value: 2, name: "Rda"}, amout: 10 },
    { name: {value: 3, name: "Hometree"}, amout: 5 },
    { name: {value: 5, name: "Toruk Makto"}, amout: 1 }
]


function warResult(tribe1, tribe2) {
    let totalScoreTribe1 = 0;
    let totalScoreTribe2 = 0;
    for(const {name, amout} of tribe1) {
        totalScoreTribe1 += name.value * amout;
    }

    for(const {name, amout} of tribe2) {
        totalScoreTribe2 += name.value * amout;
    }
    console.log(totalScoreTribe1, totalScoreTribe2)
    return totalScoreTribe1 > totalScoreTribe2 ? 'Conquer Light Tribe' : 'Conquer Dark Tribe';
}

console.log(warResult(lightTribe, darkTribe));