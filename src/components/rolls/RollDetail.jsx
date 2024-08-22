import { useParams } from "react-router-dom";
import { translateData } from "../util/traslations";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"


function RollDetail({rolls}) {
    const params= useParams()
    const rollToShow= rolls.find(roll=>roll.id===params.id)
    const status=rollToShow.alive ? "vivo" : "muerto"
    if(rollToShow===undefined){
        return<div>
            <h2>Contacto no encontrado</h2>
        </div>
    }
  return (
    <>
     <Link className="link__back" to="/">Volver</Link> 
     <div className='detail__container'>
     
            <div className="roll__detail">
            <div>
                <img src={rollToShow.image || "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"} alt={rollToShow.name} />
            </div>
            <div className='roll__info__box'>
                <p className='roll__info'>Nombre: {rollToShow.name}</p>
                <p className='roll__info'>Status: {status}</p>
                <p className='roll__info'>Especie: {translateData(rollToShow.species)}</p>
                <p className='roll__info'>Genero: {translateData(rollToShow.gender)}</p>
                <p className='roll__info'>Casa: {rollToShow.house}</p>
            </div>
            
         
         </div>
        </div>
        
    </>
  );
}

RollDetail.propTypes={
    rolls:PropTypes.array.isRequired
}

export default RollDetail;