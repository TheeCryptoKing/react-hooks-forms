import React, { useState } from "react";

//working with controlled forms 
//A controlled form is a form that derives its input values from state.
//We want to fire it every time the input value changes.

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

// We can listen for several types of events on input fields. onChange will fire every time the value of an input changes.
// we're passing a callback function that accepts event as its argument. The event data being passed in is automatically provided by the onChange event
// event contains data about the target, which is whatever DOM element the event was triggered on.
// this is not the value we provided from state
// When we read event.target.value, we get whatever content is present when the event fired
// we're updating state based on event.target.value. This, in turn, causes a re-render... and the cycle completes. The new state values we just set are used to set the value attributes of our two inputs.
// Form elements include <input>, <textarea>, <select>, and <form> itself. These are all inputs
// For a checkbox (<input type="checkbox">), we use checked
// Controlled forms can be very useful for specific purposes — since we can set our state elsewhere using this setup, it's easy to populate forms from existing available data.When we have a controlled form, the state does not need to be stored in the same component. We could store state in a parent component, instead.

