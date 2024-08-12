//Given an array. Creating a function capable to order elements by real or nick name

const superHeros = {
    "Superman": {
        realName : "Clark Kent",
        cede : "DC Comics",
        powers : ['fly', 'force', 'super speed', 'x-ray']
    },
    "Spider-Man": {
        realName : "Peter Parker",
        cede : "Marvel Comics",
        powers : ['cobweb', 'agility', 'spidering sensors']
    },
    "Batman": {
        realName : "Bruce Wayne",
        cede : "Dc Comics",
        powers : ['intelligence', 'wealth', 'highlights physical abilities']
    },
    "Iron Man": {
        realName : "Tony Stark",
        cede : "Marvel Comics",
        powers : ['iron armory', 'intelligence', 'wealth']
    },
    "Thor": {
        realName : "Thor Odison",
        cede : "Marvel Comics",
        powers : ['magic hammer', 'fly', 'super force']
    }

}

/* function filterHero(heros, realNameOrNickName) {
    
    let clearHeroUser = realNameOrNickName.toLowerCase().replace(/[.¡!¿?*,/+=%$@&^\;"'_\[\]\{\}]/gi, "");
    let informationHero  = [];
    

    for(const [key, value] of Object.entries(heros)) {
        
        if(key.toLowerCase() === clearHeroUser || value.realName.toLowerCase() === clearHeroUser) {
            informationHero.push("Nick Name: " + key, value)
            nickName = key;
            console.log(informationHero)
        }
    }
    return nickName, informationHero
}

console.log(filterHero(superHeros, "tony stark")); 
 */

/* function orderHero(option, heros) {
    
      let characters = []; 

      for(const nameSuperHero in heros) {
        console.log(nameSuperHero)
        const info = heros[nameSuperHero]
        console.log(info)

        characters.push( {
            name: nameSuperHero,
            realName: info.realName,
            powers: info.powers
        });

      }
      characters;

      //Ordering alphabetically ascending
        characters.sort(function(a,b){
            if(a[option] < b[option]) return -1;
            if(a[option] > b[option]) return 1;
            return 0;
        })
      
      
      console.log(characters)
}

orderHero('realName', superHeros);  */

// Practicing number 2
function orderHero(option, heros) {
    
    let characters = []; 

    for(element in heros) {
        let nickName = element;
        let information = heros[element];

        characters.push({
            name: nickName,
            realName: information.realName,
            powers: information.powers
        });
    };

    characters;

    characters.sort(function(a,b) {
        if(a[option] < b[option]) return -1;
        if(a[option] > b[option]) return 1;
        return 0;
    })

    return characters;
}

console.log(orderHero('realName', superHeros)); 
