import React, { useState, useEffect } from 'react';
import api from '../../api';

function App() {

  api(25);

  return (
    <div className="App">
      <h2>testes</h2>
      <h1 className='pokemon_name'></h1>

      <h1 className='pokemon_number'></h1>

      <img src="#" alt="" className='pokemon_image' />

    </div>
  );
}

export default App;