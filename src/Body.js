import React from "react";
import Card from "./components/Card";
import Contacts from "./Contacts";
import ChangeNum from "./components/ChangeNum";
import Time from "./components/Time";
import Form from "./components/Form";
import FormFullname from "./components/FormFullname";

function Body() {
  function createCard(Contact) {
    return (
      <Card
        _id={Contact._id}
        //Key is not accessible to us use another id instead
        key={Contact._id}
        name={Contact.name}
        email={Contact.email}
        contact={Contact.contact}
        img={Contact.img}
      />
    );
  }
  return (
    <div
      className="flex flex-col justify-center items-center space-y-6 pt-12"
      style={{
        backgroundImage:
          "linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
        paddingBottom: "50px",
      }}
    >
      <h1 className="text-3xl font-bold text-center">Form updates fullname</h1>
      <FormFullname />
      <h1 className="text-3xl font-bold text-center">
        Form which updates lists on input
      </h1>
      <Form />
      <h1 className="text-3xl font-bold text-center">Get Time</h1>
      <Time />
      <h1 className="text-3xl font-bold text-center">Change Number</h1>
      <ChangeNum />
      <h1 className="text-3xl font-bold text-center p-6">My Contacts</h1>
      <div className="flex flex-col justify-center items-center space-y-12">
        {Contacts.map(createCard)}
      </div>
    </div>
  );
}

export default Body;
