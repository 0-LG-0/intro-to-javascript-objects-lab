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

//=====================================================================

//                  |---------- Exercise 9 ----------|


console.log('\n --- Exercise 9 --- \n');
/*
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

name1 = pokemon[24].name;
name2 = pokemon[6].name;
name3 = pokemon[3].name;
name4 = pokemon[0].name;
console.log(`Starter Pokemon: ${name1}, ${name2}, ${name3}, ${name4}`);

console.log('\n');

console.log('Starter Pokemon:')
for (let object of pokemon) {
    if (object.starter === true) {
        console.log(object.name)
    }
}

//=====================================================================

//                  |---------- Exercise 10 ----------|


console.log('\n --- Exercise 10 --- \n');
/*
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
/*
const catchPokemon = {
function(pokemonObj) {
    game.party.push({pokemonObj});
    console.log(game.party);
}
};
catchPokemon.function(pokemon[5]);
*/
//=====================================================================

//                  |---------- Exercise 11 ----------|


console.log('\n --- Exercise 11 --- \n');
/*
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

const catchPokemon = {
    function(pokemonObj) {
        game.party.push(pokemonObj);
        console.log(game.party);
        pokeball = game.items[1];
        pokeball.quantity -= 1
        console.log(game.items[1]);
    }
};
catchPokemon.function(pokemon[5]);

//=====================================================================

//                  |---------- Exercise 12 ----------|


console.log('\n --- Exercise 12 --- \n');
/*
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

console.log(game.gyms);
for (let gym of game.gyms) {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
}
console.log(game.gyms);

//=====================================================================

//                  |---------- Exercise 13 ----------|


console.log('\n --- Exercise 13 --- \n');
/*
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

const gymStatus = {
    function() {
        gymTally = { completed: 0, incomplete: 0 };
        for (let gym of game.gyms) {
            if (gym.completed === true) {
                gymTally.completed += 1
            }
            else if (gym.completed === false) {
                gymTally.incomplete += 1
            }
        }
        console.log(gymTally);
    }
}
gymStatus.function();

//=====================================================================

//                  |---------- Exercise 14 ----------|


console.log('\n --- Exercise 14 --- \n');
/*
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
const partyCount = {
    function() {
        partyMembers = { pokemon: 0 };
        for (let obj of game.party) {
            partyMembers.pokemon += 1
        }
        console.log({ partyMembers });
    }
};
partyCount.function();

//=====================================================================

//                  |---------- Exercise 15 ----------|


console.log('\n --- Exercise 15 --- \n');
/*
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
for (let gym of game.gyms) {
    if (gym.difficulty < 8) {
        gym.completed = true
    }
}
console.log(game.gyms);

//=====================================================================

//                  |---------- Exercise 16 ----------|


console.log('\n --- Exercise 16 --- \n');
/*
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log(game);

