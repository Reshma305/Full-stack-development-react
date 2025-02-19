import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function ThemeChanger() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme} className="toggle-button">
        Toggle Mode
      </button>
    </div>
  );
}
export default ThemeChanger;