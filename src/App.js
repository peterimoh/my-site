import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [darkTheme, setDarkTheme] = useState(getDefaultTheme());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme));
  }, [darkTheme]);

  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem("dark"));
    return selectedTheme || false;
  }

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Hero />
    </div>
  );
}

export default App;
