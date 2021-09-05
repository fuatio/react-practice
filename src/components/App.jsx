import React, {useState} from "react";




function App() {

  let [time, setTime] = useState(new Date().toLocaleTimeString());

  function refreshTime() {
    setTime(new Date().toLocaleTimeString())
  }

  setInterval(refreshTime, 1000)

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshTime}>Get Time</button>

    </div>
  );
}

export default App;
