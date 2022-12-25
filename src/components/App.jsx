import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
import profile from "./profile.jpg";


function createCard(contact){
  return(
    <Card 
    key ={contact.imgURL}
    name={contact.name}
    img={contact.imgURL}
    tel = {contact.phone}
    email = {contact.email}
    />
   )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img = {profile} />
      
      {contacts.map(createCard)}
  
    </div>
  );
}

export default App;
