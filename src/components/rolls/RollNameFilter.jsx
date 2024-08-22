import PropTypes from 'prop-types';

function RollNameFilter({filterName, handleFilterName}) {
  return (
    <div>
     <label className="search__title" htmlFor="rollSearch">Busca por personaje  :</label>
     <input className="input" onInput={handleFilterName} value={filterName} type="text" name="rollSearch" id="rollSearch"/>
     </div>
  );
}

RollNameFilter.propTypes= {
  filterName: PropTypes.string.isRequired,
  handleFilterName:PropTypes.func.isRequired,

}

export default RollNameFilter;