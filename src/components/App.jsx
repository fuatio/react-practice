import React from "react";
import Card from "./Card"
import contacts from "../contacts"
import Avatar from "./Avatar"
import Detail from "./Detail"

console.log(contacts)
function App() {
  return (
    <div>
      <Avatar
        imgURL='https://ih1.redbubble.net/image.1922391619.7469/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
      />
      <Detail
        detailInfo='partner'
      /> 
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />

    </div>
  );
}

export default App;
