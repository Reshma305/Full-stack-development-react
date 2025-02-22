import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Form = () => {
  return (
    <div className="form-container">
      <h2>User Details Form</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => console.log("Name:", e.target.value)} />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            onChange={(e) => console.log("Department:", e.target.value)} />
        </div>
      </form>
    </div>
  );
}

export default Form;
