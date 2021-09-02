import React from "react";
import Card from "./Card"
import contacts from "../contacts"
import Avatar from "./Avatar"
import Detail from "./Detail"

function createCard(contacts) {
  return (
    <Card
    id={contacts.id}
      key={contacts.id}
      name={contacts.name}
      imgURL={contacts.imgURL}
      email={contacts.email}
      phone={contacts.phone} />
  )
}


function App() {
  return (
    <div>
      {contacts.map(createCard)}

      {/* <Card
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
      /> */}

    </div>
  );
}

export default App;
