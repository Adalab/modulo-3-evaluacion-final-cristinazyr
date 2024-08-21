import RollItem from "./rolls/RollItem";

function RollList({rolls}) {
    

    return(
        <ul className="cards">
      {rolls.map((roll) => (
        <li key={roll.id} className="card">
          <RollItem roll={roll} />
        </li>
      ))}
    </ul>
  );
    
    }

       
  export default RollList;