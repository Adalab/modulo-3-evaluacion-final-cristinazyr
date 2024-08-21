import { useState, useEffect } from "react";
import Landing from "./Landing";

import '../styles/App.scss';

function App() {
  //1. VARIABLE DE ESTADO
 const[rolls, setRolls] = useState([])

  //2. USEEFFECT
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
      .then((response) => response.json())
      .then((responseData) => {
        setRolls(responseData);
      });
  }, []);


  //3. EVENTOS 

  //4. FUNCIONES DE RENDER





  
 return (
    <div className="page">
      <header>
        <h1>Harry Potter</h1>
      </header>

      <main className="main">
       <Landing rolls={rolls}/>
      </main>

      <footer>
        <small>&copy;2024 Yanru</small>
      </footer>
    </div>
  );
}

export default App;
