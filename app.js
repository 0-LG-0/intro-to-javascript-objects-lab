const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}

//--------------------------------------------------------------------------

//                  |---------- Exercise 1 ----------|

//console.dir(pokemon, { maxArrayLength: null })

//console.log(pokemon[58]);

//--------------------------------------------------------------------------

//                  |---------- Exercise 2 ----------|

console.log(game)

//==========================================================================


//                  |---------- Exercise 3 ----------|


console.log('\n --- Exercise 3 --- \n');
/*
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = ['Easy', 'Med', 'Hard']
game.difficulty = game.difficulty[0]

//=====================================================================

//                  |---------- Exercise 4 ----------|


console.log('\n --- Exercise 4 --- \n');
/*
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

for (let object of pokemon) {
    if (object.starter === true) {
        console.log(object);
    }
}

for (let object of pokemon) {
    if (object.name === 'Pikachu') {
        game.party.push(object);
    }
}
console.log(game);

//=====================================================================

//                  |---------- Exercise 5 ----------|


console.log('\n --- Exercise 5 --- \n');
/*
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

//console.log(pokemon);
for (let object of pokemon) {
    if (object.name === 'Gyarados') {
        game.party.push(object);
    }

    if (object.name === 'Mewtwo') {
        game.party.push(object);
    }

    if (object.name === 'Dragonite') {
        game.party.push(object);
    }
}
console.log(game)

//=====================================================================

//                  |---------- Exercise 6 ----------|


console.log('\n --- Exercise 6 --- \n');
/*
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/


for (let gym of game.gyms) {
    if (gym.difficulty < 3) {
        console.log(gym)
        gym.completed = true;
    }
}
console.log(game)

//=====================================================================

//                  |---------- Exercise 7 ----------|


console.log('\n --- Exercise 7 --- \n');
/*
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

for (let object of pokemon) {
    if (object.name === 'Raichu') {
        game.party.splice(0, 1, object)
    }
}
console.log(game)

//=====================================================================

//                  |---------- Exercise 8 ----------|


console.log('\n --- Exercise 8 --- \n');
/*
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

name1 = pokemon[25].name;
name2 = pokemon[129].name;
name3 = pokemon[148].name;
name4 = pokemon[149].name;
console.log(`Party Pokemon: ${name1}, ${name2}, ${name3}, ${name4}`);

console.log('\n');

console.log('Party Pokemon:');
for (let pokemon of game.party) {
    console.log(pokemon.name);
}
console.log('\n');

