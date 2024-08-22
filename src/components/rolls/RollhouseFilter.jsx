function RollHouseFilter({houseFilter, handleChangeHouseFilter}) {
  return (
    
    <div className='form_house'>
        <label >Selecciona la casa</label>
        <div>
        <select onChange={handleChangeHouseFilter} value={houseFilter} name="houseSelect" id="houseSelect">
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
        </select>
      </div>
    </div>
   
  );
}

export default RollHouseFilter;