import PropTypes from 'prop-types';
import RollItem from './RollItem';

function RollList ({rolls}) {
  return (
    <ul className='cards'>

        {rolls.map((roll) => ( 
         <li key={roll.id} className='card'>
            <RollItem roll={roll}></RollItem>
        
         </li>
         ))}
        
    </ul>
  );
}

RollList.propTypes = {
  rolls: PropTypes.array.isRequired
};

export default RollList;