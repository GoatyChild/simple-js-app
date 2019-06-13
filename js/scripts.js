    var bulbasaur = {

    name: 'bulbasaur',
    height: 7,
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

      console.log(currentPokemon);
      document.write('<p>' + ': ' + currentPokemon + '</p>');
      

    });
