
import '../styles/App.scss';

import { useState, useEffect } from 'react';
import RollList from './rolls/RollList';
import RollNameFilter from './rolls/RollNameFilter';
import RollHouseFilter from './rolls/RollhouseFilter';
import { Routes, Route } from 'react-router-dom';



function App() {


  const [rolls, setRolls]= useState ([]);
  const [filterName, setFilterName]=useState ("")
  const [houseFilter, setHouseFilter]=useState("gryffindor")




  useEffect(()=> {fetch(`https://hp-api.onrender.com/api/characters/house/${houseFilter}`)
  .then((response) => response.json())
  .then((responseData) => {
    setRolls(responseData)
  });},[houseFilter])




  const handleFormSubmit=(ev)=>{
    ev.preventDefault();
  }

  const handleFilterName = (ev) =>{
   
    setFilterName( ev.currentTarget.value); 
  }

  const handleChangeHouseFilter = (ev) => {
    const newValue = ev.currentTarget.value;
    setHouseFilter(newValue);
  }



  const filteredRolls=rolls
  .filter(roll=>roll.name.toLowerCase().includes(filterName.toLowerCase()))
  .filter(character => character.house.toLowerCase() === houseFilter.toLowerCase())



  return (
   <div className="page">
    <header>
      <h1>Herry Potter</h1>
    </header>
    <main>
      <Routes>
        <Route path='/' 
        element={        
         <>
           <form onSubmit={handleFormSubmit}>
            <RollNameFilter filterName={filterName} handleFilterName={handleFilterName}></RollNameFilter>
            <RollHouseFilter houseFilter={houseFilter} handleChangeHouseFilter={handleChangeHouseFilter}></RollHouseFilter>
           </form>
           <section className='rolls'>
            {filteredRolls.length===0 ? (<p>No hay ningún personaje que coincida con la palabra {filterName}</p>) : <RollList rolls={filteredRolls}></RollList> }
          </section>
        </>
        }/>
        <Route path='/detail'/>
      </Routes>
        

      
        
    </main>
    <footer>
        <small>&copy;2024 Yanru</small>
      </footer>
   </div>
  )
}

export default App;
