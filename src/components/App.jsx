
import '../styles/App.scss';

import { useState, useEffect } from 'react';
import RollList from './rolls/RollList';
import RollNameFilter from './rolls/RollNameFilter';
import RollHouseFilter from './rolls/RollhouseFilter';
import logo from "../images/logo.png"
import { Routes, Route } from 'react-router-dom';
import RollDetail from './rolls/RollDetail';


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
    <header className='title__box'>
      <img className='logo' src={logo} alt="logo Harry Potter" />
    </header>
    <main>
       <Routes>
        <Route path='/' element={<>
           <form className="search__box" onSubmit={handleFormSubmit}>
            <div className='inside__search__box'>
            <RollNameFilter filterName={filterName} handleFilterName={handleFilterName}></RollNameFilter>
            <RollHouseFilter houseFilter={houseFilter} handleChangeHouseFilter={handleChangeHouseFilter}></RollHouseFilter>
            </div>
           </form>
           <section className='rolls'>
            {filteredRolls.length===0 ? (<p>No hay ningún personaje que coincida con la palabra {filterName}</p>) : <RollList rolls={filteredRolls}></RollList> }
          </section>
        </>}></Route>
        <Route path='/detail/:id' element={<RollDetail rolls={rolls}/>}></Route>
       </Routes> 
    </main>
    <footer>
        <small>&copy;2024 Yanru</small>
      </footer>
   </div>
  )
}

export default App;
