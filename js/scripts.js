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

var pikachu = {

name: 'pikachu',
height: 3,
type: 'electric'

}

var pokemonRepository = (function () {
  var repository = [];

  return {
    add: function(pokemon) {
      repository.push(pokemon);
    },
    getAll: function() {
      return repository;
    }
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Bulbasaur' });
console.log(pokemonRepository.getAll());

var pokemonRepository = [bulbasaur, charmander, squirtle, pikachu];

pokemonRepository.forEach(function(currentPokemon){
Object.keys(currentPokemon).forEach(function(property){
document.write('<br>' + '<b>' + property + '</b>' + ': ' + currentPokemon[property] + '</br>');
if (currentPokemon[property] >=2 ) {
      document.write('<br>' + '<em>' + '(Wow that is big!)' + '</em>' + '</br>');
  }
    });
});
