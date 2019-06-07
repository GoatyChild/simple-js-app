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

        
    for (var i = 0; i < pokemonRepository.length; i++) {
        
        console.log(pokemonRepository[i].name);
        
        document.write('<p>' + pokemonRepository[i].name + ' height:' + pokemonRepository[i].height + ' type:' + pokemonRepository[i].type + '</p>')
        
        if (pokemonRepository[i].height >= 3 ) {
            
            console.log('Wow that is big!');
            
            document.write('Wow that is big!');
            
        }

    }

    function loopBlockFunction(currentPokemon){
        
        console.log(currentPokemon);
        document.write(currentPokemon);
    }

    pokemonRepository.forEach(loopBlockFunction);

	
   
    

    
    
    
    