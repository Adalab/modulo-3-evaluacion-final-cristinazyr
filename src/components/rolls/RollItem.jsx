
function RollItem(roll) {
  return (
   <>
      <img
        src={roll.image}
        alt={`Foto de ${roll.name}`}
        title={`Foto de ${roll.name}`}
        className="card__img"
      />
      <div>
        <h2 className="card__title">
          {roll.name}
        </h2>
        <p className="card__description">
          {roll.species} 
        </p>
      </div>  
      </>     
   
  );
  }
export default RollItem;