import PropTypes from "prop-types"

function RollHouseFilter({houseFilter, handleChangeHouseFilter}) {
  return (
    
    <div className='form_house'>
        <label className="search__title">Selecciona la casa : </label>
        <div>
        <select className="input" onChange={handleChangeHouseFilter} value={houseFilter} name="houseSelect" id="houseSelect">
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
        </select>
      </div>
    </div>
   
  );
}

RollHouseFilter.propTypes= {
  houseFilter: PropTypes.string.isRequired,
  handleChangeHouseFilter:PropTypes.func.isRequired,

}
export default RollHouseFilter;