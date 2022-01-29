import React, { useState, useEffect } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import gsap from "gsap";
function DarkTheme() {
  let [darkMode, setDarkMode] = useState(false);

  let handleThemeChange = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    gsap.to(".toggle-theme ", {
      scale: 2,
      rotate: 360,
      clearProps: true,
    });
  };

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    setDarkMode(theme === "dark" ? true : false);
  }, []);

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    theme === "dark"
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <div>
      <button className="toggle-theme" onClick={(e) => handleThemeChange()}>
        {darkMode ? (
          <FaRegMoon style={{ color: "#888" }} />
        ) : (
          <FaRegSun style={{ color: "gold" }} />
        )}
      </button>
    </div>
  );
}

export default DarkTheme;
