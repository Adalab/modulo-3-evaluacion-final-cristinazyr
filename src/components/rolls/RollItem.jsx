import { Link } from "react-router-dom";
import { translateData } from "../util/traslations";
import PropTypes from "prop-types"

function RollItem({roll}) {
  return (
    <Link to ={`/detail/${roll.id}`}>
    
    <div className='details'>
    <img src={roll.image || "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"} alt={"Foto de" + roll.name} className='card__img'/>
     <div>
      <h2 className='card__title'>{roll.name}</h2>
      <p className='card__description'>{translateData( roll.species)}</p>
     </div>
    </div>
    
    </Link>
  );
}

RollItem.propTypes={
  roll:PropTypes.object.isRequired
}
export default RollItem;