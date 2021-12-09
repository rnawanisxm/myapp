import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './description.js';
import Weather from './weather.js';
const App = () => {
  const [loc, setLoc] = useState([]);
  //Edit any 5 cities here which are automatically created into a button. 
  const C = ["Philipsburg", "Malaga", "Reykjavik", "Edmonton", "Vancouver"];

  function handleClick(loc1) {
    setLoc(loc1)
  }

  //console.log(place)

  //Built for scalability and easily readable! Just add any component under the return statement where loc is our props being handled.
  return (
    <>
      <div className="citie">
        {/* Setting state of loc using buttons. */}
        {C.map((loc) => {
          return (
            <button onClick={() => handleClick(loc)} className="b1">
              <h2>{loc}</h2>
            </button>
          )
        })
        }
      </div>

      {/* Include all components under buttons*/}
      {/*This component queries the backend server 
          for information from handleClick*/}
      <Description loc={loc} />

      {/*This component queries OpenWeatherMap API 
          for weather from handleClick*/}
      <Weather loc={loc} />


      </>
  )
}

export default App;