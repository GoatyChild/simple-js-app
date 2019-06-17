var bulbasaur = {

name: 'bulbasaur',
height: 2,
type: 'grass'

}

var charmander = {

name: 'charmander',
height: 10,
type: 'fire'

}

var squirtle = {

name: 'squirtle',
height: 11,
type: 'water'

}

var pokemonRepository = [bulbasaur, charmander, squirtle]

pokemonRepository.forEach(function(currentPokemon){

  Object.keys(currentPokemon).forEach(function(property){

      console.log(currentPokemon[property]);
      document.write('<p>' + currentPokemon[property] + '</p>');
      if (currentPokemon[property] >= 3) {

          document.write('<strong>' + '(Wow that is big!)' + '</strong>');

      }

  });

});
