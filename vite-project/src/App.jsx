import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  // Function to log user details
  const logUserDetails = () => {
    alert("Hi");
    const userDetails = {
      name: "Reshma N",
      dept: "M.Tech cse",
      rollNo: "19"
    };
    console.log("User Details:", userDetails);
  };

  // Function to log the current date
  const logCurrentDate = () => {
    alert("Hi");
    const today = new Date().toLocaleDateString();
    console.log("Current Date:", today);
  };

  // Function to log a random good habit
  const logGoodHabit = () => {
    alert("Hi");
    const goodHabits = [
      "Drink plenty of water daily. 💧",
      "Read at least 10 pages of a book. 📖",
      "Exercise for 30 minutes every day. 🏋️‍♂️",
      "Practice gratitude and positivity. 😊",
      "Sleep for at least 7-8 hours. 😴",
      "Avoid excessive screen time. 📵",
      "Meditate for mental clarity. 🧘‍♂️",
      "Eat healthy and balanced meals. 🥗"
    ];
    const randomHabit = goodHabits[Math.floor(Math.random() * goodHabits.length)];
    console.log("Good Habit:", randomHabit);
  };

  return (
    <div className="container">
      <h1>Click the buttons to log details in the console</h1>
      <button onClick={logUserDetails}>Log User Details</button>
      <button onClick={logCurrentDate}>Log Current Date</button>
      <button onClick={logGoodHabit}>Log Good Habit</button>
    </div>
  );
}

export default App;
 