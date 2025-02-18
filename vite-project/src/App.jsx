import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const AlertButton = ({ message }) => {
  return (
    <button
      onClick={() => alert("Click is clicked")}
      onDoubleClick={() => alert("Double Click is clicked")}
    >
      {message}
    </button>
  );
};

const FriendDetails = ({ name, age }) => {
  return (
    <div>
      <h2>Friend Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const App = () => {
  const myDetails = { name: "Reshma N", age: 19 };
  const friendDetails = { name: "Nivedhitha", age: 19 };

  return (
    <div>
      <h1>Best Friends</h1>
      <p>"We are best friends forever!"</p>
      <AlertButton message="Click Me!" />
      <FriendDetails name={myDetails.name} age={myDetails.age} />
      <FriendDetails name={friendDetails.name} age={friendDetails.age} />
    </div>
  );
};

export default App;
