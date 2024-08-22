
import '../styles/App.scss';

import { useState, useEffect } from 'react';
import RollList from './rolls/RollList';
function App() {

  const [rolls, setRolls]= useState ([]);
  const [filterName, setFilterName]=useState ("")

  useEffect(()=> {fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
  .then((response) => response.json())
  .then((responseData) => {
    setRolls(responseData)
  });},[])
  
  const handleFormSubmit=(ev)=>{
    ev.preventDefault();
  } 
  const handleFilterName = (ev) =>{
   
    setFilterName( ev.currentTarget.value); 
  }
  const filteredRolls=rolls
  .filter(roll=>roll.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
   <div className="page">
    <header>
      <h1>Herry Potter</h1>
    </header>
    <main>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Busca por personaje:</label>
        <input onInput={handleFilterName} value={filterName} type="text" />
        <label htmlFor="">Seleciona la casa:</label>
        <select name="house" id="house">
        <option value="gryffindor">gryffindor</option>
        </select>
      </form>
      <section className='rolls'>
      {filteredRolls.length===0 ? (<p>No hay ningún personaje que coincida con la palabra {filterName}</p>) : <RollList rolls={filteredRolls}></RollList> }
      
      </section>

    </main>
    <footer>
        <small>&copy;2024 Yanru</small>
      </footer>
   </div>
  )
}

export default App;
