function RollItem({roll}) {
  return (
    
    
     <div className='details'>
    <img src={roll.image || "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"} alt={"Foto de" + roll.name} className='card__img'/>
     <div>
      <h2 className='card__title'>{roll.name}</h2>
      <p className='card__description'>{roll.species}</p>
     </div>
    </div>
  
  );
}

export default RollItem;