
import '../styles/App.scss';

import { useState, useEffect } from 'react';
import RollList from './rolls/RollList';
function App() {
  const [rolls, setRolls]= useState ([]);

  useEffect(()=> {fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
  .then((response) => response.json())
  .then((responseData) => {
    setRolls(responseData)
  });},[])
  
     
  
  return (
   <div className="page">
    <header>
      <h1>Herry Potter</h1>
    </header>
    <main>
      <form>
        <label htmlFor="">Busca por personaje:</label>
        <input type="text" />
        <label htmlFor="">Seleciona la casa:</label>
        <select name="house" id="house">
        <option value="gryffindor">gryffindor</option>
        </select>
      </form>
      <section className='rolls'>
      <RollList rolls={rolls}></RollList> 
      </section>

    </main>
    <footer>
        <small>&copy;2024 Yanru</small>
      </footer>
   </div>
  )
}

export default App;
