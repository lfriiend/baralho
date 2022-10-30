import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Pokemon } from './Pokemon';

function App() {




  const getPokemon = async (id: number) => {
    const pokemon = await api(id)
    setPokemon(pokemon);
    return pokemon;
  }


  const [pokemon, setPokemon] = useState<Pokemon>({});


  useEffect(() => {
    console.log('ENTROU AQUI')

    console.log([pokemon.sprites]);
  }, [pokemon]);




  return (

    <div className="App">
      <h1 className='pokemon_name'></h1>
      <button onClick={() => getPokemon(1)}>
        Click me
      </button>
      <h1 className='pokemon_number'></h1>
      <div>
        {pokemon.name}
        <br></br>
        {pokemon.height}
        <br></br>
      </div>



      <img src="#" alt="" className='pokemon_image' />

    </div>
  );
}

export default App;