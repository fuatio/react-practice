import React from "react";
import Event from "./Event"
import emojipedia from "../emojipedia"

function createEvent(emojipedia) {
  return (
    <Event
      key={emojipedia.id}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  )

}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEvent)}
      </dl>
    </div>
  );
}

export default App;
