

// import React from "react";

// function DisplayData({ firstName, lastName }) {
//   return (
//     <div>
//       <h1>{firstName}</h1>
//       <h1>{lastName}</h1>
//     </div>
//   );
// }

// export default DisplayData;

// Form, that displays our form data as soon as a user starts filling in the form:

// or add to div <DisplayData firstName={firstName} lastName={lastName} />

//This can be a very useful way to capture user input and utilize it throughout your application, even if a server is not involved.

//  let's say we want to write an input that only takes the numbers 0 through 5. We can now validate the data the user enters before we set it on the state, allowing us to block any invalid values:

// function Form() {
//     const [number, setNumber] = useState(0);
  
//     function handleNumberChange(event) {
//       const newNumber = parseInt(event.target.value);
//       if (newNumber >= 0 && newNumber <= 5) {
//         setNumber(newNumber);
//       }
//     }
  
//     return (
//       <form>
//         <input type="number" value={number} onChange={handleNumberChange} />
//       </form>
//     );
//   }

// If the input is invalid, we simply avoid updating the state, preventing the input from updating. We could optionally set another state property (for example, isInvalidNumber). Using that state property, we can show an error in our component to indicate that the user tried to enter an invalid value:

//  function Form() {
//     const [number, setNumber] = useState(0);
//     const [isInvalidNumber, setIsInvalidNumber] = useState(null);
  
//     function handleNumberChange(event) {
//       const newNumber = parseInt(event.target.value);
//       if (newNumber >= 0 && newNumber <= 5) {
//         setNumber(newNumber);
//         setIsInvalidNumber(null);
//       } else {
//         setIsInvalidNumber(`${newNumber} is not a valid number!`);
//       }
//     }

//     return (
//       <form>
//         <input type="number" value={number} onChange=                {handleNumberChange} />
//         {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
//       </form>
//     );
//   }


