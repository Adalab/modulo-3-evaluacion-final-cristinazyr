function RollNameFilter({filterName, handleFilterName}) {
  return (
    <>
     <label htmlFor="rollSearch">Busca por personaje:</label>
     <input onInput={handleFilterName} value={filterName} type="text" name="rollSearch" id="rollSearch"/>
    </>
  );
}

export default RollNameFilter;