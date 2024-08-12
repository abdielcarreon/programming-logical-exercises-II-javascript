//Creating a function that seeks the superhero by their affiliation in the function's parameter

const charactersDC = {
    "Superman": {
        realName : "Clark Kent",
        affiliation : "Justice League",
        powers : ['fly', 'force', 'super speed', 'x-ray']
    },
    "Batman": {
        realName : "Bruce Wayne",
        affiliation : "Justice League",
        powers : ['intelligence', 'wealth', 'highlighted physical abilities']
    },
    "Wonder Woman": {
        realName : "Diana Prince",
        affiliation : "Justice League",
        powers : ['Super strenght', 'defty', 'Subjector tie']
    },
    "Flash": {
        realName : "Barry Allen",
        affiliation : "Justice League",
        powers : ['Super speed', 'Highlighted agility']
    },
    "Aquaman": {
        realName : "Arthur Curry",
        affiliation : "Justice League",
        powers : ['Communicate with animals sea', ' Underwater endurance', 'Super force']
    },
    "Joker": {
        realName : "Unknown",
        affiliation : "Racketeering",
        powers : ['Psychological manipulation', 'Intelligence']
    },
    "Harley Quinn": {
        realName : "Harley Quinzel",
        affiliation : "Racketeering",
        powers : ['Defty', 'Martial art expert']
    },
    "Penguin": {
        realName : "Oswald Chesterfield Cobblepot",
        affiliation : "Racketeering",
        powers : ['Highlighted intelligence', 'manipulation']
    },

}

function filterByAffiliation(superHeros, key) {
    let result = [];
    for(nickName in superHeros) {
        const everyHero = superHeros[nickName];
        const affiliation = everyHero.affiliation
        const realName = everyHero.realName
        const powers = everyHero.powers
        if(affiliation.toLowerCase() === key.toLowerCase()) {
            result.push({
                nickName: nickName ,
                realName: realName,
                powers: powers
            })
        }         
    }
    return result
}


console.log(filterByAffiliation(charactersDC, 'justice league'))